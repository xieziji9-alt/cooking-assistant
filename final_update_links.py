#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
最终更新脚本：使用原始有效链接 + 已验证的新链接
"""

import csv
import re
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from complete_verified_links import COMPLETE_VERIFIED_LINKS

def is_valid_bilibili_link(url):
    """检查是否是有效的B站链接"""
    pattern = r'https://www\.bilibili\.com/video/BV[0-9a-zA-Z]{8,}'
    return bool(re.match(pattern, url))

def is_fake_link(url):
    """检查是否是假链接（BV1Wx411b7开头的）"""
    return 'BV1Wx411b7' in url

def final_update(input_file, output_file):
    """最终更新：保留原始有效链接，替换假链接为已验证的链接"""
    rows = []
    updated_count = 0
    kept_valid_count = 0
    still_fake_count = 0
    
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
            
            # 如果是假链接，尝试替换
            if is_fake_link(url):
                if name in COMPLETE_VERIFIED_LINKS:
                    row[6] = COMPLETE_VERIFIED_LINKS[name]
                    updated_count += 1
                    print(f"✅ 更新: {name} -> {COMPLETE_VERIFIED_LINKS[name]}")
                else:
                    still_fake_count += 1
                    print(f"⚠️  仍然是假链接: {name}")
            elif is_valid_bilibili_link(url):
                kept_valid_count += 1
            
            rows.append(row)
    
    # 写入新文件
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(rows)
    
    print(f"\n📊 统计:")
    print(f"  ✅ 保持有效: {kept_valid_count}")
    print(f"  🔧 已更新: {updated_count}")
    print(f"  ⚠️  仍然是假链接: {still_fake_count}")
    print(f"  📁 输出文件: {output_file}")
    
    total_valid = kept_valid_count + updated_count
    print(f"\n✅ 完成！现在有 {total_valid} 道有效菜谱")
    if still_fake_count > 0:
        print(f"⚠️  还有 {still_fake_count} 道菜需要继续搜索真实链接")
    
    return kept_valid_count, updated_count, still_fake_count

if __name__ == '__main__':
    valid, updated, fake = final_update('data/recipes.csv', 'data/recipes_final.csv')

