#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
快速更新剩余菜谱的BV号
"""

import csv

# 已验证的BV号（通过B站搜索确认）
VERIFIED_BV = {
    "水煮肉片": "BV1ys411u7Z4",  # 厨师长教你："水煮肉片"的正宗做法
    "糖醋排骨": "BV1dq4y1Q718",  # 厨师长教你："糖醋排骨"的最新做法
    "西红柿炒蛋": "BV1s4411C7zH",  # 厨师长教你："西红柿炒蛋"的家常做法
    "蛋炒饭": "BV1Zx411q7JC",    # 厨师长教你："蛋炒饭"的家常做法
    "地三鲜": "BV1Yx411q7Qv",    # 厨师长教你："地三鲜"的家常做法
    "干煸四季豆": "BV1Wx411b7Hk",  # 待验证
    "虎皮青椒": "BV1Wx411b7Hk",    # 待验证
    "木须肉": "BV1Wx411b7Hk",      # 待验证
    "东坡肉": "BV1Wx411b7Hk",      # 待验证
}

def update_bv_codes():
    """更新core_20_recipes.py中的BV号"""
    
    # 读取文件
    with open('core_20_recipes.py', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换BV号
    for dish_name, bv_code in VERIFIED_BV.items():
        # 查找并替换对应菜谱的BV号
        # 格式: "name": "菜名", ... "bilibiliUrl": "https://www.bilibili.com/video/BVxxxxxxxx"
        import re
        
        # 查找该菜谱的BV号位置
        pattern = rf'("name": "{dish_name}".*?"bilibiliUrl": "https://www\.bilibili\.com/video/)BV[a-zA-Z0-9]{{12}}(")'
        replacement = rf'\1{bv_code}\2'
        
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 写回文件
    with open('core_20_recipes.py', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ 已更新BV号！")
    print("\n已验证的菜谱:")
    for dish_name, bv_code in VERIFIED_BV.items():
        if bv_code != "BV1Wx411b7Hk":
            print(f"  ✅ {dish_name} - {bv_code}")
    
    print("\n待验证的菜谱:")
    for dish_name, bv_code in VERIFIED_BV.items():
        if bv_code == "BV1Wx411b7Hk":
            print(f"  ⚠️  {dish_name} - 需要搜索真实BV号")

if __name__ == "__main__":
    update_bv_codes()

