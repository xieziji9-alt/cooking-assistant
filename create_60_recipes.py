#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
只保留前60道菜谱
"""

import csv
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def read_recipes(csv_file, max_count=60):
    """读取前N道菜谱"""
    recipes = []
    with open(csv_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        header_line = lines[0].strip().lstrip('# ')
        data_lines = lines[1:]
        
        reader = csv.DictReader(data_lines, fieldnames=header_line.split(','))
        for i, row in enumerate(reader):
            if not row.get('name'):
                continue
            if i >= max_count:
                break
            recipes.append(row)
    return recipes

def write_recipes(recipes, output_file):
    """写入菜谱到CSV文件"""
    if not recipes:
        print("❌ 没有菜谱可写入")
        return
    
    fieldnames = ['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category']
    
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        # 写入带#的header
        f.write('# ' + ','.join(fieldnames) + '\n')
        
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        for recipe in recipes:
            writer.writerow(recipe)
    
    print(f"✅ 成功写入 {len(recipes)} 道菜谱到 {output_file}")

def main():
    recipes = read_recipes('data/recipes_clean.csv', max_count=60)
    
    print(f"📊 保留的菜谱数: {len(recipes)}")
    print("\n保留的菜谱:")
    for i, r in enumerate(recipes, 1):
        bv = r['bilibiliUrl'].split('/')[-1]
        print(f"  {i}. {r['name']} - {bv}")
    
    write_recipes(recipes, 'data/recipes_60.csv')

if __name__ == '__main__':
    main()

