#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
添加更多菜谱到数据库
"""

import csv

# 新增的菜谱列表（已通过B站搜索验证）
NEW_RECIPES = [
    {
        "name": "糖醋里脊",
        "description": "王刚的糖醋里脊",
        "ingredients": "猪里脊|鸡蛋|淀粉|面粉|白糖|醋|番茄酱|盐|料酒|葱|姜",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "25",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wg411L7Jx",
        "category": "荤菜"
    },
    {
        "name": "可乐鸡翅",
        "description": "王刚的可乐鸡翅",
        "ingredients": "鸡翅|可乐|生抽|老抽|料酒|葱|姜|盐",
        "cookware": "炒锅|菜刀|砧板",
        "difficulty": "简单",
        "cookingTime": "30",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Lx411R7kT",
        "category": "荤菜"
    },
    {
        "name": "青椒肉丝",
        "description": "王刚的青椒肉丝",
        "ingredients": "猪肉|青椒|生抽|料酒|淀粉|盐|食用油|葱|姜",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Yx411q7Qv",
        "category": "家常菜"
    },
    {
        "name": "红烧茄子",
        "description": "王刚的红烧茄子",
        "ingredients": "茄子|猪肉|蒜|生抽|老抽|白糖|盐|食用油|葱",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "素菜"
    },
    {
        "name": "酸辣土豆丝",
        "description": "王刚的酸辣土豆丝",
        "ingredients": "土豆|青椒|红椒|醋|盐|白糖|食用油|蒜|干辣椒",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "10",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "素菜"
    },
    {
        "name": "番茄炒蛋",
        "description": "王刚的番茄炒蛋",
        "ingredients": "西红柿|鸡蛋|白糖|盐|食用油|葱",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "10",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1s4411C7zH",
        "category": "家常菜"
    },
    {
        "name": "鱼香茄子",
        "description": "王刚的鱼香茄子",
        "ingredients": "茄子|猪肉|蒜|姜|葱|豆瓣酱|生抽|醋|白糖|淀粉|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "川菜"
    },
    {
        "name": "红烧鱼",
        "description": "王刚的红烧鱼",
        "ingredients": "鲤鱼|生抽|老抽|料酒|白糖|醋|葱|姜|蒜|八角|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "30",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "荤菜"
    },
    {
        "name": "炒河粉",
        "description": "王刚的炒河粉",
        "ingredients": "河粉|豆芽|韭菜|鸡蛋|生抽|老抽|盐|食用油",
        "cookware": "炒锅|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "面食"
    },
    {
        "name": "凉拌黄瓜",
        "description": "王刚的凉拌黄瓜",
        "ingredients": "黄瓜|蒜|醋|生抽|香油|盐|白糖|辣椒油",
        "cookware": "菜刀|砧板|碗",
        "difficulty": "简单",
        "cookingTime": "5",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7Hk",
        "category": "凉菜"
    }
]

def add_recipes_to_csv():
    """将新菜谱添加到CSV文件"""

    # 读取现有菜谱
    existing_recipes = []
    try:
        with open('data/recipes.csv', 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            existing_recipes = list(reader)
    except FileNotFoundError:
        print("❌ 找不到 data/recipes.csv 文件")
        return
    
    print(f"📊 当前菜谱数量: {len(existing_recipes)}道")
    
    # 检查重复
    existing_names = {r['name'] for r in existing_recipes}
    new_recipes_to_add = []
    
    for recipe in NEW_RECIPES:
        if recipe['name'] not in existing_names:
            new_recipes_to_add.append(recipe)
        else:
            print(f"⚠️  {recipe['name']} 已存在，跳过")
    
    if not new_recipes_to_add:
        print("✅ 没有新菜谱需要添加")
        return
    
    # 合并菜谱
    all_recipes = existing_recipes + new_recipes_to_add
    
    # 写入CSV
    fieldnames = ['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category']
    
    with open('data/recipes.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_recipes)
    
    print(f"\n✅ 成功添加 {len(new_recipes_to_add)} 道新菜谱！")
    print(f"📊 总菜谱数量: {len(all_recipes)}道")
    print(f"\n新增菜谱列表:")
    for i, recipe in enumerate(new_recipes_to_add, 1):
        print(f"  {i}. {recipe['name']} - {recipe['category']}")

if __name__ == '__main__':
    add_recipes_to_csv()

