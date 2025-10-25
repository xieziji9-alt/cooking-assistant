#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新剩余6道菜谱的BV号
"""

import csv

# 从搜索结果中提取的BV号
NEW_BV_CODES = {
    "红烧茄子": "BV1Nv411B7CD",      # 茄子夹肉油炸再红烧
    "酸辣土豆丝": "BV1BHZmYjENX",    # 土豆最常吃的做法！酸辣土豆丝
    "鱼香茄子": "BV1dt411m7Aw",      # 川味鱼香茄子的做法
    "红烧鱼": "BV1JW411s7XQ",        # 红烧鲈鱼 家常菜红烧鱼最鲜的一种做法
    "炒河粉": "BV1QA4m1F7sA",        # 炒河粉的好吃做法
    "凉拌黄瓜": "BV1e1421D7nJ",      # 黄瓜炒鸡蛋（搜索结果中没有找到好的凉拌黄瓜，用这个替代）
}

def update_recipes():
    """更新菜谱的BV号"""
    
    # 读取现有菜谱
    recipes = []
    try:
        with open('data/recipes.csv', 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            recipes = list(reader)
    except FileNotFoundError:
        print("❌ 找不到 data/recipes.csv 文件")
        return
    
    print(f"📊 当前菜谱数量: {len(recipes)}道\n")
    
    # 更新BV号
    updated_count = 0
    
    for recipe in recipes:
        name = recipe['name']
        
        if name in NEW_BV_CODES:
            new_bv = NEW_BV_CODES[name]
            old_url = recipe['bilibiliUrl']
            new_url = f"https://www.bilibili.com/video/{new_bv}"
            
            if old_url != new_url:
                print(f"🔧 更新 {name}:")
                print(f"   旧: {old_url}")
                print(f"   新: {new_url}")
                recipe['bilibiliUrl'] = new_url
                updated_count += 1
    
    # 写入CSV
    fieldnames = ['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category']
    
    with open('data/recipes.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(recipes)
    
    print(f"\n✅ 完成！")
    print(f"📊 更新了 {updated_count} 道菜谱的BV号")
    print(f"📊 最终菜谱数量: {len(recipes)}道")
    
    # 显示所有菜谱
    print(f"\n📋 所有菜谱列表:")
    for i, recipe in enumerate(recipes, 1):
        bv = recipe['bilibiliUrl'].split('/')[-1]
        print(f"{i:2d}. {recipe['name']:12s} - {bv}")

if __name__ == '__main__':
    update_recipes()

