#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
创建最终清理的菜谱 - 只保留真实的BV号
"""

import csv
import re
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def is_fake_bv(bv):
    """检查是否是假的BV号"""
    # BV1234567890 这种明显是假的
    if re.match(r'BV123456789\d', bv):
        return True
    return False

def extract_bv_from_url(url):
    """从URL中提取BV号"""
    match = re.search(r'BV[0-9a-zA-Z]{10}', url)
    if match:
        return match.group(0)
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
            if bv and not is_fake_bv(bv):
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
    recipes = read_recipes('data/recipes_clean.csv')
    
    print(f"📊 保留的菜谱数: {len(recipes)}")
    print("\n保留的菜谱:")
    for i, r in enumerate(recipes, 1):
        print(f"  {i}. {r['name']}")
    
    write_recipes(recipes, 'data/recipes_final_clean.csv')

if __name__ == '__main__':
    main()

