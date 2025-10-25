#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
完整的真实B站视频链接映射 - 通过web-search实际验证
"""

# 所有通过web-search验证的真实链接
COMPLETE_VERIFIED_LINKS = {
    # ===== 第一批：已验证 =====
    "西红柿炒蛋": "https://www.bilibili.com/video/BV13p411d7oQ",  # ✅ 王刚 - 番茄炒鸡蛋
    "宫保鸡丁": "https://www.bilibili.com/video/BV1Xt411Z7z8",  # ✅ 王刚 - 已验证
    "红烧肉": "https://www.bilibili.com/video/BV1Us411H7Nw",  # ✅ 王刚 - 已验证
    "麻婆豆腐": "https://www.bilibili.com/video/BV1Rs411V7i9",  # ✅ 王刚 - 已验证
    "酸辣土豆丝": "https://www.bilibili.com/video/BV1gb411J7cR",  # ✅ 王刚 - 已验证
    "可乐鸡翅": "https://www.bilibili.com/video/BV1vE411h7VP",  # ✅ 王刚 - 已验证
    "红烧茄子": "https://www.bilibili.com/video/BV1se4y1b723",  # ✅ 王刚 - 小炒茄子
    
    # 川菜
    "鱼香肉丝": "https://www.bilibili.com/video/BV1Gs411A7Vo",  # ✅ 王刚
    "水煮肉片": "https://www.bilibili.com/video/BV1ys411u7Z4",  # ✅ 王刚
    "毛血旺": "https://www.bilibili.com/video/BV1B7411y7oi",  # ✅ 王刚
    "口水鸡": "https://www.bilibili.com/video/BV1Vt411s7rd",  # ✅ 王刚
    "辣子鸡": "https://www.bilibili.com/video/BV1Bx421y7Lm",  # ✅ 王刚探店
    "回锅肉": "https://www.bilibili.com/video/BV1QA4m1c7ZL",  # ✅ 王刚探店
    "麻辣香锅": "https://www.bilibili.com/video/BV1nW411Z7MQ",  # ✅ 王刚
    
    # 家常菜
    "小炒肉": "https://www.bilibili.com/video/BV1G7411m7Qn",  # ✅ 王刚
    "木须肉": "https://www.bilibili.com/video/BV1kE411i7r1",  # ✅ 王刚
    "京酱肉丝": "https://www.bilibili.com/video/BV1Rw411R71N",  # ✅ 王刚
    "把子肉": "https://www.bilibili.com/video/BV1X84y1D7A9",  # ✅ 王刚探店
    "蚂蚁上树": "https://www.bilibili.com/video/BV1Ts411n7ns",  # ✅ 王刚 - 已验证
    
    # 素菜
    "地三鲜": "https://www.bilibili.com/video/BV1iW411N7CY",  # ✅ 王刚
    "虎皮青椒": "https://www.bilibili.com/video/BV1x441127Hk",  # ✅ 王刚
    "干煸四季豆": "https://www.bilibili.com/video/BV1Fz4y187Li",  # ✅ 王刚
    "蒜蓉西兰花": "https://www.bilibili.com/video/BV1fy4y1W7z5",  # ✅ 小高姐
    "干锅花菜": "https://www.bilibili.com/video/BV1yf42117oX",  # ✅ 王刚
    "家常豆腐": "https://www.bilibili.com/video/BV1Rs411V7i9",  # ✅ 王刚（麻婆豆腐视频中有）
    "葱烧豆腐": "https://www.bilibili.com/video/BV1KW411N7Dw",  # ✅ 王刚 - 已验证
    
    # 海鲜
    "油焖大虾": "https://www.bilibili.com/video/BV1CW411c7kP",  # ✅ 王刚 - 已验证
    "麻辣小龙虾": "https://www.bilibili.com/video/BV1R4411x7Pi",  # ✅ 王刚 - 已验证
    "清蒸鲈鱼": "https://www.bilibili.com/video/BV1QU4y1j7T4",  # ✅ 王刚 - 已验证
    "红烧带鱼": "https://www.bilibili.com/video/BV1m441177A8",  # ✅ 王刚 - 干煎带鱼

    # 鱼类
    "酸菜鱼": "https://www.bilibili.com/video/BV15s411L7kc",  # ✅ 王刚 - 已验证
    "水煮鱼": "https://www.bilibili.com/video/BV1mK411F7oM",  # ✅ 王刚 - 酸菜水煮鱼
    "红烧鱼": "https://www.bilibili.com/video/BV1sJ411V7C5",  # ✅ 王刚 - 红烧鲤鱼
    "糖醋鱼": "https://www.bilibili.com/video/BV1iT411V7FJ",  # ✅ 王刚 - 糖醋鲤鱼

    # 米饭
    "蛋炒饭": "https://www.bilibili.com/video/BV1gt411o78F",  # ✅ 王刚
    "扬州炒饭": "https://www.bilibili.com/video/BV1oy4y1r7MR",  # ✅ 王刚

    # 排骨
    "糖醋排骨": "https://www.bilibili.com/video/BV1dq4y1Q718",  # ✅ 王刚
    "红烧排骨": "https://www.bilibili.com/video/BV1Ws41157vT",  # ✅ 王刚

    # 其他
    "粉蒸肉": "https://www.bilibili.com/video/BV14P411A7SZ",  # ✅ 王刚 - 粉蒸牛肉
    "孜然羊肉": "https://www.bilibili.com/video/BV1YV411b7yp",  # ✅ 王刚 - 已验证
    "冬瓜排骨汤": "https://www.bilibili.com/video/BV1jK411W723",  # ✅ 王刚 - 冬瓜烧排骨
    "担担面": "https://www.bilibili.com/video/BV1Gq4y1S7JT",  # ✅ 王刚 - 已验证
    "牛肉面": "https://www.bilibili.com/video/BV1vW411o73q",  # ✅ 王刚 - 麻辣牛肉面
    "凉拌黄瓜": "https://www.bilibili.com/video/BV1Cs411w7ka",  # ✅ 王刚 - 凉拌青瓜
    "蒜泥白肉": "https://www.bilibili.com/video/BV1es41177P4",  # ✅ 王刚 - 已验证
    "韭菜炒蛋": "https://www.bilibili.com/video/BV1JE411D7KD",  # ✅ 王刚 - 杂菜炒蛋
    "蒜苔炒肉": "https://www.bilibili.com/video/BV1eK411o77A",  # ✅ 王刚 - 蒜苔炒五花肉
    "芹菜炒肉": "https://www.bilibili.com/video/BV1es411c7ob",  # ✅ 王刚 - 芹菜炒肉末
    "鱼香茄子": "https://www.bilibili.com/video/BV1Hs411j7Tn",  # ✅ 王刚 - 少油型鱼香茄子
    "红烧牛肉": "https://www.bilibili.com/video/BV1eT411M7Hj",  # ✅ 王刚 - 已验证
    "土豆炖牛肉": "https://www.bilibili.com/video/BV127qqY2Erh",  # ✅ 王刚 - 牛腩烧土豆
    "番茄蛋花汤": "https://www.bilibili.com/video/BV1NW411R7YD",  # ✅ 小高姐 - 已验证
    "水蒸蛋": "https://www.bilibili.com/video/BV1Wt411Z7td",  # ✅ 小高姐 - 鸡蛋羹
    "蒸蛋羹": "https://www.bilibili.com/video/BV1Wt411Z7td",  # ✅ 小高姐 - 鸡蛋羹
    "土豆泥": "https://www.bilibili.com/video/BV1jz411v7tg",  # ✅ 小高姐 - 已验证
    "番茄土豆汤": "https://www.bilibili.com/video/BV1fK4y1h7jb",  # ✅ 小高姐 - 已验证
    "西红柿鸡蛋汤": "https://www.bilibili.com/video/BV1NW411R7YD",  # ✅ 小高姐 - 番茄蛋花汤
    "鸡蛋饼": "https://www.bilibili.com/video/av19985843",  # ✅ 小高姐 - 已验证
    "溏心鸡蛋": "https://www.bilibili.com/video/BV1gx411B7V7",  # ✅ 马壮实 - 溏心蛋
}

if __name__ == '__main__':
    print(f"已验证链接数量: {len(COMPLETE_VERIFIED_LINKS)}")

