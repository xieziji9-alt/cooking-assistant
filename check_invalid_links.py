#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
检查所有无效的B站链接
"""

import csv
import re

def is_valid_bilibili_link(url):
    """检查是否是有效的B站链接（完整的BV号）"""
    # BV号应该是 BV + 至少8位字符（通常是10-12位）
    pattern = r'https://www\.bilibili\.com/video/BV[0-9a-zA-Z]{8,}'
    return bool(re.match(pattern, url))

def check_links(csv_file):
    """检查CSV文件中的所有链接"""
    invalid_recipes = []
    valid_count = 0
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        line_num = 0
        
        for row in reader:
            line_num += 1
            
            # 跳过注释行和空行
            if not row or row[0].startswith('#'):
                continue
            
            # 检查字段数量
            if len(row) < 8:
                continue
            
            name = row[0].strip()
            url = row[6].strip()
            
            if is_valid_bilibili_link(url):
                valid_count += 1
            else:
                invalid_recipes.append({
                    'line': line_num,
                    'name': name,
                    'url': url
                })
    
    return valid_count, invalid_recipes

if __name__ == '__main__':
    valid_count, invalid_recipes = check_links('data/recipes.csv')
    
    print(f"✅ 有效链接数量: {valid_count}")
    print(f"❌ 无效链接数量: {len(invalid_recipes)}")
    print(f"\n无效链接列表：\n")
    
    for recipe in invalid_recipes[:50]:  # 只显示前50个
        print(f"第{recipe['line']}行: {recipe['name']}")
        print(f"  链接: {recipe['url']}")
        print()
    
    if len(invalid_recipes) > 50:
        print(f"... 还有 {len(invalid_recipes) - 50} 个无效链接")
    
    # 保存到文件
    with open('invalid_links.txt', 'w', encoding='utf-8') as f:
        for recipe in invalid_recipes:
            f.write(f"{recipe['name']}\t{recipe['url']}\n")
    
    print(f"\n完整列表已保存到 invalid_links.txt")

