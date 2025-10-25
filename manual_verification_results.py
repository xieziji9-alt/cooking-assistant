#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
手动验证结果 - 记录每道菜的验证状态
"""

import csv
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 验证结果：菜名 -> (BV号, 状态, 备注)
# 状态: "verified" = 已验证正确, "wrong" = 错误需要替换, "not_found" = 找不到对应视频
VERIFICATION_RESULTS = {
    # 第1-10道菜
    "红烧肉": ("BV1Us411H7Nw", "verified", "王刚-红烧肉的家常做法"),
    "酸辣土豆丝": ("BV1gb411J7cR", "pending", "待验证"),
    "青椒肉丝": ("BV1GM41157Hz", "pending", "待验证"),
    "清炒菠菜": ("BV1hE411P7tV", "pending", "待验证"),
    "菠菜炒鸡蛋": ("BV1w24y1C7pK", "pending", "待验证"),
    "凉拌菠菜": ("BV1bu4m137KL", "pending", "待验证"),
    "凉拌豆芽": ("BV1up4y1X7h4", "pending", "待验证"),
    "肉丝豆芽炒韭菜": ("BV1Ta4y147Ya", "pending", "待验证"),
    "豆芽炒肉丝": ("BV1Ti4y1r7pW", "pending", "待验证"),
    "醋烹豆芽": ("BV1E94y1V7Pv", "pending", "待验证"),
    
    # 第11-20道菜
    "回锅肉": ("BV1HW411c7Q2", "verified", "王刚-回锅肉的正宗做法"),
    "水煮肉片": ("BV1ys411u7Z4", "pending", "待验证"),
    "毛血旺": ("BV1B7411y7oi", "pending", "待验证"),
    "口水鸡": ("BV1Vt411s7rd", "pending", "待验证"),
    "辣子鸡": ("BV1Bx421y7Lm", "pending", "待验证"),
    "小炒肉": ("BV1G7411m7Qn", "verified", "王刚-小炒肉的家常做法"),
    "木须肉": ("BV1kE411i7r1", "pending", "待验证"),
    "京酱肉丝": ("BV1Rw411R71N", "pending", "待验证"),
    "把子肉": ("BV1X84y1D7A9", "pending", "待验证"),
    "地三鲜": ("BV1iW411N7CY", "pending", "待验证"),
    
    # 第21-30道菜
    "干煸四季豆": ("BV1Fz4y187Li", "pending", "待验证"),
    "虎皮青椒": ("BV1x441127Hk", "pending", "待验证"),
    "蒜蓉西兰花": ("BV1fy4y1W7z5", "pending", "待验证"),
    "干锅花菜": ("BV1yf42117oX", "pending", "待验证"),
    "麻辣香锅": ("BV1nW411Z7MQ", "pending", "待验证"),
    "蚂蚁上树": ("BV1Ts411n7ns", "pending", "待验证"),
    "葱烧豆腐": ("BV1KW411N7Dw", "pending", "待验证"),
    "麻辣小龙虾": ("BV1R4411x7Pi", "pending", "待验证"),
    "清蒸鲈鱼": ("BV1QU4y1j7T4", "pending", "待验证"),
    "红烧带鱼": ("BV1m441177A8", "pending", "待验证"),
    
    # 第31-40道菜
    "蒜蓉粉丝蒸扇贝": ("BV1DR4y1p7j4", "pending", "待验证"),
    "冬瓜排骨汤": ("BV1jK411W723", "pending", "待验证"),
    "担担面": ("BV1Gq4y1S7JT", "pending", "待验证"),
    "牛肉面": ("BV1vW411o73q", "pending", "待验证"),
    "蛋炒饭": ("BV1gt411o78F", "pending", "待验证"),
    "扬州炒饭": ("BV1oy4y1r7MR", "pending", "待验证"),
    "粉蒸肉": ("BV14P411A7SZ", "pending", "待验证"),
    "凉拌黄瓜": ("BV1Cs411w7ka", "pending", "待验证"),
    "拍黄瓜": ("BV1RV41167WV", "pending", "待验证"),
    "凉拌海带丝": ("BV1Bs411F7W3", "pending", "待验证"),
    
    # 第41-50道菜
    "蒜泥白肉": ("BV1es41177P4", "pending", "待验证"),
    "东坡肉": ("BV1CebaznE19", "pending", "待验证"),
    "红烧狮子头": ("BV1f34y1H77U", "pending", "待验证"),
    "蒜蓉生蚝": ("BV12y4y1q7rZ", "pending", "待验证"),
    "溏心鸡蛋": ("BV1gx411B7V7", "pending", "待验证"),
    "葱香牛肉": ("BV1ih411R7Zx", "pending", "待验证"),
    "番茄土豆汤": ("BV1fK4y1h7jb", "pending", "待验证"),
    "蒜蓉空心菜": ("BV1jc411w7aV", "pending", "待验证"),
    "韭菜炒蛋": ("BV1JE411D7KD", "pending", "待验证"),
    "韭菜盒子": ("BV1ph4y1v7jB", "pending", "待验证"),
    
    # 第51-60道菜
    "芹菜炒肉": ("BV1es411c7ob", "pending", "待验证"),
    "糖醋排骨": ("BV1dq4y1Q718", "pending", "待验证"),
    "红烧排骨": ("BV1Ws41157vT", "pending", "待验证"),
    "糖醋鱼": ("BV1iT411V7FJ", "wrong", "实际是糖醋鲤鱼，需要搜索糖醋鱼"),
    "红烧鱼": ("BV1sJ411V7C5", "pending", "待验证"),
    "水煮鱼": ("BV1mK411F7oM", "pending", "待验证"),
    "酸菜鱼": ("BV15s411L7kc", "pending", "待验证"),
    "孜然羊肉": ("BV1YV411b7yp", "pending", "待验证"),
    "蒜蓉蒸扇贝": ("BV1Ks4y1d7kB", "pending", "待验证"),
    "清蒸鸡蛋羹": ("BV1sK4y1d7kB", "pending", "待验证"),
}

def print_verification_status():
    """打印验证状态"""
    verified = sum(1 for _, (_, status, _) in VERIFICATION_RESULTS.items() if status == "verified")
    wrong = sum(1 for _, (_, status, _) in VERIFICATION_RESULTS.items() if status == "wrong")
    pending = sum(1 for _, (_, status, _) in VERIFICATION_RESULTS.items() if status == "pending")
    not_found = sum(1 for _, (_, status, _) in VERIFICATION_RESULTS.items() if status == "not_found")
    
    print(f"\n📊 验证进度:")
    print(f"  ✅ 已验证正确: {verified} 道")
    print(f"  ❌ 错误需替换: {wrong} 道")
    print(f"  ⏳ 待验证: {pending} 道")
    print(f"  🔍 找不到: {not_found} 道")
    print(f"  📝 总计: {len(VERIFICATION_RESULTS)} 道")

if __name__ == '__main__':
    print_verification_status()

