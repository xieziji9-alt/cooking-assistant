#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
找出使用重复BV号的菜谱
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
                'url': row['bilibiliUrl'],
            })
    return recipes

def main():
    recipes = read_recipes('data/recipes.csv')
    
    # 统计每个BV号被使用的次数
    bv_count = defaultdict(list)
    for recipe in recipes:
        bv_count[recipe['bv']].append(recipe['name'])
    
    # 找出重复的BV号
    duplicates = {bv: names for bv, names in bv_count.items() if len(names) > 1}
    
    print(f"📊 总共有 {len(recipes)} 道菜谱")
    print(f"🔍 发现 {len(duplicates)} 个重复的BV号")
    print("=" * 60)
    
    for bv, names in sorted(duplicates.items(), key=lambda x: len(x[1]), reverse=True):
        print(f"\n{bv} 被 {len(names)} 道菜使用:")
        for name in names:
            print(f"  - {name}")
    
    # 统计需要重新搜索的菜谱数量
    need_search = sum(len(names) - 1 for names in duplicates.values())
    print(f"\n⚠️  需要重新搜索视频的菜谱: {need_search} 道")

if __name__ == '__main__':
    main()

