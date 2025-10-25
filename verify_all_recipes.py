#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证所有菜谱的B站视频链接是否真实对应
"""

import csv
import re
import sys
import io

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
        # 找到真正的header行（第一行是注释）
        header_line = lines[0].strip().lstrip('# ')
        data_lines = lines[1:]

        # 使用header解析数据
        reader = csv.DictReader(data_lines, fieldnames=header_line.split(','))
        for row in reader:
            if not row.get('name'):
                continue
            bv = extract_bv_from_url(row['bilibiliUrl'])
            recipes.append({
                'name': row['name'],
                'bv': bv,
                'url': row['bilibiliUrl'],
                'full_row': row
            })
    return recipes

def main():
    recipes = read_recipes('data/recipes.csv')
    
    print(f"📊 总共有 {len(recipes)} 道菜谱")
    print("\n开始验证每道菜的视频链接...")
    print("=" * 60)
    
    # 打印前20道菜的信息
    for i, recipe in enumerate(recipes[:20], 1):
        print(f"{i}. {recipe['name']:<15} -> {recipe['bv']}")
    
    print("\n..." )
    print(f"\n总共需要验证 {len(recipes)} 道菜")

if __name__ == '__main__':
    main()

