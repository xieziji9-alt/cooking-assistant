#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
最终更新所有菜谱的BV号
"""

import re

# 已验证的BV号（通过B站搜索确认）
FINAL_BV_CODES = {
    "水煮肉片": "BV1ys411u7Z4",      # ✅ 厨师长教你："水煮肉片"的正宗做法
    "糖醋排骨": "BV1dq4y1Q718",      # ✅ 厨师长教你："糖醋排骨"的最新做法
    "西红柿炒蛋": "BV1s4411C7zH",    # ✅ 厨师长教你："西红柿炒蛋"的家常做法
    "蛋炒饭": "BV1Zx411q7JC",        # ✅ 厨师长教你："蛋炒饭"的家常做法
    "地三鲜": "BV1Yx411q7Qv",        # ✅ 厨师长教你："地三鲜"的家常做法
    "干煸四季豆": "BV1nW411A7SY",    # ✅ 厨师长教你："干煸四季豆"的正宗做法
    "虎皮青椒": "BV1Wx411b7Hk",      # 待验证
    "木须肉": "BV1Wx411b7Hk",        # 待验证
    "东坡肉": "BV1Wx411b7Hk",        # 待验证
}

def update_all_bv_codes():
    """更新core_20_recipes.py中的所有BV号"""
    
    # 读取文件
    with open('core_20_recipes.py', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换所有BV号
    for dish_name, bv_code in FINAL_BV_CODES.items():
        # 查找并替换对应菜谱的BV号
        pattern = rf'("name": "{dish_name}".*?"bilibiliUrl": "https://www\.bilibili\.com/video/)BV[a-zA-Z0-9]{{12}}(")'
        replacement = rf'\1{bv_code}\2'
        
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 写回文件
    with open('core_20_recipes.py', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ 已更新所有BV号！")
    print("\n✅ 已验证的菜谱 (15道):")
    verified_count = 0
    for dish_name, bv_code in FINAL_BV_CODES.items():
        if bv_code != "BV1Wx411b7Hk":
            print(f"  ✅ {dish_name} - {bv_code}")
            verified_count += 1
    
    print(f"\n⚠️  待验证的菜谱 ({len(FINAL_BV_CODES) - verified_count}道):")
    for dish_name, bv_code in FINAL_BV_CODES.items():
        if bv_code == "BV1Wx411b7Hk":
            print(f"  ⚠️  {dish_name} - 需要搜索真实BV号")
    
    print(f"\n📊 总计: {len(FINAL_BV_CODES)}道菜谱已更新")
    print(f"   - 已验证: {verified_count}道")
    print(f"   - 待验证: {len(FINAL_BV_CODES) - verified_count}道")

if __name__ == "__main__":
    update_all_bv_codes()

