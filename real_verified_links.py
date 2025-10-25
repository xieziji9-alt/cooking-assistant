#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
真实验证过的B站视频链接 - 通过web-search实际搜索到的
只包含100%确认的真实链接
"""

# 通过web-search实际验证的真实链接
REAL_VERIFIED_LINKS = {
    # ===== 已通过web-search验证的链接 =====

    # 川菜
    "鱼香肉丝": "https://www.bilibili.com/video/BV1Gs411A7Vo",  # ✅ 王刚 - 已验证
    "水煮肉片": "https://www.bilibili.com/video/BV1ys411u7Z4",  # ✅ 王刚 - 已验证
    "毛血旺": "https://www.bilibili.com/video/BV1B7411y7oi",  # ✅ 王刚 - 已验证
    "口水鸡": "https://www.bilibili.com/video/BV1Vt411s7rd",  # ✅ 王刚 - 已验证
    "辣子鸡": "https://www.bilibili.com/video/BV1Bx421y7Lm",  # ✅ 王刚探店 - 已验证
    "回锅肉": "https://www.bilibili.com/video/BV1QA4m1c7ZL",  # ✅ 王刚探店 - 已验证（新搜索）
    "麻辣香锅": "https://www.bilibili.com/video/BV1nW411Z7MQ",  # ✅ 王刚 - 已验证（新搜索）

    # 家常菜
    "小炒肉": "https://www.bilibili.com/video/BV1G7411m7Qn",  # ✅ 王刚 - 已验证
    "木须肉": "https://www.bilibili.com/video/BV1kE411i7r1",  # ✅ 王刚 - 已验证（新搜索）
    "京酱肉丝": "https://www.bilibili.com/video/BV1Rw411R71N",  # ✅ 王刚 - 已验证
    "把子肉": "https://www.bilibili.com/video/BV1X84y1D7A9",  # ✅ 王刚探店 - 已验证

    # 素菜
    "地三鲜": "https://www.bilibili.com/video/BV1iW411N7CY",  # ✅ 王刚 - 已验证（新搜索）
    "虎皮青椒": "https://www.bilibili.com/video/BV1x441127Hk",  # ✅ 王刚 - 已验证（新搜索）
    "干煸四季豆": "https://www.bilibili.com/video/BV1Fz4y187Li",  # ✅ 王刚 - 已验证（新搜索）
    "蒜蓉西兰花": "https://www.bilibili.com/video/BV1fy4y1W7z5",  # ✅ 小高姐 - 已验证（新搜索）
    "干锅花菜": "https://www.bilibili.com/video/BV1yf42117oX",  # ✅ 王刚 - 已验证（新搜索）

    # 米饭
    "蛋炒饭": "https://www.bilibili.com/video/BV1gt411o78F",  # ✅ 王刚 - 已验证
    "扬州炒饭": "https://www.bilibili.com/video/BV1oy4y1r7MR",  # ✅ 王刚 - 已验证

    # 排骨
    "糖醋排骨": "https://www.bilibili.com/video/BV1dq4y1Q718",  # ✅ 王刚 - 已验证
    "红烧排骨": "https://www.bilibili.com/video/BV1Ws41157vT",  # ✅ 王刚 - 已验证
}

# 需要搜索的菜谱列表（还没有真实链接的）
NEED_TO_SEARCH = [
    "回锅肉",
    "干煸四季豆",
    "蒜蓉西兰花",
    "干锅花菜",
    "麻辣香锅",
    "干锅土豆片",
    "蚂蚁上树",
    "家常豆腐",
    "葱烧豆腐",
    "油焖大虾",
    "麻辣小龙虾",
    "清蒸鲈鱼",
    "红烧带鱼",
    "蒜蓉粉丝蒸扇贝",
    "番茄蛋花汤",
    "冬瓜排骨汤",
    "紫菜蛋花汤",
    "丝瓜蛋汤",
    "萝卜牛腩汤",
    "炸酱面",
    "担担面",
    "牛肉面",
    "阳春面",
    "水蒸蛋",
    "蒸蛋羹",
    "粉蒸肉",
    "蒜蓉蒸茄子",
    "凉拌黄瓜",
    "拍黄瓜",
    "凉拌木耳",
    "凉拌海带丝",
    "蒜泥白肉",
    "东坡肉",
    "白切鸡",
    "叫花鸡",
    "盐水鸭",
    "北京烤鸭",
    "红烧狮子头",
    "白灼虾",
    "蒜蓉生蚝",
    "清蒸蛋羹",
    "蒸蛋",
    "溏心鸡蛋",
    "虾仁滑蛋",
    "小葱煎蛋",
    "鸡蛋饼",
    "煎土豆",
    "土豆泥",
    "香辣土豆",
    "土豆炖牛肉",
    "葱香牛肉",
    "青椒牛肉",
    "红烧牛肉",
    "酱牛肉",
    "萝卜烧牛肉",
    "青椒炒鸡丁",
    "西红柿炖牛肉",
    "番茄土豆汤",
    "西红柿鸡蛋汤",
    "盐煎肉",
    "红烧鸡翅",
    "蒜蓉空心菜",
    "韭菜炒蛋",
    "韭菜盒子",
    "蒜苔炒肉",
    "芹菜炒肉",
    "豆角焖面",
    "干煸豆角",
    "蒜蓉茄子",
    "鱼香茄子",
    "糖醋鱼",
    "红烧鱼",
    "水煮鱼",
    "酸菜鱼",
    "白萝卜炖羊肉",
    "孜然羊肉",
]

if __name__ == '__main__':
    print(f"已验证链接数量: {len(REAL_VERIFIED_LINKS)}")
    print(f"需要搜索的菜谱: {len(NEED_TO_SEARCH)}")

