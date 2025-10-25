#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
应用真实验证过的B站链接到CSV文件
"""

import csv
import re
from verified_links_map import VERIFIED_BILIBILI_LINKS

def is_valid_bilibili_link(url):
    """检查是否是有效的B站链接"""
    pattern = r'https://www\.bilibili\.com/video/BV[0-9a-zA-Z]{8,}'
    return bool(re.match(pattern, url))

def apply_verified_links(input_file, output_file):
    """应用验证过的链接"""
    rows = []
    fixed_count = 0
    kept_valid_count = 0
    still_invalid_count = 0
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        
        for row in reader:
            # 保留注释行和空行
            if not row or row[0].startswith('#'):
                rows.append(row)
                continue
            
            # 检查字段数量
            if len(row) < 8:
                rows.append(row)
                continue
            
            name = row[0].strip()
            url = row[6].strip()
            
            # 如果链接无效，尝试从映射表中获取
            if not is_valid_bilibili_link(url):
                if name in VERIFIED_BILIBILI_LINKS:
                    row[6] = VERIFIED_BILIBILI_LINKS[name]
                    fixed_count += 1
                    print(f"✅ 修复: {name} -> {VERIFIED_BILIBILI_LINKS[name]}")
                else:
                    still_invalid_count += 1
                    print(f"⚠️  仍然无效: {name}")
            else:
                kept_valid_count += 1
            
            rows.append(row)
    
    # 写入新文件
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(rows)
    
    print(f"\n📊 统计:")
    print(f"  ✅ 保持有效: {kept_valid_count}")
    print(f"  🔧 已修复: {fixed_count}")
    print(f"  ⚠️  仍然无效: {still_invalid_count}")
    print(f"  📁 输出文件: {output_file}")
    
    return kept_valid_count, fixed_count, still_invalid_count

if __name__ == '__main__':
    valid, fixed, invalid = apply_verified_links('data/recipes.csv', 'data/recipes_fixed.csv')
    total = valid + fixed
    print(f"\n✅ 完成！现在有 {total} 道有效菜谱")
    if invalid > 0:
        print(f"⚠️  还有 {invalid} 道菜需要手动查找链接")

