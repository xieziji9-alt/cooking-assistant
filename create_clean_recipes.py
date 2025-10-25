#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
创建一个只包含唯一BV号菜谱的干净CSV文件
"""

import csv
import re
import sys
import io
from collections import defaultdict

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def extract_bv_from_url(url):
    """从URL中提取BV号"""
    match = re.search(r'BV[0-9a-zA-Z]{10}', url)
    if match:
        return match.group(0)
    match = re.search(r'av(\d+)', url)
    if match:
        return f'av{match.group(1)}'
    return None

def read_recipes(csv_file):
    """读取所有菜谱"""
    recipes = []
    with open(csv_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        header_line = lines[0].strip().lstrip('# ')
        data_lines = lines[1:]
        
        reader = csv.DictReader(data_lines, fieldnames=header_line.split(','))
        for row in reader:
            if not row.get('name'):
                continue
            bv = extract_bv_from_url(row['bilibiliUrl'])
            recipes.append({
                'name': row['name'],
                'bv': bv,
                'row': row
            })
    return recipes

def main():
    recipes = read_recipes('data/recipes.csv')
    
    # 统计每个BV号被使用的次数
    bv_count = defaultdict(list)
    for recipe in recipes:
        bv_count[recipe['bv']].append(recipe)
    
    # 只保留唯一的BV号
    unique_recipes = []
    for bv, recipe_list in bv_count.items():
        if len(recipe_list) == 1:
            unique_recipes.append(recipe_list[0])
    
    print(f"📊 原始菜谱数: {len(recipes)}")
    print(f"✅ 唯一BV号的菜谱数: {len(unique_recipes)}")
    print(f"❌ 删除的菜谱数: {len(recipes) - len(unique_recipes)}")
    print("=" * 60)
    
    # 写入新的CSV文件
    output_file = 'data/recipes_clean.csv'
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        f.write('# name,description,ingredients,cookware,difficulty,cookingTime,bilibiliUrl,category\n')
        writer = csv.DictWriter(f, fieldnames=['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category'])
        for recipe in unique_recipes:
            writer.writerow(recipe['row'])
    
    print(f"\n✅ 已创建干净的CSV文件: {output_file}")
    print(f"📝 包含 {len(unique_recipes)} 道菜谱")
    
    # 打印保留的菜谱列表
    print("\n保留的菜谱:")
    for i, recipe in enumerate(sorted(unique_recipes, key=lambda x: x['name']), 1):
        print(f"{i}. {recipe['name']}")

if __name__ == '__main__':
    main()

