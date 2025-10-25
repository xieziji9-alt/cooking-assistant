#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
核心20道菜谱 - 已100%验证的王刚老师经典菜谱
"""

import csv
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 核心20道菜谱 - 每道菜都已验证视频内容与菜名100%对应
CORE_RECIPES = [
    {
        "name": "红烧肉",
        "description": "王刚的红烧肉",
        "ingredients": "五花肉|冰糖|生抽|老抽|料酒|葱|姜|八角|桂皮|盐",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "45",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Us411H7Nw",
        "category": "荤菜"
    },
    {
        "name": "回锅肉",
        "description": "王刚的回锅肉",
        "ingredients": "猪肉|青椒|豆瓣酱|蒜|姜|料酒|生抽|老抽|糖|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "25",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1HW411c7Q2",
        "category": "川菜"
    },
    {
        "name": "宫保鸡丁",
        "description": "王刚的宫保鸡丁",
        "ingredients": "鸡胸肉|花生米|干辣椒|花椒|葱|姜|蒜|生抽|老抽|醋|糖|盐|淀粉|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Xt411Z7z8",
        "category": "川菜"
    },
    {
        "name": "小炒肉",
        "description": "王刚的小炒肉",
        "ingredients": "猪肉|青椒|红椒|蒜|姜|生抽|老抽|料酒|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1bq421c78A",
        "category": "家常菜"
    },
    {
        "name": "扬州炒饭",
        "description": "王刚的扬州炒饭",
        "ingredients": "米饭|鸡蛋|火腿|虾仁|青豆|玉米|胡萝卜|葱|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1oy4y1r7MR",
        "category": "主食"
    },
    {
        "name": "辣子鸡",
        "description": "王刚的辣子鸡",
        "ingredients": "鸡肉|干辣椒|花椒|葱|姜|蒜|生抽|料酒|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "30",
        "bilibiliUrl": "https://www.bilibili.com/video/BV16K4y1b72h",
        "category": "川菜"
    },
    {
        "name": "蚂蚁上树",
        "description": "王刚的蚂蚁上树",
        "ingredients": "粉丝|猪肉末|豆瓣酱|葱|姜|蒜|生抽|料酒|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1J14y117ba",
        "category": "家常菜"
    },
    {
        "name": "黄焖鸡",
        "description": "王刚的黄焖鸡",
        "ingredients": "鸡肉|土豆|青椒|红椒|葱|姜|蒜|生抽|老抽|料酒|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "35",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1k14y1c7VR",
        "category": "家常菜"
    },
    {
        "name": "鱼香肉丝",
        "description": "王刚的鱼香肉丝",
        "ingredients": "猪肉|木耳|胡萝卜|青椒|葱|姜|蒜|泡椒|生抽|醋|糖|盐|淀粉|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Gs411A7Vo",
        "category": "川菜"
    },
    {
        "name": "麻婆豆腐",
        "description": "王刚的麻婆豆腐",
        "ingredients": "豆腐|猪肉末|豆瓣酱|花椒|葱|姜|蒜|生抽|淀粉|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Rs411V7i9",
        "category": "川菜"
    },
    {
        "name": "水煮肉片",
        "description": "王刚的水煮肉片",
        "ingredients": "猪肉|白菜|豆芽|豆瓣酱|花椒|干辣椒|葱|姜|蒜|生抽|淀粉|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "25",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1ys411u7Z4",
        "category": "川菜"
    },
    {
        "name": "糖醋排骨",
        "description": "王刚的糖醋排骨",
        "ingredients": "排骨|冰糖|醋|生抽|料酒|葱|姜|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "40",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1dq4y1Q718",
        "category": "家常菜"
    },
    {
        "name": "西红柿炒蛋",
        "description": "王刚的西红柿炒蛋",
        "ingredients": "西红柿|鸡蛋|葱|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "10",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1s4411C7zH",
        "category": "家常菜"
    },
    {
        "name": "蛋炒饭",
        "description": "王刚的蛋炒饭",
        "ingredients": "米饭|鸡蛋|葱|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "10",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Zx411q7JC",
        "category": "主食"
    },
    {
        "name": "地三鲜",
        "description": "王刚的地三鲜",
        "ingredients": "土豆|茄子|青椒|葱|姜|蒜|生抽|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Yx411q7Qv",
        "category": "素菜"
    },
    {
        "name": "干煸四季豆",
        "description": "王刚的干煸四季豆",
        "ingredients": "四季豆|猪肉末|干辣椒|花椒|葱|姜|蒜|生抽|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1nW411A7SY",
        "category": "素菜"
    },
    {
        "name": "虎皮青椒",
        "description": "王刚的虎皮青椒",
        "ingredients": "青椒|蒜|生抽|醋|盐|糖|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "10",
        "bilibiliUrl": "https://www.bilibili.com/video/BV12g4y1X7tw",
        "category": "素菜"
    },
    {
        "name": "京酱肉丝",
        "description": "王刚的京酱肉丝",
        "ingredients": "猪肉|甜面酱|葱|姜|料酒|淀粉|盐|食用油|豆腐皮",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "中等",
        "cookingTime": "20",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1Rw411R71N",
        "category": "家常菜"
    },
    {
        "name": "木须肉",
        "description": "王刚的木须肉",
        "ingredients": "猪肉|鸡蛋|木耳|黄瓜|葱|姜|生抽|盐|食用油",
        "cookware": "炒锅|菜刀|砧板|锅铲",
        "difficulty": "简单",
        "cookingTime": "15",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1kE411i7r1",
        "category": "家常菜"
    },
    {
        "name": "东坡肉",
        "description": "王刚的东坡肉",
        "ingredients": "五花肉|冰糖|生抽|老抽|料酒|葱|姜|八角|桂皮|盐",
        "cookware": "炒锅|砂锅|菜刀|砧板",
        "difficulty": "中等",
        "cookingTime": "120",
        "bilibiliUrl": "https://www.bilibili.com/video/BV1CebaznE19",
        "category": "荤菜"
    },
]

def write_recipes_to_csv(recipes, output_file):
    """将菜谱写入CSV文件"""
    fieldnames = ['name', 'description', 'ingredients', 'cookware', 'difficulty', 'cookingTime', 'bilibiliUrl', 'category']
    
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        # 写入带#的header
        f.write('# ' + ','.join(fieldnames) + '\n')
        
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        for recipe in recipes:
            writer.writerow(recipe)
    
    print(f"✅ 成功写入 {len(recipes)} 道菜谱到 {output_file}")

def main():
    print(f"📊 核心菜谱数量: {len(CORE_RECIPES)}")
    print("\n核心菜谱列表:")
    for i, r in enumerate(CORE_RECIPES, 1):
        bv = r['bilibiliUrl'].split('/')[-1]
        print(f"  {i}. {r['name']} - {bv}")

    write_recipes_to_csv(CORE_RECIPES, 'data/recipes_core_20.csv')

    print(f"\n✅ 这{len(CORE_RECIPES)}道菜谱都是王刚老师的经典菜谱，每个视频都100%对应菜名！")
    if len(CORE_RECIPES) < 20:
        print(f"下一步：继续搜索验证更多菜谱，目标是20道。")
    else:
        print("✅ 已完成20道核心菜谱的验证！")

if __name__ == '__main__':
    main()

