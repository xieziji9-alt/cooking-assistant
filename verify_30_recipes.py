#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证30道菜谱的B站视频链接
"""

import csv

# 需要验证/修正的菜谱BV号（通过B站搜索"王刚+菜名"获得）
VERIFIED_BV_CODES = {
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
    
    # 新增的10道菜谱（需要搜索验证）
    "糖醋里脊": "BV1Wg411L7Jx",  # 已验证
    "可乐鸡翅": "BV1Lx411R7kT",  # 需要验证
    "青椒肉丝": "BV1Yx411q7Qv",  # ❌ 和地三鲜重复了！需要重新搜索
    "红烧茄子": "BV1Wx411b7Hk",  # 占位符，需要搜索
    "酸辣土豆丝": "BV1Wx411b7Hk",  # 占位符，需要搜索
    "番茄炒蛋": "BV1s4411C7zH",  # ❌ 和西红柿炒蛋重复了！应该删除或改名
    "鱼香茄子": "BV1Wx411b7Hk",  # 占位符，需要搜索
    "红烧鱼": "BV1Wx411b7Hk",  # 占位符，需要搜索
    "炒河粉": "BV1Wx411b7Hk",  # 占位符，需要搜索
    "凉拌黄瓜": "BV1Wx411b7Hk",  # 占位符，需要搜索
}

def check_duplicates():
    """检查重复的BV号和菜名"""
    print("=" * 60)
    print("🔍 检查重复项")
    print("=" * 60)
    
    # 检查重复的BV号
    bv_to_recipes = {}
    for name, bv in VERIFIED_BV_CODES.items():
        if bv not in bv_to_recipes:
            bv_to_recipes[bv] = []
        bv_to_recipes[bv].append(name)
    
    duplicates_found = False
    for bv, recipes in bv_to_recipes.items():
        if len(recipes) > 1:
            duplicates_found = True
            print(f"\n❌ BV号重复: {bv}")
            for recipe in recipes:
                print(f"   - {recipe}")
    
    if not duplicates_found:
        print("\n✅ 没有发现重复的BV号")
    
    # 检查占位符
    print("\n" + "=" * 60)
    print("🔍 检查占位符BV号")
    print("=" * 60)
    
    placeholder_count = 0
    for name, bv in VERIFIED_BV_CODES.items():
        if bv == "BV1Wx411b7Hk":
            placeholder_count += 1
            print(f"⚠️  {name}: {bv} (占位符)")
    
    if placeholder_count == 0:
        print("\n✅ 没有占位符BV号")
    else:
        print(f"\n⚠️  共有 {placeholder_count} 道菜使用占位符BV号")

def generate_search_list():
    """生成需要搜索的菜谱列表"""
    print("\n" + "=" * 60)
    print("📝 需要搜索B站视频的菜谱")
    print("=" * 60)
    
    needs_search = []
    for name, bv in VERIFIED_BV_CODES.items():
        if bv == "BV1Wx411b7Hk":
            needs_search.append(name)
    
    if needs_search:
        print(f"\n共 {len(needs_search)} 道菜需要搜索：\n")
        for i, name in enumerate(needs_search, 1):
            print(f"{i}. {name}")
            print(f"   搜索链接: https://search.bilibili.com/all?keyword=王刚+{name}")
    else:
        print("\n✅ 所有菜谱都已有BV号")

if __name__ == '__main__':
    check_duplicates()
    generate_search_list()
    
    print("\n" + "=" * 60)
    print("📊 总结")
    print("=" * 60)
    print(f"总菜谱数: {len(VERIFIED_BV_CODES)}道")
    
    # 统计需要处理的问题
    issues = []
    
    # 检查重复
    bv_to_recipes = {}
    for name, bv in VERIFIED_BV_CODES.items():
        if bv not in bv_to_recipes:
            bv_to_recipes[bv] = []
        bv_to_recipes[bv].append(name)
    
    duplicate_count = sum(1 for recipes in bv_to_recipes.values() if len(recipes) > 1)
    if duplicate_count > 0:
        issues.append(f"{duplicate_count} 组重复BV号")
    
    # 检查占位符
    placeholder_count = sum(1 for bv in VERIFIED_BV_CODES.values() if bv == "BV1Wx411b7Hk")
    if placeholder_count > 0:
        issues.append(f"{placeholder_count} 道菜使用占位符")
    
    if issues:
        print(f"\n⚠️  需要处理的问题: {', '.join(issues)}")
    else:
        print(f"\n✅ 所有菜谱都已验证完成！")

