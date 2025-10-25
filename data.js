// 菜谱数据 - 自动生成自 recipes.csv
const recipes = [
  {
    "id": 1,
    "name": "红烧肉",
    "description": "王刚的红烧肉",
    "ingredients": [
      "五花肉",
      "冰糖",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "八角",
      "桂皮",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Us411H7Nw",
    "category": "荤菜"
  },
  {
    "id": 2,
    "name": "回锅肉",
    "description": "王刚的回锅肉",
    "ingredients": [
      "猪肉",
      "青椒",
      "豆瓣酱",
      "蒜",
      "姜",
      "料酒",
      "生抽",
      "老抽",
      "糖",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1HW411c7Q2",
    "category": "川菜"
  },
  {
    "id": 3,
    "name": "宫保鸡丁",
    "description": "王刚的宫保鸡丁",
    "ingredients": [
      "鸡胸肉",
      "花生米",
      "干辣椒",
      "花椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "老抽",
      "醋",
      "糖",
      "盐",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Xt411Z7z8",
    "category": "川菜"
  },
  {
    "id": 4,
    "name": "小炒肉",
    "description": "王刚的小炒肉",
    "ingredients": [
      "猪肉",
      "青椒",
      "红椒",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1bq421c78A",
    "category": "家常菜"
  },
  {
    "id": 5,
    "name": "扬州炒饭",
    "description": "王刚的扬州炒饭",
    "ingredients": [
      "米饭",
      "鸡蛋",
      "火腿",
      "虾仁",
      "青豆",
      "玉米",
      "胡萝卜",
      "葱",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1oy4y1r7MR",
    "category": "主食"
  },
  {
    "id": 6,
    "name": "辣子鸡",
    "description": "王刚的辣子鸡",
    "ingredients": [
      "鸡肉",
      "干辣椒",
      "花椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "料酒",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV16K4y1b72h",
    "category": "川菜"
  },
  {
    "id": 7,
    "name": "蚂蚁上树",
    "description": "王刚的蚂蚁上树",
    "ingredients": [
      "粉丝",
      "猪肉末",
      "豆瓣酱",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "料酒",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1J14y117ba",
    "category": "家常菜"
  },
  {
    "id": 8,
    "name": "黄焖鸡",
    "description": "王刚的黄焖鸡",
    "ingredients": [
      "鸡肉",
      "土豆",
      "青椒",
      "红椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "老抽",
      "料酒",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1k14y1c7VR",
    "category": "家常菜"
  },
  {
    "id": 9,
    "name": "鱼香肉丝",
    "description": "王刚的鱼香肉丝",
    "ingredients": [
      "猪肉",
      "木耳",
      "胡萝卜",
      "青椒",
      "葱",
      "姜",
      "蒜",
      "泡椒",
      "生抽",
      "醋",
      "糖",
      "盐",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Gs411A7Vo",
    "category": "川菜"
  },
  {
    "id": 10,
    "name": "麻婆豆腐",
    "description": "王刚的麻婆豆腐",
    "ingredients": [
      "豆腐",
      "猪肉末",
      "豆瓣酱",
      "花椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "淀粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Rs411V7i9",
    "category": "川菜"
  },
  {
    "id": 11,
    "name": "水煮肉片",
    "description": "王刚的水煮肉片",
    "ingredients": [
      "猪肉",
      "白菜",
      "豆芽",
      "豆瓣酱",
      "花椒",
      "干辣椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "淀粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1ys411u7Z4",
    "category": "川菜"
  },
  {
    "id": 12,
    "name": "糖醋排骨",
    "description": "王刚的糖醋排骨",
    "ingredients": [
      "排骨",
      "冰糖",
      "醋",
      "生抽",
      "料酒",
      "葱",
      "姜",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1dq4y1Q718",
    "category": "家常菜"
  },
  {
    "id": 13,
    "name": "西红柿炒蛋",
    "description": "王刚的西红柿炒蛋",
    "ingredients": [
      "西红柿",
      "鸡蛋",
      "葱",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1s4411C7zH",
    "category": "家常菜"
  },
  {
    "id": 14,
    "name": "蛋炒饭",
    "description": "王刚的蛋炒饭",
    "ingredients": [
      "米饭",
      "鸡蛋",
      "葱",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Zx411q7JC",
    "category": "主食"
  },
  {
    "id": 15,
    "name": "地三鲜",
    "description": "王刚的地三鲜",
    "ingredients": [
      "土豆",
      "茄子",
      "青椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Yx411q7Qv",
    "category": "素菜"
  },
  {
    "id": 16,
    "name": "干煸四季豆",
    "description": "王刚的干煸四季豆",
    "ingredients": [
      "四季豆",
      "猪肉末",
      "干辣椒",
      "花椒",
      "葱",
      "姜",
      "蒜",
      "生抽",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1nW411A7SY",
    "category": "素菜"
  },
  {
    "id": 17,
    "name": "虎皮青椒",
    "description": "王刚的虎皮青椒",
    "ingredients": [
      "青椒",
      "蒜",
      "生抽",
      "醋",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV12g4y1X7tw",
    "category": "素菜"
  },
  {
    "id": 18,
    "name": "京酱肉丝",
    "description": "王刚的京酱肉丝",
    "ingredients": [
      "猪肉",
      "甜面酱",
      "葱",
      "姜",
      "料酒",
      "淀粉",
      "盐",
      "食用油",
      "豆腐皮"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Rw411R71N",
    "category": "家常菜"
  },
  {
    "id": 19,
    "name": "木须肉",
    "description": "王刚的木须肉",
    "ingredients": [
      "猪肉",
      "鸡蛋",
      "木耳",
      "黄瓜",
      "葱",
      "姜",
      "生抽",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1kE411i7r1",
    "category": "家常菜"
  },
  {
    "id": 20,
    "name": "东坡肉",
    "description": "王刚的东坡肉",
    "ingredients": [
      "五花肉",
      "冰糖",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "八角",
      "桂皮",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "砂锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CebaznE19",
    "category": "荤菜"
  },
  {
    "id": 21,
    "name": "糖醋里脊",
    "description": "王刚的糖醋里脊",
    "ingredients": [
      "猪里脊",
      "鸡蛋",
      "淀粉",
      "面粉",
      "白糖",
      "醋",
      "番茄酱",
      "盐",
      "料酒",
      "葱",
      "姜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wg411L7Jx",
    "category": "荤菜"
  },
  {
    "id": 22,
    "name": "可乐鸡翅",
    "description": "王刚的可乐鸡翅",
    "ingredients": [
      "鸡翅",
      "可乐",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Lx411R7kT",
    "category": "荤菜"
  },
  {
    "id": 23,
    "name": "青椒肉丝",
    "description": "王刚的青椒肉丝",
    "ingredients": [
      "猪肉",
      "青椒",
      "生抽",
      "料酒",
      "淀粉",
      "盐",
      "食用油",
      "葱",
      "姜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aW411F7pR",
    "category": "家常菜"
  },
  {
    "id": 24,
    "name": "红烧茄子",
    "description": "王刚的红烧茄子",
    "ingredients": [
      "茄子",
      "猪肉",
      "蒜",
      "生抽",
      "老抽",
      "白糖",
      "盐",
      "食用油",
      "葱"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Nv411B7CD",
    "category": "素菜"
  },
  {
    "id": 25,
    "name": "酸辣土豆丝",
    "description": "王刚的酸辣土豆丝",
    "ingredients": [
      "土豆",
      "青椒",
      "红椒",
      "醋",
      "盐",
      "白糖",
      "食用油",
      "蒜",
      "干辣椒"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1BHZmYjENX",
    "category": "素菜"
  },
  {
    "id": 26,
    "name": "鱼香茄子",
    "description": "王刚的鱼香茄子",
    "ingredients": [
      "茄子",
      "猪肉",
      "蒜",
      "姜",
      "葱",
      "豆瓣酱",
      "生抽",
      "醋",
      "白糖",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1dt411m7Aw",
    "category": "川菜"
  },
  {
    "id": 27,
    "name": "红烧鱼",
    "description": "王刚的红烧鱼",
    "ingredients": [
      "鲤鱼",
      "生抽",
      "老抽",
      "料酒",
      "白糖",
      "醋",
      "葱",
      "姜",
      "蒜",
      "八角",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1JW411s7XQ",
    "category": "荤菜"
  },
  {
    "id": 28,
    "name": "炒河粉",
    "description": "王刚的炒河粉",
    "ingredients": [
      "河粉",
      "豆芽",
      "韭菜",
      "鸡蛋",
      "生抽",
      "老抽",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1QA4m1F7sA",
    "category": "面食"
  },
  {
    "id": 29,
    "name": "凉拌黄瓜",
    "description": "王刚的凉拌黄瓜",
    "ingredients": [
      "黄瓜",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "白糖",
      "辣椒油"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1e1421D7nJ",
    "category": "凉菜"
  }
];

// 食材分类
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
