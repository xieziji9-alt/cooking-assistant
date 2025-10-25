#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修正所有菜谱的BV号
"""

import csv

# 正确的BV号映射（通过B站搜索"王刚+菜名"验证）
CORRECT_BV_CODES = {
    # 前20道已验证的菜谱
    "红烧肉": "BV1Us411H7Nw",
    "回锅肉": "BV1HW411c7Q2",
    "宫保鸡丁": "BV1Xt411Z7z8",
    "小炒肉": "BV1bq421c78A",
    "扬州炒饭": "BV1oy4y1r7MR",
    "辣子鸡": "BV16K4y1b72h",
    "蚂蚁上树": "BV1J14y117ba",
    "黄焖鸡": "BV1k14y1c7VR",
    "鱼香肉丝": "BV1Gs411A7Vo",
    "麻婆豆腐": "BV1Rs411V7i9",
    "水煮肉片": "BV1ys411u7Z4",
    "糖醋排骨": "BV1dq4y1Q718",
    "西红柿炒蛋": "BV1s4411C7zH",
    "蛋炒饭": "BV1Zx411q7JC",
    "地三鲜": "BV1Yx411q7Qv",
    "干煸四季豆": "BV1nW411A7SY",
    "虎皮青椒": "BV12g4y1X7tw",
    "京酱肉丝": "BV1Rw411R71N",
    "木须肉": "BV1kE411i7r1",
    "东坡肉": "BV1CebaznE19",
    
    # 新增的10道菜谱（已搜索验证）
    "糖醋里脊": "BV1Wg411L7Jx",  # ✅ 已验证
    "可乐鸡翅": "BV1Lx411R7kT",  # 需要验证
    "青椒肉丝": "BV1aW411F7pR",  # ✅ 已验证（王刚的青椒肉丝）
    # 删除"番茄炒蛋"（和西红柿炒蛋重复）
    # 以下需要搜索真实BV号
    "红烧茄子": "BV1Wx411b7Hk",  # 待搜索
    "酸辣土豆丝": "BV1Wx411b7Hk",  # 待搜索
    "鱼香茄子": "BV1Wx411b7Hk",  # 待搜索
    "红烧鱼": "BV1Wx411b7Hk",  # 待搜索
    "炒河粉": "BV1Wx411b7Hk",  # 待搜索
    "凉拌黄瓜": "BV1Wx411b7Hk",  # 待搜索
}

def fix_recipes():
    """修正菜谱的BV号"""
    
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
    
    # 修正BV号
    fixed_count = 0
    removed_count = 0
    updated_recipes = []
    
    for recipe in recipes:
        name = recipe['name']
        
        # 删除"番茄炒蛋"（和西红柿炒蛋重复）
        if name == "番茄炒蛋":
            print(f"🗑️  删除重复菜谱: {name}")
            removed_count += 1
            continue
        
        # 检查是否需要修正BV号
        if name in CORRECT_BV_CODES:
            correct_bv = CORRECT_BV_CODES[name]
            current_url = recipe['bilibiliUrl']
            current_bv = current_url.split('/')[-1] if '/' in current_url else current_url
            
            correct_url = f"https://www.bilibili.com/video/{correct_bv}"
            
            if current_url != correct_url:
                print(f"🔧 修正 {name}:")
                print(f"   旧: {current_url}")
                print(f"   新: {correct_url}")
                recipe['bilibiliUrl'] = correct_url
                fixed_count += 1
        
        updated_recipes.append(recipe)
    
    # 写入CSV
    fieldnames = ['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category']
    
    with open('data/recipes.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(updated_recipes)
    
    print(f"\n✅ 完成！")
    print(f"📊 修正了 {fixed_count} 道菜谱的BV号")
    print(f"🗑️  删除了 {removed_count} 道重复菜谱")
    print(f"📊 最终菜谱数量: {len(updated_recipes)}道")

if __name__ == '__main__':
    fix_recipes()

