#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证所有B站链接是否与菜名对应
"""

import csv
import re
import time
import requests
from urllib.parse import unquote

def get_video_title(bv_code):
    """获取B站视频标题"""
    try:
        url = f"https://www.bilibili.com/video/{bv_code}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        
        # 从HTML中提取标题
        match = re.search(r'<title[^>]*>([^<]+)</title>', response.text)
        if match:
            title = match.group(1)
            # 移除"_哔哩哔哩_bilibili"后缀
            title = re.sub(r'[_-]哔哩哔哩.*$', '', title)
            title = re.sub(r'[_-]bilibili.*$', '', title, flags=re.IGNORECASE)
            return title.strip()
        return None
    except Exception as e:
        print(f"  ❌ 获取失败: {e}")
        return None

def extract_bv_code(url):
    """从URL中提取BV号"""
    match = re.search(r'BV[0-9a-zA-Z]+', url)
    return match.group(0) if match else None

def check_recipe_match(recipe_name, video_title):
    """检查菜名是否在视频标题中"""
    if not video_title:
        return False
    
    # 移除常见的修饰词
    clean_name = recipe_name.strip()
    clean_title = video_title.strip()
    
    # 检查菜名是否在标题中
    if clean_name in clean_title:
        return True
    
    # 检查标题是否在菜名中（处理简称）
    if clean_title in clean_name:
        return True
    
    return False

def verify_all_recipes(csv_file):
    """验证所有菜谱"""
    mismatches = []
    matches = []
    errors = []
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        
        for i, row in enumerate(reader):
            # 跳过注释和空行
            if not row or row[0].startswith('#'):
                continue
            
            if len(row) < 8:
                continue
            
            recipe_name = row[0].strip()
            url = row[6].strip()
            
            bv_code = extract_bv_code(url)
            if not bv_code:
                errors.append((recipe_name, url, "无效的BV号"))
                continue
            
            print(f"\n检查 [{i}]: {recipe_name}")
            print(f"  链接: {url}")
            
            # 获取视频标题
            video_title = get_video_title(bv_code)
            
            if video_title:
                print(f"  标题: {video_title}")
                
                if check_recipe_match(recipe_name, video_title):
                    print(f"  ✅ 匹配")
                    matches.append((recipe_name, video_title, url))
                else:
                    print(f"  ❌ 不匹配！")
                    mismatches.append((recipe_name, video_title, url))
            else:
                print(f"  ⚠️  无法获取标题")
                errors.append((recipe_name, url, "无法获取标题"))
            
            # 避免请求过快
            time.sleep(0.5)
    
    return matches, mismatches, errors

if __name__ == '__main__':
    print("开始验证所有菜谱链接...")
    print("=" * 60)
    
    matches, mismatches, errors = verify_all_recipes('data/recipes.csv')
    
    print("\n" + "=" * 60)
    print(f"\n📊 验证结果:")
    print(f"  ✅ 匹配: {len(matches)}")
    print(f"  ❌ 不匹配: {len(mismatches)}")
    print(f"  ⚠️  错误: {len(errors)}")
    
    if mismatches:
        print(f"\n❌ 不匹配的菜谱 ({len(mismatches)}道):")
        for recipe_name, video_title, url in mismatches:
            print(f"  - {recipe_name}")
            print(f"    视频标题: {video_title}")
            print(f"    链接: {url}")
    
    if errors:
        print(f"\n⚠️  错误的菜谱 ({len(errors)}道):")
        for recipe_name, url, error in errors:
            print(f"  - {recipe_name}: {error}")
            print(f"    链接: {url}")
    
    # 保存不匹配的菜谱
    if mismatches:
        with open('mismatched_recipes.txt', 'w', encoding='utf-8') as f:
            for recipe_name, video_title, url in mismatches:
                f.write(f"{recipe_name}\t{video_title}\t{url}\n")
        print(f"\n💾 不匹配的菜谱已保存到: mismatched_recipes.txt")

