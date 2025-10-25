#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将 CSV 菜谱数据转换为 JavaScript 格式
"""

import csv
import json

def convert_csv_to_js(csv_file, js_file):
    """将 CSV 转换为 JavaScript 数据文件"""
    recipes = []
    recipe_id = 1
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)

        for row in reader:
            # 跳过空行
            if not row or not row.get('name'):
                continue

            # 跳过注释行
            if row['name'].startswith('#'):
                continue

            name = row['name']
            desc = row['description']
            ingredients = row['ingredients']
            cookware = row['cookware']
            difficulty = row['difficulty']
            time = row['cookingTime']
            url = row['bilibiliUrl']
            category = row['category']
            
            # 构建菜谱对象
            recipe = {
                'id': recipe_id,
                'name': name.strip(),
                'description': desc.strip(),
                'ingredients': [i.strip() for i in ingredients.split('|')] if ingredients else [],
                'cookware': [c.strip() for c in cookware.split('|')] if cookware else [],
                'difficulty': difficulty.strip(),
                'cookingTime': int(time.strip()) if time.strip().isdigit() else 0,
                'bilibiliUrl': url.strip(),
                'category': category.strip()
            }
            
            recipes.append(recipe)
            recipe_id += 1
    
    # 生成 JavaScript 文件
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write('// 菜谱数据 - 自动生成自 recipes.csv\n')
        f.write('const recipes = ')
        f.write(json.dumps(recipes, ensure_ascii=False, indent=2))
        f.write(';\n\n')
        
        # 添加食材数据（保持原有的）
        f.write('''// 食材分类
const ingredients = [
  // 蔬菜类
  { name: '西红柿', category: '蔬菜', type: '蔬菜' },
  { name: '土豆', category: '蔬菜', type: '蔬菜' },
  { name: '青椒', category: '蔬菜', type: '蔬菜' },
  { name: '红椒', category: '蔬菜', type: '蔬菜' },
  { name: '茄子', category: '蔬菜', type: '蔬菜' },
  { name: '黄瓜', category: '蔬菜', type: '蔬菜' },
  { name: '白菜', category: '蔬菜', type: '蔬菜' },
  { name: '菠菜', category: '蔬菜', type: '蔬菜' },
  { name: '豆角', category: '蔬菜', type: '蔬菜' },
  { name: '豆腐', category: '蔬菜', type: '蔬菜' },
  { name: '胡萝卜', category: '蔬菜', type: '蔬菜' },
  { name: '洋葱', category: '蔬菜', type: '蔬菜' },
  { name: '芹菜', category: '蔬菜', type: '蔬菜' },
  { name: '韭菜', category: '蔬菜', type: '蔬菜' },
  { name: '蒜苗', category: '蔬菜', type: '蔬菜' },
  { name: '冬瓜', category: '蔬菜', type: '蔬菜' },
  { name: '南瓜', category: '蔬菜', type: '蔬菜' },
  { name: '莲藕', category: '蔬菜', type: '蔬菜' },
  { name: '山药', category: '蔬菜', type: '蔬菜' },
  { name: '木耳', category: '蔬菜', type: '蔬菜' },
  { name: '香菇', category: '蔬菜', type: '蔬菜' },
  { name: '金针菇', category: '蔬菜', type: '蔬菜' },
  
  // 肉类
  { name: '猪肉', category: '肉类', type: '肉类' },
  { name: '五花肉', category: '肉类', type: '肉类' },
  { name: '猪里脊', category: '肉类', type: '肉类' },
  { name: '猪肉末', category: '肉类', type: '肉类' },
  { name: '鸡肉', category: '肉类', type: '肉类' },
  { name: '鸡胸肉', category: '肉类', type: '肉类' },
  { name: '鸡翅', category: '肉类', type: '肉类' },
  { name: '牛肉', category: '肉类', type: '肉类' },
  { name: '羊肉', category: '肉类', type: '肉类' },
  { name: '鱼', category: '肉类', type: '肉类' },
  { name: '虾', category: '肉类', type: '肉类' },
  { name: '排骨', category: '肉类', type: '肉类' },
  
  // 主食
  { name: '米饭', category: '主食', type: '主食' },
  { name: '面条', category: '主食', type: '主食' },
  { name: '饺子皮', category: '主食', type: '主食' },
  { name: '馒头', category: '主食', type: '主食' },
  
  // 调料
  { name: '盐', category: '调料', type: '调料' },
  { name: '糖', category: '调料', type: '调料' },
  { name: '醋', category: '调料', type: '调料' },
  { name: '生抽', category: '调料', type: '调料' },
  { name: '老抽', category: '调料', type: '调料' },
  { name: '料酒', category: '调料', type: '调料' },
  { name: '食用油', category: '调料', type: '调料' },
  { name: '香油', category: '调料', type: '调料' },
  { name: '蚝油', category: '调料', type: '调料' },
  { name: '豆瓣酱', category: '调料', type: '调料' },
  { name: '花椒', category: '调料', type: '调料' },
  { name: '八角', category: '调料', type: '调料' },
  { name: '桂皮', category: '调料', type: '调料' },
  { name: '葱', category: '调料', type: '调料' },
  { name: '姜', category: '调料', type: '调料' },
  { name: '蒜', category: '调料', type: '调料' },
  { name: '淀粉', category: '调料', type: '调料' },
  { name: '鸡蛋', category: '调料', type: '调料' }
];

// 厨具分类
const cookware = [
  // 锅具
  { name: '炒锅', category: '锅具', type: '锅具' },
  { name: '蒸锅', category: '锅具', type: '锅具' },
  { name: '平底锅', category: '锅具', type: '锅具' },
  { name: '砂锅', category: '锅具', type: '锅具' },
  { name: '电饭锅', category: '锅具', type: '锅具' },
  // 刀具
  { name: '菜刀', category: '刀具', type: '刀具' },
  { name: '水果刀', category: '刀具', type: '刀具' },
  { name: '切片刀', category: '刀具', type: '刀具' },
  // 工具
  { name: '砧板', category: '工具', type: '工具' },
  { name: '锅铲', category: '工具', type: '工具' },
  { name: '勺子', category: '工具', type: '工具' },
  { name: '碗', category: '工具', type: '工具' },
  { name: '盘子', category: '工具', type: '工具' },
  { name: '漏勺', category: '工具', type: '工具' },
  { name: '擀面杖', category: '工具', type: '工具' },
  { name: '汤勺', category: '工具', type: '工具' }
];
''')
    
    print(f"✅ 成功转换 {len(recipes)} 道菜谱到 {js_file}")
    return len(recipes)

if __name__ == '__main__':
    count = convert_csv_to_js('data/recipes.csv', 'data.js')
    print(f"📊 总共转换了 {count} 道菜谱")

