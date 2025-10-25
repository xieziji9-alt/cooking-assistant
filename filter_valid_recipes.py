#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
只保留有效B站链接的菜谱
"""

import csv
import re

def is_valid_bilibili_link(url):
    """检查是否是有效的B站链接（完整的BV号）"""
    pattern = r'https://www\.bilibili\.com/video/BV[0-9a-zA-Z]{10}'
    return bool(re.match(pattern, url))

def filter_valid_recipes(input_file, output_file):
    """只保留有效链接的菜谱"""
    valid_recipes = []
    invalid_recipes = []
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        
        for row in reader:
            # 保留注释行和空行
            if not row or row[0].startswith('#'):
                valid_recipes.append(row)
                continue
            
            # 检查字段数量
            if len(row) < 8:
                continue
            
            name = row[0].strip()
            url = row[6].strip()
            
            if is_valid_bilibili_link(url):
                valid_recipes.append(row)
            else:
                invalid_recipes.append(name)
    
    # 写入新文件
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(valid_recipes)
    
    print(f"✅ 有效菜谱数量: {len(valid_recipes) - 1}")  # 减去注释行
    print(f"❌ 删除无效菜谱: {len(invalid_recipes)}")
    print(f"\n删除的菜谱列表：")
    for name in invalid_recipes[:20]:
        print(f"  - {name}")
    if len(invalid_recipes) > 20:
        print(f"  ... 还有 {len(invalid_recipes) - 20} 道菜")
    
    print(f"\n✅ 输出文件: {output_file}")
    
    return len(valid_recipes) - 1, len(invalid_recipes)

if __name__ == '__main__':
    valid, invalid = filter_valid_recipes('data/recipes.csv', 'data/recipes_valid_only.csv')
    print(f"\n📊 最终结果: {valid} 道有效菜谱")

