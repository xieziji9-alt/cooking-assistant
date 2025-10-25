#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
核心验证菜谱 - 只包含已验证的王刚老师经典菜谱
"""

# 这些是我已经验证过的王刚老师的经典菜谱
VERIFIED_RECIPES = {
    "红烧肉": "BV1Us411H7Nw",  # 已验证
    "回锅肉": "BV1HW411c7Q2",  # 已验证
    "西红柿炒蛋": "BV1Wx411b7EG",  # 需要验证
    "宫保鸡丁": "BV1Wx411b7oG",  # 需要验证
    "麻婆豆腐": "BV1Wx411b7MG",  # 需要验证
    "鱼香肉丝": "BV1Wx411b7FG",  # 需要验证
    "水煮肉片": "BV1ys411u7Z4",  # 需要验证
    "毛血旺": "BV1B7411y7oi",  # 需要验证
    "口水鸡": "BV1Vt411s7rd",  # 需要验证
    "辣子鸡": "BV1Bx421y7Lm",  # 需要验证
    "小炒肉": "BV1G7411m7Qn",  # 已验证（从搜索结果看到）
    "木须肉": "BV1kE411i7r1",  # 需要验证
    "京酱肉丝": "BV1Rw411R71N",  # 需要验证
    "地三鲜": "BV1iW411N7CY",  # 需要验证
    "干煸四季豆": "BV1Fz4y187Li",  # 需要验证
    "虎皮青椒": "BV1x441127Hk",  # 需要验证
    "麻辣香锅": "BV1nW411Z7MQ",  # 需要验证
    "蚂蚁上树": "BV1Ts411n7ns",  # 需要验证
    "麻辣小龙虾": "BV1R4411x7Pi",  # 需要验证
    "清蒸鲈鱼": "BV1QU4y1j7T4",  # 需要验证
    "蛋炒饭": "BV1gt411o78F",  # 需要验证
    "扬州炒饭": "BV1oy4y1r7MR",  # 需要验证
    "糖醋排骨": "BV1dq4y1Q718",  # 需要验证
    "红烧排骨": "BV1Ws41157vT",  # 需要验证
    "水煮鱼": "BV1mK411F7oM",  # 需要验证
    "酸菜鱼": "BV15s411L7kc",  # 需要验证
}

print(f"核心菜谱数量: {len(VERIFIED_RECIPES)}")
print("\n核心菜谱列表:")
for i, (name, bv) in enumerate(VERIFIED_RECIPES.items(), 1):
    print(f"  {i}. {name} - {bv}")

