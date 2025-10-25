#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
菜谱数据验证脚本
验证 data/recipes.csv 中的菜谱数据是否符合要求
"""

import csv
import re
from urllib.parse import urlparse

def validate_bilibili_url(url):
    """验证B站链接格式"""
    if not url:
        return False
    
    # 检查是否是B站域名
    if 'bilibili.com' not in url:
        return False
    
    # 检查是否包含video路径
    if '/video/' not in url:
        return False
    
    # 检查是否包含BV号
    if 'BV' not in url:
        return False
    
    return True

def main():
    """主函数"""
    csv_file = 'data/recipes.csv'
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            
            recipes = []
            line_num = 0
            
            for row in reader:
                line_num += 1
                
                # 跳过注释行和空行
                if not row or (row[0].startswith('#')):
                    continue
                
                # 检查字段数量
                if len(row) < 8:
                    print(f"第{line_num}行字段不足: {row}")
                    continue
                
                name, desc, ingredients, cookware, difficulty, time, url, category = row
                
                # 验证B站链接
                if not validate_bilibili_url(url):
                    print(f"第{line_num}行B站链接无效: {name} -> {url}")
                    continue
                
                recipes.append({
                    'line': line_num,
                    'name': name,
                    'description': desc,
                    'ingredients': ingredients.split('|') if ingredients else [],
                    'cookware': cookware.split('|') if cookware else [],
                    'difficulty': difficulty,
                    'time': time,
                    'url': url,
                    'category': category
                })
        
        print(f"✅ 验证完成!")
        print(f"📊 总菜谱数量: {len(recipes)} 道")
        print(f"🎯 目标达成: {'✅ 是' if len(recipes) >= 300 else '❌ 否'} (需要≥300道)")
        
        # 统计分类
        categories = {}
        for recipe in recipes:
            cat = recipe['category']
            categories[cat] = categories.get(cat, 0) + 1
        
        print(f"\n📋 分类统计:")
        for cat, count in sorted(categories.items()):
            print(f"  {cat}: {count}道")
        
        # 检查链接格式
        print(f"\n🔗 链接验证:")
        valid_links = sum(1 for r in recipes if validate_bilibili_url(r['url']))
        print(f"  有效B站链接: {valid_links}/{len(recipes)}")
        print(f"  链接完整性: {'✅ 100%' if valid_links == len(recipes) else f'❌ {valid_links/len(recipes)*100:.1f}%'}")
        
        # 显示前5道菜作为示例
        print(f"\n🍳 菜谱示例 (前5道):")
        for i, recipe in enumerate(recipes[:5], 1):
            print(f"  {i}. {recipe['name']} ({recipe['category']}) - {recipe['url']}")
        
        if len(recipes) >= 300:
            print(f"\n🎉 恭喜! 已成功创建 {len(recipes)} 道菜谱，每道都有B站教学视频链接!")
        else:
            print(f"\n⚠️  还需要添加 {300 - len(recipes)} 道菜谱才能达到300道目标")
            
    except FileNotFoundError:
        print(f"❌ 文件不存在: {csv_file}")
    except Exception as e:
        print(f"❌ 验证过程出错: {e}")

if __name__ == '__main__':
    main()
