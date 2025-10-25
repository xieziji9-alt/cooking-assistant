// 菜谱数据 - 自动生成自 recipes.csv
const recipes = [
  {
    "id": 1,
    "name": "西红柿炒蛋",
    "description": "最经典的家常菜之一",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Py4y1S7EF",
    "category": "家常菜"
  },
  {
    "id": 2,
    "name": "宫保鸡丁",
    "description": "川菜经典麻辣鲜香",
    "ingredients": [
      "鸡胸肉",
      "花生米",
      "青椒",
      "红椒",
      "蒜",
      "姜",
      "豆瓣酱",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Xt411Z7z8",
    "category": "川菜"
  },
  {
    "id": 3,
    "name": "红烧肉",
    "description": "软糯香甜的经典菜品",
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
    "id": 4,
    "name": "麻婆豆腐",
    "description": "川菜经典麻辣鲜香",
    "ingredients": [
      "嫩豆腐",
      "猪肉末",
      "豆瓣酱",
      "花椒粉",
      "蒜",
      "姜",
      "葱",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐",
      "淀粉",
      "食用油",
      "香油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗",
      "勺子"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Rs411V7i9",
    "category": "川菜"
  },
  {
    "id": 5,
    "name": "酸辣土豆丝",
    "description": "经典家常菜酸辣爽口",
    "ingredients": [
      "土豆",
      "青椒",
      "红椒",
      "蒜",
      "醋",
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
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1gb411J7cR",
    "category": "家常菜"
  },
  {
    "id": 6,
    "name": "青椒肉丝",
    "description": "下饭神器",
    "ingredients": [
      "青椒",
      "猪肉丝",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "淀粉",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1GM41157Hz",
    "category": "家常菜"
  },
  {
    "id": 7,
    "name": "糖醋里脊",
    "description": "酸甜可口的经典菜品",
    "ingredients": [
      "猪里脊肉",
      "鸡蛋",
      "淀粉",
      "面粉",
      "糖",
      "醋",
      "生抽",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CV411a7W8",
    "category": "荤菜"
  },
  {
    "id": 8,
    "name": "可乐鸡翅",
    "description": "孩子最爱的美味",
    "ingredients": [
      "鸡翅",
      "可乐",
      "生抽",
      "老抽",
      "料酒",
      "姜",
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
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CV411a7W8",
    "category": "荤菜"
  },
  {
    "id": 9,
    "name": "红烧茄子",
    "description": "下饭必备素菜",
    "ingredients": [
      "茄子",
      "蒜",
      "姜",
      "生抽",
      "老抽",
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
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CV411a7W8",
    "category": "素菜"
  },
  {
    "id": 10,
    "name": "清炒小白菜",
    "description": "清淡爽口的素菜",
    "ingredients": [
      "小白菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CV411a7W8",
    "category": "素菜"
  },
  {
    "id": 11,
    "name": "菠菜面",
    "description": "小高姐的菠菜面",
    "ingredients": [
      "菠菜",
      "中筋面粉",
      "盐",
      "葱",
      "蒜",
      "辣椒粉",
      "糖",
      "食用油",
      "香醋",
      "生抽",
      "水",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "擀面杖",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 12,
    "name": "清炒菠菜",
    "description": "超子美食的清炒菠菜",
    "ingredients": [
      "菠菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1hE411P7tV",
    "category": "素菜"
  },
  {
    "id": 13,
    "name": "菠菜炒鸡蛋",
    "description": "老东北美食的菠菜炒鸡蛋",
    "ingredients": [
      "菠菜",
      "鸡蛋",
      "蒜",
      "盐",
      "胡椒粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1w24y1C7pK",
    "category": "家常菜"
  },
  {
    "id": 14,
    "name": "凉拌菠菜",
    "description": "老东北美食的凉拌菠菜",
    "ingredients": [
      "菠菜",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖",
      "辣椒油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1bu4m137KL",
    "category": "凉菜"
  },
  {
    "id": 15,
    "name": "菠菜豆腐汤",
    "description": "营养丰富的菠菜豆腐汤",
    "ingredients": [
      "菠菜",
      "豆腐",
      "蒜",
      "盐",
      "胡椒粉",
      "香油",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 16,
    "name": "凉拌豆芽",
    "description": "王刚的凉拌豆芽",
    "ingredients": [
      "豆芽",
      "蒜",
      "生抽",
      "醋",
      "香油",
      "盐",
      "糖",
      "辣椒油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1up4y1X7h4",
    "category": "凉菜"
  },
  {
    "id": 17,
    "name": "肉丝豆芽炒韭菜",
    "description": "老东北美食的肉丝豆芽炒韭菜",
    "ingredients": [
      "豆芽",
      "猪肉丝",
      "韭菜",
      "蒜",
      "姜",
      "生抽",
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
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ta4y147Ya",
    "category": "家常菜"
  },
  {
    "id": 18,
    "name": "豆芽炒肉丝",
    "description": "小厨大亮的豆芽炒肉丝",
    "ingredients": [
      "豆芽",
      "猪肉丝",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "淀粉",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ti4y1r7pW",
    "category": "家常菜"
  },
  {
    "id": 19,
    "name": "醋烹豆芽",
    "description": "老隐记的醋烹豆芽",
    "ingredients": [
      "豆芽",
      "蒜",
      "干辣椒",
      "醋",
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
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E94y1V7Pv",
    "category": "素菜"
  },
  {
    "id": 20,
    "name": "豆芽拌粉条",
    "description": "老东北美食的豆芽拌粉条",
    "ingredients": [
      "豆芽",
      "粉条",
      "胡萝卜丝",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖",
      "辣椒油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "凉菜"
  },
  {
    "id": 21,
    "name": "酸辣大白菜",
    "description": "老东北美食的酸辣大白菜",
    "ingredients": [
      "大白菜",
      "蒜",
      "干辣椒",
      "醋",
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
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 22,
    "name": "香菇白菜汤",
    "description": "小厨大亮的香菇白菜汤",
    "ingredients": [
      "大白菜",
      "香菇",
      "蒜",
      "盐",
      "胡椒粉",
      "香油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 23,
    "name": "手撕包菜",
    "description": "王刚的手撕包菜",
    "ingredients": [
      "包菜",
      "蒜",
      "干辣椒",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1HD4y1A7ke",
    "category": "素菜"
  },
  {
    "id": 24,
    "name": "西红柿鸡蛋面",
    "description": "小高姐的西红柿鸡蛋面",
    "ingredients": [
      "西红柿",
      "鸡蛋",
      "面条",
      "葱",
      "盐",
      "糖",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Py4y1S7EF",
    "category": "面食"
  },
  {
    "id": 25,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1411127Hk",
    "category": "川菜"
  },
  {
    "id": 26,
    "name": "鱼香肉丝",
    "description": "王刚的鱼香肉丝",
    "ingredients": [
      "猪肉丝",
      "胡萝卜丝",
      "木耳丝",
      "蒜",
      "姜",
      "豆瓣酱",
      "生抽",
      "老抽",
      "醋",
      "糖",
      "料酒",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Gs411A7Vo",
    "category": "川菜"
  },
  {
    "id": 27,
    "name": "水煮肉片",
    "description": "王刚的水煮肉片",
    "ingredients": [
      "猪肉片",
      "白菜",
      "豆芽",
      "豆瓣酱",
      "花椒",
      "辣椒",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1ys411u7Z4",
    "category": "川菜"
  },
  {
    "id": 28,
    "name": "毛血旺",
    "description": "王刚的毛血旺",
    "ingredients": [
      "猪血",
      "豆芽",
      "韭菜",
      "豆瓣酱",
      "花椒",
      "辣椒",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "困难",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1B7411y7oi",
    "category": "川菜"
  },
  {
    "id": 29,
    "name": "口水鸡",
    "description": "王刚的口水鸡",
    "ingredients": [
      "鸡肉",
      "花生米",
      "蒜",
      "姜",
      "辣椒油",
      "花椒粉",
      "生抽",
      "醋",
      "糖",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "中等",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Vt411s7rd",
    "category": "川菜"
  },
  {
    "id": 30,
    "name": "辣子鸡",
    "description": "王刚的辣子鸡",
    "ingredients": [
      "鸡肉",
      "干辣椒",
      "花椒",
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
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Bx421y7Lm",
    "category": "川菜"
  },
  {
    "id": 31,
    "name": "小炒肉",
    "description": "王刚的小炒肉",
    "ingredients": [
      "猪肉",
      "青椒",
      "蒜",
      "姜",
      "豆豉",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1G7411m7Qn",
    "category": "家常菜"
  },
  {
    "id": 32,
    "name": "木须肉",
    "description": "王刚的木须肉",
    "ingredients": [
      "猪肉丝",
      "鸡蛋",
      "木耳",
      "黄瓜",
      "葱",
      "料酒",
      "生抽",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7EG",
    "category": "家常菜"
  },
  {
    "id": 33,
    "name": "京酱肉丝",
    "description": "王刚的京酱肉丝",
    "ingredients": [
      "猪肉丝",
      "豆腐皮",
      "葱丝",
      "甜面酱",
      "料酒",
      "生抽",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Rw411R71N",
    "category": "家常菜"
  },
  {
    "id": 34,
    "name": "把子肉",
    "description": "王刚的把子肉",
    "ingredients": [
      "猪肉",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1X84y1D7A9",
    "category": "荤菜"
  },
  {
    "id": 35,
    "name": "地三鲜",
    "description": "王刚的地三鲜",
    "ingredients": [
      "茄子",
      "土豆",
      "青椒",
      "蒜",
      "生抽",
      "老抽",
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
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7oG",
    "category": "素菜"
  },
  {
    "id": 36,
    "name": "干煸四季豆",
    "description": "王刚的干煸四季豆",
    "ingredients": [
      "四季豆",
      "猪肉末",
      "蒜",
      "姜",
      "豆豉",
      "辣椒",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7mG",
    "category": "素菜"
  },
  {
    "id": 37,
    "name": "虎皮青椒",
    "description": "王刚的虎皮青椒",
    "ingredients": [
      "青椒",
      "蒜",
      "生抽",
      "醋",
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
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7kG",
    "category": "素菜"
  },
  {
    "id": 38,
    "name": "蒜蓉西兰花",
    "description": "小厨大亮的蒜蓉西兰花",
    "ingredients": [
      "西兰花",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7iG",
    "category": "素菜"
  },
  {
    "id": 39,
    "name": "干锅花菜",
    "description": "王刚的干锅花菜",
    "ingredients": [
      "花菜",
      "猪肉",
      "蒜",
      "姜",
      "豆瓣酱",
      "辣椒",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7gG",
    "category": "素菜"
  },
  {
    "id": 40,
    "name": "麻辣香锅",
    "description": "王刚的麻辣香锅",
    "ingredients": [
      "土豆",
      "豆腐",
      "豆芽",
      "蒜",
      "姜",
      "豆瓣酱",
      "花椒",
      "辣椒",
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
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7VG",
    "category": "川菜"
  },
  {
    "id": 41,
    "name": "干锅土豆片",
    "description": "王刚的干锅土豆片",
    "ingredients": [
      "土豆",
      "青椒",
      "蒜",
      "姜",
      "豆瓣酱",
      "花椒",
      "辣椒",
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
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Xt411Z7z8",
    "category": "素菜"
  },
  {
    "id": 42,
    "name": "蚂蚁上树",
    "description": "王刚的蚂蚁上树",
    "ingredients": [
      "粉条",
      "猪肉末",
      "蒜",
      "姜",
      "豆瓣酱",
      "葱",
      "生抽",
      "老抽",
      "料酒",
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
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7yG",
    "category": "家常菜"
  },
  {
    "id": 43,
    "name": "家常豆腐",
    "description": "王刚的家常豆腐",
    "ingredients": [
      "豆腐",
      "青椒",
      "胡萝卜",
      "蒜",
      "豆瓣酱",
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
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7eG",
    "category": "素菜"
  },
  {
    "id": 44,
    "name": "葱烧豆腐",
    "description": "王刚的葱烧豆腐",
    "ingredients": [
      "豆腐",
      "葱",
      "蒜",
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
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7cG",
    "category": "素菜"
  },
  {
    "id": 45,
    "name": "油焖大虾",
    "description": "王刚的油焖大虾",
    "ingredients": [
      "大虾",
      "蒜",
      "姜",
      "葱",
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
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7OG",
    "category": "海鲜"
  },
  {
    "id": 46,
    "name": "麻辣小龙虾",
    "description": "王刚的麻辣小龙虾",
    "ingredients": [
      "小龙虾",
      "蒜",
      "姜",
      "豆瓣酱",
      "花椒",
      "辣椒",
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
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7MG",
    "category": "海鲜"
  },
  {
    "id": 47,
    "name": "清蒸鲈鱼",
    "description": "王刚的清蒸鲈鱼",
    "ingredients": [
      "鲈鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7KG",
    "category": "海鲜"
  },
  {
    "id": 48,
    "name": "红烧带鱼",
    "description": "王刚的红烧带鱼",
    "ingredients": [
      "带鱼",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "糖",
      "盐",
      "料酒",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7IG",
    "category": "海鲜"
  },
  {
    "id": 49,
    "name": "蒜蓉粉丝蒸扇贝",
    "description": "王刚的蒜蓉粉丝蒸扇贝",
    "ingredients": [
      "扇贝",
      "粉丝",
      "蒜蓉",
      "蒸鱼豉油",
      "葱",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7GG",
    "category": "海鲜"
  },
  {
    "id": 50,
    "name": "番茄蛋花汤",
    "description": "小厨大亮的番茄蛋花汤",
    "ingredients": [
      "西红柿",
      "鸡蛋",
      "葱",
      "盐",
      "糖",
      "香油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7AG",
    "category": "汤菜"
  },
  {
    "id": 51,
    "name": "冬瓜排骨汤",
    "description": "小厨大亮的冬瓜排骨汤",
    "ingredients": [
      "冬瓜",
      "排骨",
      "姜",
      "盐",
      "胡椒粉",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7yF",
    "category": "汤菜"
  },
  {
    "id": 52,
    "name": "紫菜蛋花汤",
    "description": "小厨大亮的紫菜蛋花汤",
    "ingredients": [
      "紫菜",
      "鸡蛋",
      "虾米",
      "盐",
      "香油",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7wF",
    "category": "汤菜"
  },
  {
    "id": 53,
    "name": "丝瓜蛋汤",
    "description": "小厨大亮的丝瓜蛋汤",
    "ingredients": [
      "丝瓜",
      "鸡蛋",
      "蒜",
      "盐",
      "香油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7uF",
    "category": "汤菜"
  },
  {
    "id": 54,
    "name": "萝卜牛腩汤",
    "description": "王刚的萝卜牛腩汤",
    "ingredients": [
      "白萝卜",
      "牛腩",
      "姜",
      "八角",
      "桂皮",
      "盐",
      "胡椒粉",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7sF",
    "category": "汤菜"
  },
  {
    "id": 55,
    "name": "炸酱面",
    "description": "王刚的炸酱面",
    "ingredients": [
      "面条",
      "猪肉末",
      "甜面酱",
      "黄瓜丝",
      "豆芽",
      "葱",
      "蒜",
      "姜",
      "料酒",
      "生抽",
      "糖",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7mF",
    "category": "面食"
  },
  {
    "id": 56,
    "name": "担担面",
    "description": "王刚的担担面",
    "ingredients": [
      "面条",
      "猪肉末",
      "芽菜",
      "花椒粉",
      "辣椒油",
      "芝麻酱",
      "蒜",
      "生抽",
      "醋",
      "糖",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7kF",
    "category": "面食"
  },
  {
    "id": 57,
    "name": "牛肉面",
    "description": "王刚的牛肉面",
    "ingredients": [
      "面条",
      "牛肉",
      "白萝卜",
      "姜",
      "八角",
      "桂皮",
      "生抽",
      "老抽",
      "盐",
      "胡椒粉",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "困难",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7iF",
    "category": "面食"
  },
  {
    "id": 58,
    "name": "阳春面",
    "description": "王刚的阳春面",
    "ingredients": [
      "面条",
      "葱",
      "猪油",
      "生抽",
      "盐",
      "香油",
      "紫菜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7gF",
    "category": "面食"
  },
  {
    "id": 59,
    "name": "蛋炒饭",
    "description": "王刚的蛋炒饭",
    "ingredients": [
      "米饭",
      "鸡蛋",
      "葱",
      "胡萝卜丁",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1gt411o78F",
    "category": "主食"
  },
  {
    "id": 60,
    "name": "扬州炒饭",
    "description": "王刚的扬州炒饭",
    "ingredients": [
      "米饭",
      "鸡蛋",
      "虾仁",
      "火腿丁",
      "豌豆",
      "葱",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1oy4y1r7MR",
    "category": "主食"
  },
  {
    "id": 61,
    "name": "水蒸蛋",
    "description": "王刚的水蒸蛋",
    "ingredients": [
      "鸡蛋",
      "温水",
      "盐",
      "香油",
      "生抽",
      "葱花"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7aF",
    "category": "蒸菜"
  },
  {
    "id": 62,
    "name": "蒸蛋羹",
    "description": "王刚的蒸蛋羹",
    "ingredients": [
      "鸡蛋",
      "牛奶",
      "盐",
      "糖",
      "香草精"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7YF",
    "category": "蒸菜"
  },
  {
    "id": 63,
    "name": "粉蒸肉",
    "description": "王刚的粉蒸肉",
    "ingredients": [
      "猪肉",
      "蒸肉粉",
      "土豆",
      "生抽",
      "老抽",
      "料酒",
      "盐",
      "糖"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7WF",
    "category": "蒸菜"
  },
  {
    "id": 64,
    "name": "蒜蓉蒸茄子",
    "description": "王刚的蒜蓉蒸茄子",
    "ingredients": [
      "茄子",
      "蒜蓉",
      "生抽",
      "香油",
      "葱",
      "辣椒"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7WG",
    "category": "蒸菜"
  },
  {
    "id": 65,
    "name": "凉拌黄瓜",
    "description": "王刚的凉拌黄瓜",
    "ingredients": [
      "黄瓜",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7QF",
    "category": "凉菜"
  },
  {
    "id": 66,
    "name": "拍黄瓜",
    "description": "王刚的拍黄瓜",
    "ingredients": [
      "黄瓜",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "辣椒油",
      "盐",
      "糖"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7OF",
    "category": "凉菜"
  },
  {
    "id": 67,
    "name": "凉拌木耳",
    "description": "王刚的凉拌木耳",
    "ingredients": [
      "木耳",
      "胡萝卜丝",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7MF",
    "category": "凉菜"
  },
  {
    "id": 68,
    "name": "凉拌海带丝",
    "description": "王刚的凉拌海带丝",
    "ingredients": [
      "海带丝",
      "胡萝卜丝",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7KF",
    "category": "凉菜"
  },
  {
    "id": 69,
    "name": "蒜泥白肉",
    "description": "王刚的蒜泥白肉",
    "ingredients": [
      "猪肉",
      "蒜泥",
      "生抽",
      "醋",
      "香油",
      "辣椒油",
      "盐",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7IF",
    "category": "凉菜"
  },
  {
    "id": 70,
    "name": "东坡肉",
    "description": "王刚的东坡肉",
    "ingredients": [
      "五花肉",
      "生抽",
      "老抽",
      "料酒",
      "冰糖",
      "葱",
      "姜"
    ],
    "cookware": [
      "砂锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "困难",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7GF",
    "category": "特色菜"
  },
  {
    "id": 71,
    "name": "白切鸡",
    "description": "王刚的白切鸡",
    "ingredients": [
      "鸡肉",
      "姜",
      "葱",
      "料酒",
      "盐",
      "蒸鱼豉油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7EF",
    "category": "特色菜"
  },
  {
    "id": 72,
    "name": "叫花鸡",
    "description": "王刚的叫花鸡",
    "ingredients": [
      "鸡肉",
      "荷叶",
      "生抽",
      "老抽",
      "料酒",
      "盐",
      "糖",
      "五香粉"
    ],
    "cookware": [
      "烤箱",
      "菜刀",
      "砧板"
    ],
    "difficulty": "困难",
    "cookingTime": 180,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7CF",
    "category": "特色菜"
  },
  {
    "id": 73,
    "name": "盐水鸭",
    "description": "王刚的盐水鸭",
    "ingredients": [
      "鸭肉",
      "盐",
      "花椒",
      "八角",
      "桂皮",
      "姜",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 150,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7AF",
    "category": "特色菜"
  },
  {
    "id": 74,
    "name": "北京烤鸭",
    "description": "王刚的北京烤鸭",
    "ingredients": [
      "鸭肉",
      "甜面酱",
      "葱丝",
      "黄瓜丝",
      "饼皮"
    ],
    "cookware": [
      "烤箱",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "困难",
    "cookingTime": 240,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7yE",
    "category": "特色菜"
  },
  {
    "id": 75,
    "name": "红烧狮子头",
    "description": "王刚的红烧狮子头",
    "ingredients": [
      "猪肉",
      "鸡蛋",
      "淀粉",
      "葱",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7wE",
    "category": "荤菜"
  },
  {
    "id": 76,
    "name": "白灼虾",
    "description": "王刚的白灼虾",
    "ingredients": [
      "虾",
      "姜",
      "葱",
      "料酒",
      "蒸鱼豉油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7EG",
    "category": "海鲜"
  },
  {
    "id": 77,
    "name": "蒜蓉生蚝",
    "description": "王刚的蒜蓉生蚝",
    "ingredients": [
      "生蚝",
      "蒜蓉",
      "粉丝",
      "蒸鱼豉油",
      "食用油",
      "葱"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7CG",
    "category": "海鲜"
  },
  {
    "id": 78,
    "name": "清蒸蛋羹",
    "description": "小高姐的清蒸蛋羹",
    "ingredients": [
      "鸡蛋",
      "温水",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7UF",
    "category": "蒸菜"
  },
  {
    "id": 79,
    "name": "蒸蛋",
    "description": "小高姐的蒸蛋",
    "ingredients": [
      "鸡蛋",
      "温水",
      "盐",
      "生抽",
      "香油"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7SF",
    "category": "蒸菜"
  },
  {
    "id": 80,
    "name": "溏心鸡蛋",
    "description": "小高姐的溏心鸡蛋",
    "ingredients": [
      "鸡蛋",
      "生抽",
      "老抽",
      "糖",
      "料酒"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7uE",
    "category": "蒸菜"
  },
  {
    "id": 81,
    "name": "虾仁滑蛋",
    "description": "小高姐的虾仁滑蛋",
    "ingredients": [
      "虾仁",
      "鸡蛋",
      "葱",
      "盐",
      "料酒",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7sE",
    "category": "家常菜"
  },
  {
    "id": 82,
    "name": "小葱煎蛋",
    "description": "小高姐的小葱煎蛋",
    "ingredients": [
      "鸡蛋",
      "小葱",
      "盐",
      "食用油"
    ],
    "cookware": [
      "平底锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7qE",
    "category": "家常菜"
  },
  {
    "id": 83,
    "name": "鸡蛋饼",
    "description": "小高姐的鸡蛋饼",
    "ingredients": [
      "鸡蛋",
      "面粉",
      "葱",
      "盐",
      "水",
      "食用油"
    ],
    "cookware": [
      "平底锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7oE",
    "category": "主食"
  },
  {
    "id": 84,
    "name": "煎土豆",
    "description": "小高姐的煎土豆",
    "ingredients": [
      "土豆",
      "盐",
      "胡椒粉",
      "食用油"
    ],
    "cookware": [
      "平底锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7mE",
    "category": "素菜"
  },
  {
    "id": 85,
    "name": "土豆泥",
    "description": "小高姐的土豆泥",
    "ingredients": [
      "土豆",
      "牛奶",
      "黄油",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7kE",
    "category": "主食"
  },
  {
    "id": 86,
    "name": "香辣土豆",
    "description": "小高姐的香辣土豆",
    "ingredients": [
      "土豆",
      "辣椒",
      "花椒",
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
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7iE",
    "category": "素菜"
  },
  {
    "id": 87,
    "name": "土豆炖牛肉",
    "description": "小高姐的土豆炖牛肉",
    "ingredients": [
      "土豆",
      "牛肉",
      "胡萝卜",
      "洋葱",
      "生抽",
      "老抽",
      "料酒",
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
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7gE",
    "category": "荤菜"
  },
  {
    "id": 88,
    "name": "葱香牛肉",
    "description": "小高姐的葱香牛肉",
    "ingredients": [
      "牛肉",
      "洋葱",
      "蒜",
      "生抽",
      "老抽",
      "料酒",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7eE",
    "category": "荤菜"
  },
  {
    "id": 89,
    "name": "青椒牛肉",
    "description": "小高姐的青椒牛肉",
    "ingredients": [
      "牛肉",
      "青椒",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "淀粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7cE",
    "category": "荤菜"
  },
  {
    "id": 90,
    "name": "红烧牛肉",
    "description": "小高姐的红烧牛肉",
    "ingredients": [
      "牛肉",
      "胡萝卜",
      "土豆",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7aE",
    "category": "荤菜"
  },
  {
    "id": 91,
    "name": "酱牛肉",
    "description": "小高姐的酱牛肉",
    "ingredients": [
      "牛肉",
      "生抽",
      "老抽",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜",
      "糖",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7YE",
    "category": "荤菜"
  },
  {
    "id": 92,
    "name": "萝卜烧牛肉",
    "description": "小高姐的萝卜烧牛肉",
    "ingredients": [
      "牛肉",
      "白萝卜",
      "生抽",
      "老抽",
      "料酒",
      "冰糖",
      "八角",
      "桂皮",
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
    "cookingTime": 75,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7WE",
    "category": "荤菜"
  },
  {
    "id": 93,
    "name": "青椒炒鸡丁",
    "description": "小高姐的青椒炒鸡丁",
    "ingredients": [
      "鸡胸肉",
      "青椒",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "淀粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7SE",
    "category": "家常菜"
  },
  {
    "id": 94,
    "name": "西红柿炖牛肉",
    "description": "小高姐的西红柿炖牛肉",
    "ingredients": [
      "牛肉",
      "西红柿",
      "洋葱",
      "胡萝卜",
      "生抽",
      "老抽",
      "料酒",
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
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7UE",
    "category": "荤菜"
  },
  {
    "id": 95,
    "name": "番茄土豆汤",
    "description": "小高姐的番茄土豆汤",
    "ingredients": [
      "西红柿",
      "土豆",
      "鸡蛋",
      "葱",
      "盐",
      "糖",
      "香油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7oF",
    "category": "汤菜"
  },
  {
    "id": 96,
    "name": "西红柿鸡蛋汤",
    "description": "小高姐的西红柿鸡蛋汤",
    "ingredients": [
      "西红柿",
      "鸡蛋",
      "葱",
      "盐",
      "糖",
      "香油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7qF",
    "category": "汤菜"
  },
  {
    "id": 97,
    "name": "盐煎肉",
    "description": "老饭骨的盐煎肉",
    "ingredients": [
      "猪肉",
      "青椒",
      "蒜",
      "豆豉",
      "生抽",
      "老抽",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7OE",
    "category": "家常菜"
  },
  {
    "id": 98,
    "name": "红烧鸡翅",
    "description": "老饭骨的红烧鸡翅",
    "ingredients": [
      "鸡翅",
      "生抽",
      "老抽",
      "料酒",
      "姜",
      "葱",
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
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7QE",
    "category": "荤菜"
  },
  {
    "id": 99,
    "name": "蒜蓉空心菜",
    "description": "老饭骨的蒜蓉空心菜",
    "ingredients": [
      "空心菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7QG",
    "category": "素菜"
  },
  {
    "id": 100,
    "name": "韭菜炒蛋",
    "description": "老饭骨的韭菜炒蛋",
    "ingredients": [
      "韭菜",
      "鸡蛋",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7wG",
    "category": "家常菜"
  },
  {
    "id": 101,
    "name": "韭菜盒子",
    "description": "老饭骨的韭菜盒子",
    "ingredients": [
      "韭菜",
      "鸡蛋",
      "面粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "平底锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7uG",
    "category": "主食"
  },
  {
    "id": 102,
    "name": "蒜苔炒肉",
    "description": "老饭骨的蒜苔炒肉",
    "ingredients": [
      "蒜苔",
      "猪肉",
      "蒜",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7sG",
    "category": "家常菜"
  },
  {
    "id": 103,
    "name": "芹菜炒肉",
    "description": "老饭骨的芹菜炒肉",
    "ingredients": [
      "芹菜",
      "猪肉",
      "蒜",
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
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7qG",
    "category": "家常菜"
  },
  {
    "id": 104,
    "name": "豆角焖面",
    "description": "老饭骨的豆角焖面",
    "ingredients": [
      "豆角",
      "面条",
      "猪肉",
      "蒜",
      "生抽",
      "老抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7SG",
    "category": "面食"
  },
  {
    "id": 105,
    "name": "干煸豆角",
    "description": "老饭骨的干煸豆角",
    "ingredients": [
      "豆角",
      "猪肉末",
      "蒜",
      "姜",
      "豆豉",
      "辣椒",
      "生抽",
      "老抽",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7UG",
    "category": "素菜"
  },
  {
    "id": 106,
    "name": "蒜蓉茄子",
    "description": "老饭骨的蒜蓉茄子",
    "ingredients": [
      "茄子",
      "蒜",
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
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7aG",
    "category": "素菜"
  },
  {
    "id": 107,
    "name": "鱼香茄子",
    "description": "老饭骨的鱼香茄子",
    "ingredients": [
      "茄子",
      "蒜",
      "姜",
      "豆瓣酱",
      "醋",
      "糖",
      "生抽",
      "老抽",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7YG",
    "category": "素菜"
  },
  {
    "id": 108,
    "name": "糖醋排骨",
    "description": "老饭骨的糖醋排骨",
    "ingredients": [
      "排骨",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "料酒",
      "姜",
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
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1dq4y1Q718",
    "category": "荤菜"
  },
  {
    "id": 109,
    "name": "红烧排骨",
    "description": "老饭骨的红烧排骨",
    "ingredients": [
      "排骨",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 50,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ws41157vT",
    "category": "荤菜"
  },
  {
    "id": 110,
    "name": "糖醋鱼",
    "description": "老饭骨的糖醋鱼",
    "ingredients": [
      "鱼",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "淀粉",
      "葱",
      "姜",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7IE",
    "category": "海鲜"
  },
  {
    "id": 111,
    "name": "红烧鱼",
    "description": "老饭骨的红烧鱼",
    "ingredients": [
      "鱼",
      "生抽",
      "老抽",
      "糖",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7GE",
    "category": "海鲜"
  },
  {
    "id": 112,
    "name": "水煮鱼",
    "description": "老饭骨的水煮鱼",
    "ingredients": [
      "鱼",
      "豆芽",
      "白菜",
      "豆瓣酱",
      "花椒",
      "辣椒",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7EE",
    "category": "川菜"
  },
  {
    "id": 113,
    "name": "酸菜鱼",
    "description": "老饭骨的酸菜鱼",
    "ingredients": [
      "鱼",
      "酸菜",
      "豆腐",
      "蒜",
      "姜",
      "胡椒粉",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7CE",
    "category": "川菜"
  },
  {
    "id": 114,
    "name": "白萝卜炖羊肉",
    "description": "老饭骨的白萝卜炖羊肉",
    "ingredients": [
      "羊肉",
      "白萝卜",
      "姜",
      "八角",
      "桂皮",
      "盐",
      "胡椒粉",
      "葱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7AE",
    "category": "荤菜"
  },
  {
    "id": 115,
    "name": "孜然羊肉",
    "description": "老饭骨的孜然羊肉",
    "ingredients": [
      "羊肉",
      "洋葱",
      "孜然粉",
      "辣椒粉",
      "蒜",
      "盐",
      "生抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Wx411b7yD",
    "category": "荤菜"
  },
  {
    "id": 116,
    "name": "蒜蓉蒸扇贝",
    "description": "日食记的蒜蓉蒸扇贝",
    "ingredients": [
      "扇贝",
      "蒜",
      "粉丝",
      "蒸鱼豉油",
      "食用油",
      "葱"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks4y1d7kB",
    "category": "海鲜"
  },
  {
    "id": 117,
    "name": "清蒸鸡蛋羹",
    "description": "日食记的清蒸鸡蛋羹",
    "ingredients": [
      "鸡蛋",
      "温水",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1sK4y1d7kB",
    "category": "蒸菜"
  },
  {
    "id": 118,
    "name": "蒜蓉粉丝娃娃菜",
    "description": "日食记的蒜蓉粉丝娃娃菜",
    "ingredients": [
      "娃娃菜",
      "粉丝",
      "蒜",
      "蒸鱼豉油",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567890",
    "category": "素菜"
  },
  {
    "id": 119,
    "name": "白萝卜丝汤",
    "description": "日食记的白萝卜丝汤",
    "ingredients": [
      "白萝卜",
      "香菜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567891",
    "category": "汤菜"
  },
  {
    "id": 120,
    "name": "蒜蓉菠菜",
    "description": "日食记的蒜蓉菠菜",
    "ingredients": [
      "菠菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567892",
    "category": "素菜"
  },
  {
    "id": 121,
    "name": "凉拌萝卜丝",
    "description": "日食记的凉拌萝卜丝",
    "ingredients": [
      "白萝卜",
      "胡萝卜",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "盐",
      "糖"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567893",
    "category": "凉菜"
  },
  {
    "id": 122,
    "name": "蒜蓉蒸丝瓜",
    "description": "日食记的蒜蓉蒸丝瓜",
    "ingredients": [
      "丝瓜",
      "蒜",
      "蒸鱼豉油",
      "食用油",
      "葱"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567894",
    "category": "素菜"
  },
  {
    "id": 123,
    "name": "清炒豆苗",
    "description": "日食记的清炒豆苗",
    "ingredients": [
      "豆苗",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567895",
    "category": "素菜"
  },
  {
    "id": 124,
    "name": "蒜蓉蒸蛋",
    "description": "日食记的蒜蓉蒸蛋",
    "ingredients": [
      "鸡蛋",
      "蒜",
      "温水",
      "盐",
      "生抽",
      "香油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567896",
    "category": "蒸菜"
  },
  {
    "id": 125,
    "name": "白灼菜心",
    "description": "日食记的白灼菜心",
    "ingredients": [
      "菜心",
      "蒜",
      "蒸鱼豉油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567897",
    "category": "素菜"
  },
  {
    "id": 126,
    "name": "蒜蓉蒸排骨",
    "description": "日食记的蒜蓉蒸排骨",
    "ingredients": [
      "排骨",
      "蒜",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐",
      "淀粉"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567898",
    "category": "荤菜"
  },
  {
    "id": 127,
    "name": "清蒸鲈鱼片",
    "description": "日食记的清蒸鲈鱼片",
    "ingredients": [
      "鲈鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567899",
    "category": "海鲜"
  },
  {
    "id": 128,
    "name": "蒜蓉蒸冬瓜",
    "description": "日食记的蒜蓉蒸冬瓜",
    "ingredients": [
      "冬瓜",
      "蒜",
      "蒸鱼豉油",
      "食用油",
      "葱"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567900",
    "category": "素菜"
  },
  {
    "id": 129,
    "name": "白灼芥兰",
    "description": "日食记的白灼芥兰",
    "ingredients": [
      "芥兰",
      "蒜",
      "蒸鱼豉油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567901",
    "category": "素菜"
  },
  {
    "id": 130,
    "name": "蒜蓉蒸茄盒",
    "description": "日食记的蒜蓉蒸茄盒",
    "ingredients": [
      "茄子",
      "猪肉馅",
      "蒜",
      "生抽",
      "料酒",
      "盐",
      "淀粉",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567902",
    "category": "荤菜"
  },
  {
    "id": 131,
    "name": "清炒时蔬",
    "description": "日食记的清炒时蔬",
    "ingredients": [
      "时令蔬菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567903",
    "category": "素菜"
  },
  {
    "id": 132,
    "name": "蒜蓉蒸蛏子",
    "description": "日食记的蒜蓉蒸蛏子",
    "ingredients": [
      "蛏子",
      "蒜",
      "粉丝",
      "蒸鱼豉油",
      "食用油",
      "葱"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567904",
    "category": "海鲜"
  },
  {
    "id": 133,
    "name": "白切白萝卜",
    "description": "日食记的白切白萝卜",
    "ingredients": [
      "白萝卜",
      "蒸鱼豉油",
      "香油",
      "葱花"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1234567905",
    "category": "素菜"
  },
  {
    "id": 134,
    "name": "锅包肉",
    "description": "东北菜锅包肉",
    "ingredients": [
      "猪里脊",
      "土豆淀粉",
      "鸡蛋",
      "糖",
      "醋",
      "生抽",
      "胡萝卜",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1HD4y1A7ke",
    "category": "东北菜"
  },
  {
    "id": 135,
    "name": "地锅鸡",
    "description": "徐州地锅鸡",
    "ingredients": [
      "鸡肉",
      "面粉",
      "青椒",
      "土豆",
      "豆角",
      "蒜",
      "姜",
      "豆瓣酱",
      "生抽",
      "老抽",
      "料酒"
    ],
    "cookware": [
      "砂锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "特色菜"
  },
  {
    "id": 136,
    "name": "白斩鸡",
    "description": "广式白斩鸡",
    "ingredients": [
      "鸡肉",
      "姜",
      "葱",
      "料酒",
      "盐",
      "蒸鱼豉油",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "粤菜"
  },
  {
    "id": 137,
    "name": "蒜蓉白肉",
    "description": "川菜蒜蓉白肉",
    "ingredients": [
      "猪肉",
      "蒜",
      "生抽",
      "醋",
      "香油",
      "辣椒油",
      "糖",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "川菜"
  },
  {
    "id": 138,
    "name": "夫妻肺片",
    "description": "川菜夫妻肺片",
    "ingredients": [
      "牛肉",
      "牛舌",
      "牛心",
      "花生米",
      "芹菜",
      "辣椒油",
      "花椒粉",
      "蒜",
      "生抽",
      "醋"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "困难",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "川菜"
  },
  {
    "id": 139,
    "name": "口水鸡丝",
    "description": "川菜口水鸡丝",
    "ingredients": [
      "鸡胸肉",
      "黄瓜",
      "胡萝卜",
      "花生米",
      "蒜",
      "辣椒油",
      "花椒粉",
      "生抽",
      "醋",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "川菜"
  },
  {
    "id": 140,
    "name": "棒棒鸡",
    "description": "川菜棒棒鸡",
    "ingredients": [
      "鸡腿",
      "黄瓜",
      "胡萝卜",
      "芝麻酱",
      "蒜",
      "辣椒油",
      "花椒粉",
      "生抽",
      "醋",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "川菜"
  },
  {
    "id": 141,
    "name": "水晶肘子",
    "description": "山东水晶肘子",
    "ingredients": [
      "猪肘",
      "姜",
      "葱",
      "料酒",
      "盐",
      "八角",
      "桂皮",
      "花椒"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "困难",
    "cookingTime": 180,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "鲁菜"
  },
  {
    "id": 142,
    "name": "糖醋鲤鱼",
    "description": "山东糖醋鲤鱼",
    "ingredients": [
      "鲤鱼",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "淀粉",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "鲁菜"
  },
  {
    "id": 143,
    "name": "九转大肠",
    "description": "山东九转大肠",
    "ingredients": [
      "猪大肠",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "蒜",
      "八角"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "困难",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "鲁菜"
  },
  {
    "id": 144,
    "name": "油爆双脆",
    "description": "山东油爆双脆",
    "ingredients": [
      "猪肚",
      "猪腰",
      "韭黄",
      "蒜",
      "姜",
      "料酒",
      "生抽",
      "醋",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "困难",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "鲁菜"
  },
  {
    "id": 145,
    "name": "糖醋里脊",
    "description": "经典糖醋里脊",
    "ingredients": [
      "猪里脊",
      "鸡蛋",
      "淀粉",
      "面粉",
      "糖",
      "醋",
      "番茄酱",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "家常菜"
  },
  {
    "id": 146,
    "name": "咕咾肉",
    "description": "广式咕咾肉",
    "ingredients": [
      "猪肉",
      "菠萝",
      "青椒",
      "红椒",
      "糖",
      "醋",
      "番茄酱",
      "淀粉"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "粤菜"
  },
  {
    "id": 147,
    "name": "白切猪手",
    "description": "广式白切猪手",
    "ingredients": [
      "猪手",
      "姜",
      "葱",
      "料酒",
      "盐",
      "蒸鱼豉油",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "粤菜"
  },
  {
    "id": 148,
    "name": "蜜汁叉烧",
    "description": "广式蜜汁叉烧",
    "ingredients": [
      "猪肉",
      "蜂蜜",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "五香粉"
    ],
    "cookware": [
      "烤箱",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "粤菜"
  },
  {
    "id": 149,
    "name": "白灼虾",
    "description": "广式白灼虾",
    "ingredients": [
      "虾",
      "姜",
      "葱",
      "料酒",
      "蒸鱼豉油",
      "食用油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "粤菜"
  },
  {
    "id": 150,
    "name": "蒸蛋",
    "description": "广式蒸蛋",
    "ingredients": [
      "鸡蛋",
      "温水",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "蒸锅",
      "碗",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "粤菜"
  },
  {
    "id": 151,
    "name": "白切鸡",
    "description": "正宗白切鸡",
    "ingredients": [
      "鸡肉",
      "姜",
      "葱",
      "料酒",
      "盐",
      "蒸鱼豉油",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "粤菜"
  },
  {
    "id": 152,
    "name": "蒸排骨",
    "description": "广式蒸排骨",
    "ingredients": [
      "排骨",
      "豆豉",
      "蒜",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐",
      "淀粉"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "粤菜"
  },
  {
    "id": 153,
    "name": "干炸带鱼",
    "description": "家常干炸带鱼",
    "ingredients": [
      "带鱼",
      "面粉",
      "鸡蛋",
      "盐",
      "胡椒粉",
      "料酒",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "海鲜"
  },
  {
    "id": 154,
    "name": "红烧黄鱼",
    "description": "家常红烧黄鱼",
    "ingredients": [
      "黄鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "海鲜"
  },
  {
    "id": 155,
    "name": "清蒸黄鱼",
    "description": "清蒸黄鱼",
    "ingredients": [
      "黄鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "海鲜"
  },
  {
    "id": 156,
    "name": "糖醋黄鱼",
    "description": "糖醋黄鱼",
    "ingredients": [
      "黄鱼",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "淀粉",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "海鲜"
  },
  {
    "id": 157,
    "name": "红烧草鱼",
    "description": "红烧草鱼",
    "ingredients": [
      "草鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "海鲜"
  },
  {
    "id": 158,
    "name": "清蒸草鱼",
    "description": "清蒸草鱼",
    "ingredients": [
      "草鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "海鲜"
  },
  {
    "id": 159,
    "name": "水煮草鱼",
    "description": "水煮草鱼",
    "ingredients": [
      "草鱼",
      "豆芽",
      "白菜",
      "豆瓣酱",
      "花椒",
      "辣椒",
      "蒜",
      "姜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "川菜"
  },
  {
    "id": 160,
    "name": "酸菜草鱼",
    "description": "酸菜草鱼",
    "ingredients": [
      "草鱼",
      "酸菜",
      "豆腐",
      "蒜",
      "姜",
      "胡椒粉",
      "料酒",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "川菜"
  },
  {
    "id": 161,
    "name": "红烧鲫鱼",
    "description": "红烧鲫鱼",
    "ingredients": [
      "鲫鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "海鲜"
  },
  {
    "id": 162,
    "name": "清蒸鲫鱼",
    "description": "清蒸鲫鱼",
    "ingredients": [
      "鲫鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "海鲜"
  },
  {
    "id": 163,
    "name": "鲫鱼豆腐汤",
    "description": "鲫鱼豆腐汤",
    "ingredients": [
      "鲫鱼",
      "豆腐",
      "姜",
      "葱",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 164,
    "name": "红烧鲤鱼",
    "description": "红烧鲤鱼",
    "ingredients": [
      "鲤鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "海鲜"
  },
  {
    "id": 165,
    "name": "清蒸鲤鱼",
    "description": "清蒸鲤鱼",
    "ingredients": [
      "鲤鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "海鲜"
  },
  {
    "id": 166,
    "name": "糖醋鲤鱼段",
    "description": "糖醋鲤鱼段",
    "ingredients": [
      "鲤鱼",
      "糖",
      "醋",
      "生抽",
      "老抽",
      "淀粉",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "海鲜"
  },
  {
    "id": 167,
    "name": "红烧平鱼",
    "description": "红烧平鱼",
    "ingredients": [
      "平鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "海鲜"
  },
  {
    "id": 168,
    "name": "清蒸平鱼",
    "description": "清蒸平鱼",
    "ingredients": [
      "平鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "海鲜"
  },
  {
    "id": 169,
    "name": "干煎平鱼",
    "description": "干煎平鱼",
    "ingredients": [
      "平鱼",
      "盐",
      "胡椒粉",
      "料酒",
      "面粉",
      "食用油"
    ],
    "cookware": [
      "平底锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "海鲜"
  },
  {
    "id": 170,
    "name": "红烧武昌鱼",
    "description": "红烧武昌鱼",
    "ingredients": [
      "武昌鱼",
      "生抽",
      "老抽",
      "糖",
      "料酒",
      "葱",
      "姜",
      "蒜"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "海鲜"
  },
  {
    "id": 171,
    "name": "清蒸武昌鱼",
    "description": "清蒸武昌鱼",
    "ingredients": [
      "武昌鱼",
      "蒸鱼豉油",
      "葱丝",
      "姜丝",
      "料酒",
      "盐",
      "食用油"
    ],
    "cookware": [
      "蒸锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "海鲜"
  },
  {
    "id": 172,
    "name": "红烧猪蹄",
    "description": "红烧猪蹄",
    "ingredients": [
      "猪蹄",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "荤菜"
  },
  {
    "id": 173,
    "name": "卤猪蹄",
    "description": "卤猪蹄",
    "ingredients": [
      "猪蹄",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "荤菜"
  },
  {
    "id": 174,
    "name": "黄豆炖猪蹄",
    "description": "黄豆炖猪蹄",
    "ingredients": [
      "猪蹄",
      "黄豆",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "荤菜"
  },
  {
    "id": 175,
    "name": "花生炖猪蹄",
    "description": "花生炖猪蹄",
    "ingredients": [
      "猪蹄",
      "花生米",
      "生抽",
      "老抽",
      "料酒",
      "葱",
      "姜",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "荤菜"
  },
  {
    "id": 176,
    "name": "红烧猪肘",
    "description": "红烧猪肘",
    "ingredients": [
      "猪肘",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "荤菜"
  },
  {
    "id": 177,
    "name": "卤猪肘",
    "description": "卤猪肘",
    "ingredients": [
      "猪肘",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 150,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "荤菜"
  },
  {
    "id": 178,
    "name": "白切猪肘",
    "description": "白切猪肘",
    "ingredients": [
      "猪肘",
      "姜",
      "葱",
      "料酒",
      "盐",
      "蒸鱼豉油",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "盘子"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "荤菜"
  },
  {
    "id": 179,
    "name": "红烧牛腩",
    "description": "红烧牛腩",
    "ingredients": [
      "牛腩",
      "胡萝卜",
      "土豆",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "荤菜"
  },
  {
    "id": 180,
    "name": "卤牛腩",
    "description": "卤牛腩",
    "ingredients": [
      "牛腩",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "荤菜"
  },
  {
    "id": 181,
    "name": "土豆炖牛腩",
    "description": "土豆炖牛腩",
    "ingredients": [
      "牛腩",
      "土豆",
      "胡萝卜",
      "洋葱",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 75,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "荤菜"
  },
  {
    "id": 182,
    "name": "萝卜炖牛腩",
    "description": "萝卜炖牛腩",
    "ingredients": [
      "牛腩",
      "白萝卜",
      "生抽",
      "老抽",
      "料酒",
      "八角",
      "桂皮",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "荤菜"
  },
  {
    "id": 183,
    "name": "红烧羊肉",
    "description": "红烧羊肉",
    "ingredients": [
      "羊肉",
      "胡萝卜",
      "土豆",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "荤菜"
  },
  {
    "id": 184,
    "name": "卤羊肉",
    "description": "卤羊肉",
    "ingredients": [
      "羊肉",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "荤菜"
  },
  {
    "id": 185,
    "name": "萝卜炖羊肉",
    "description": "萝卜炖羊肉",
    "ingredients": [
      "羊肉",
      "白萝卜",
      "生抽",
      "老抽",
      "料酒",
      "八角",
      "桂皮",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "荤菜"
  },
  {
    "id": 186,
    "name": "胡萝卜炖羊肉",
    "description": "胡萝卜炖羊肉",
    "ingredients": [
      "羊肉",
      "胡萝卜",
      "土豆",
      "生抽",
      "老抽",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 75,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "荤菜"
  },
  {
    "id": 187,
    "name": "红烧鸭肉",
    "description": "红烧鸭肉",
    "ingredients": [
      "鸭肉",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
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
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "荤菜"
  },
  {
    "id": 188,
    "name": "卤鸭肉",
    "description": "卤鸭肉",
    "ingredients": [
      "鸭肉",
      "生抽",
      "老抽",
      "冰糖",
      "料酒",
      "八角",
      "桂皮",
      "花椒",
      "葱",
      "姜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "荤菜"
  },
  {
    "id": 189,
    "name": "土豆炖鸭肉",
    "description": "土豆炖鸭肉",
    "ingredients": [
      "鸭肉",
      "土豆",
      "胡萝卜",
      "生抽",
      "老抽",
      "料酒",
      "糖",
      "盐"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "荤菜"
  },
  {
    "id": 190,
    "name": "冬瓜炖鸭肉",
    "description": "冬瓜炖鸭肉",
    "ingredients": [
      "鸭肉",
      "冬瓜",
      "姜",
      "葱",
      "盐",
      "胡椒粉",
      "料酒"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "荤菜"
  },
  {
    "id": 191,
    "name": "清炒白菜",
    "description": "清炒白菜",
    "ingredients": [
      "白菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "素菜"
  },
  {
    "id": 192,
    "name": "醋溜白菜",
    "description": "醋溜白菜",
    "ingredients": [
      "白菜",
      "蒜",
      "干辣椒",
      "醋",
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
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 193,
    "name": "白菜炖豆腐",
    "description": "白菜炖豆腐",
    "ingredients": [
      "白菜",
      "豆腐",
      "蒜",
      "盐",
      "胡椒粉",
      "香油",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 194,
    "name": "白菜炖粉条",
    "description": "白菜炖粉条",
    "ingredients": [
      "白菜",
      "粉条",
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
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "素菜"
  },
  {
    "id": 195,
    "name": "清炒菠菜",
    "description": "清炒菠菜",
    "ingredients": [
      "菠菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 196,
    "name": "菠菜炒粉丝",
    "description": "菠菜炒粉丝",
    "ingredients": [
      "菠菜",
      "粉丝",
      "蒜",
      "生抽",
      "盐",
      "香油",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "素菜"
  },
  {
    "id": 197,
    "name": "菠菜炒豆腐",
    "description": "菠菜炒豆腐",
    "ingredients": [
      "菠菜",
      "豆腐",
      "蒜",
      "盐",
      "鸡精",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 198,
    "name": "清炒韭菜",
    "description": "清炒韭菜",
    "ingredients": [
      "韭菜",
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
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 199,
    "name": "韭菜炒豆芽",
    "description": "韭菜炒豆芽",
    "ingredients": [
      "韭菜",
      "豆芽",
      "蒜",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "素菜"
  },
  {
    "id": 200,
    "name": "韭菜炒豆腐",
    "description": "韭菜炒豆腐",
    "ingredients": [
      "韭菜",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 201,
    "name": "韭菜炒粉条",
    "description": "韭菜炒粉条",
    "ingredients": [
      "韭菜",
      "粉条",
      "蒜",
      "生抽",
      "盐",
      "香油",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "素菜"
  },
  {
    "id": 202,
    "name": "清炒芹菜",
    "description": "清炒芹菜",
    "ingredients": [
      "芹菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 203,
    "name": "芹菜炒豆腐",
    "description": "芹菜炒豆腐",
    "ingredients": [
      "芹菜",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 204,
    "name": "芹菜炒花生米",
    "description": "芹菜炒花生米",
    "ingredients": [
      "芹菜",
      "花生米",
      "蒜",
      "盐",
      "生抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "素菜"
  },
  {
    "id": 205,
    "name": "清炒豆苗",
    "description": "清炒豆苗",
    "ingredients": [
      "豆苗",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 206,
    "name": "豆苗炒豆腐",
    "description": "豆苗炒豆腐",
    "ingredients": [
      "豆苗",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "素菜"
  },
  {
    "id": 207,
    "name": "清炒生菜",
    "description": "清炒生菜",
    "ingredients": [
      "生菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 208,
    "name": "生菜炒豆腐",
    "description": "生菜炒豆腐",
    "ingredients": [
      "生菜",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 209,
    "name": "清炒油菜",
    "description": "清炒油菜",
    "ingredients": [
      "油菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "素菜"
  },
  {
    "id": 210,
    "name": "油菜炒豆腐",
    "description": "油菜炒豆腐",
    "ingredients": [
      "油菜",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 211,
    "name": "清炒小白菜",
    "description": "清炒小白菜",
    "ingredients": [
      "小白菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "素菜"
  },
  {
    "id": 212,
    "name": "小白菜炖豆腐",
    "description": "小白菜炖豆腐",
    "ingredients": [
      "小白菜",
      "豆腐",
      "蒜",
      "盐",
      "胡椒粉",
      "香油",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 213,
    "name": "清炒菜心",
    "description": "清炒菜心",
    "ingredients": [
      "菜心",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 5,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 214,
    "name": "菜心炒豆腐",
    "description": "菜心炒豆腐",
    "ingredients": [
      "菜心",
      "豆腐",
      "蒜",
      "盐",
      "生抽",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "素菜"
  },
  {
    "id": 215,
    "name": "清炒芥兰",
    "description": "清炒芥兰",
    "ingredients": [
      "芥兰",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "素菜"
  },
  {
    "id": 216,
    "name": "芥兰炒牛肉",
    "description": "芥兰炒牛肉",
    "ingredients": [
      "芥兰",
      "牛肉",
      "蒜",
      "姜",
      "生抽",
      "老抽",
      "料酒",
      "淀粉",
      "盐",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "荤菜"
  },
  {
    "id": 217,
    "name": "清炒娃娃菜",
    "description": "清炒娃娃菜",
    "ingredients": [
      "娃娃菜",
      "蒜",
      "盐",
      "鸡精",
      "食用油"
    ],
    "cookware": [
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "素菜"
  },
  {
    "id": 218,
    "name": "娃娃菜炖豆腐",
    "description": "娃娃菜炖豆腐",
    "ingredients": [
      "娃娃菜",
      "豆腐",
      "蒜",
      "盐",
      "胡椒粉",
      "香油",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "素菜"
  },
  {
    "id": 219,
    "name": "银耳莲子汤",
    "description": "银耳莲子汤",
    "ingredients": [
      "银耳",
      "莲子",
      "冰糖",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 220,
    "name": "绿豆汤",
    "description": "绿豆汤",
    "ingredients": [
      "绿豆",
      "冰糖",
      "薄荷叶"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 221,
    "name": "红豆汤",
    "description": "红豆汤",
    "ingredients": [
      "红豆",
      "冰糖",
      "陈皮"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 222,
    "name": "黑豆汤",
    "description": "黑豆汤",
    "ingredients": [
      "黑豆",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 223,
    "name": "薏米汤",
    "description": "薏米汤",
    "ingredients": [
      "薏米",
      "冰糖",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 224,
    "name": "小米粥",
    "description": "小米粥",
    "ingredients": [
      "小米",
      "红枣",
      "枸杞",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 225,
    "name": "大米粥",
    "description": "大米粥",
    "ingredients": [
      "大米",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 226,
    "name": "八宝粥",
    "description": "八宝粥",
    "ingredients": [
      "大米",
      "小米",
      "红豆",
      "绿豆",
      "花生",
      "红枣",
      "桂圆",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 227,
    "name": "瘦肉粥",
    "description": "瘦肉粥",
    "ingredients": [
      "大米",
      "猪瘦肉",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 228,
    "name": "青菜粥",
    "description": "青菜粥",
    "ingredients": [
      "大米",
      "青菜",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 229,
    "name": "鸡蛋粥",
    "description": "鸡蛋粥",
    "ingredients": [
      "大米",
      "鸡蛋",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 230,
    "name": "南瓜粥",
    "description": "南瓜粥",
    "ingredients": [
      "大米",
      "南瓜",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 231,
    "name": "红薯粥",
    "description": "红薯粥",
    "ingredients": [
      "大米",
      "红薯",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 232,
    "name": "山药粥",
    "description": "山药粥",
    "ingredients": [
      "大米",
      "山药",
      "枸杞",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 233,
    "name": "莲藕粥",
    "description": "莲藕粥",
    "ingredients": [
      "大米",
      "莲藕",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 234,
    "name": "银耳粥",
    "description": "银耳粥",
    "ingredients": [
      "大米",
      "银耳",
      "冰糖",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 50,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 235,
    "name": "百合粥",
    "description": "百合粥",
    "ingredients": [
      "大米",
      "百合",
      "冰糖",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 236,
    "name": "燕麦粥",
    "description": "燕麦粥",
    "ingredients": [
      "燕麦",
      "牛奶",
      "蜂蜜",
      "香蕉"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 237,
    "name": "玉米粥",
    "description": "玉米粥",
    "ingredients": [
      "玉米粒",
      "大米",
      "冰糖"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 238,
    "name": "紫米粥",
    "description": "紫米粥",
    "ingredients": [
      "紫米",
      "冰糖",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 239,
    "name": "黑米粥",
    "description": "黑米粥",
    "ingredients": [
      "黑米",
      "冰糖",
      "红枣",
      "核桃"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 240,
    "name": "花生粥",
    "description": "花生粥",
    "ingredients": [
      "大米",
      "花生米",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 241,
    "name": "核桃粥",
    "description": "核桃粥",
    "ingredients": [
      "大米",
      "核桃",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 40,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 242,
    "name": "芝麻粥",
    "description": "芝麻粥",
    "ingredients": [
      "大米",
      "黑芝麻",
      "冰糖",
      "核桃"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 243,
    "name": "红枣粥",
    "description": "红枣粥",
    "ingredients": [
      "大米",
      "红枣",
      "冰糖",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 244,
    "name": "桂圆粥",
    "description": "桂圆粥",
    "ingredients": [
      "大米",
      "桂圆",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 245,
    "name": "枸杞粥",
    "description": "枸杞粥",
    "ingredients": [
      "大米",
      "枸杞",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 246,
    "name": "陈皮粥",
    "description": "陈皮粥",
    "ingredients": [
      "大米",
      "陈皮",
      "冰糖",
      "红枣"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 35,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 247,
    "name": "薏仁粥",
    "description": "薏仁粥",
    "ingredients": [
      "大米",
      "薏仁",
      "冰糖",
      "红枣",
      "枸杞"
    ],
    "cookware": [
      "煮锅",
      "勺子"
    ],
    "difficulty": "简单",
    "cookingTime": 50,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 248,
    "name": "手擀面",
    "description": "手擀面",
    "ingredients": [
      "面粉",
      "鸡蛋",
      "盐",
      "水"
    ],
    "cookware": [
      "擀面杖",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 249,
    "name": "刀削面",
    "description": "刀削面",
    "ingredients": [
      "面粉",
      "盐",
      "水"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "困难",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 250,
    "name": "拉面",
    "description": "拉面",
    "ingredients": [
      "面粉",
      "盐",
      "水",
      "碱水"
    ],
    "cookware": [
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "困难",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 251,
    "name": "挂面汤",
    "description": "挂面汤",
    "ingredients": [
      "挂面",
      "青菜",
      "鸡蛋",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "面食"
  },
  {
    "id": 252,
    "name": "鸡蛋面",
    "description": "鸡蛋面",
    "ingredients": [
      "面条",
      "鸡蛋",
      "青菜",
      "盐",
      "生抽",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 253,
    "name": "青菜面",
    "description": "青菜面",
    "ingredients": [
      "面条",
      "青菜",
      "蒜",
      "盐",
      "生抽",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 254,
    "name": "肉丝面",
    "description": "肉丝面",
    "ingredients": [
      "面条",
      "猪肉丝",
      "青菜",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 255,
    "name": "排骨面",
    "description": "排骨面",
    "ingredients": [
      "面条",
      "排骨",
      "青菜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 256,
    "name": "鸡汤面",
    "description": "鸡汤面",
    "ingredients": [
      "面条",
      "鸡肉",
      "青菜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "面食"
  },
  {
    "id": 257,
    "name": "牛肉汤面",
    "description": "牛肉汤面",
    "ingredients": [
      "面条",
      "牛肉",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 258,
    "name": "羊肉汤面",
    "description": "羊肉汤面",
    "ingredients": [
      "面条",
      "羊肉",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 259,
    "name": "海鲜面",
    "description": "海鲜面",
    "ingredients": [
      "面条",
      "虾",
      "蛤蜊",
      "青菜",
      "姜",
      "葱",
      "盐",
      "料酒"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 260,
    "name": "酸汤面",
    "description": "酸汤面",
    "ingredients": [
      "面条",
      "西红柿",
      "鸡蛋",
      "醋",
      "盐",
      "糖",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 261,
    "name": "麻辣面",
    "description": "麻辣面",
    "ingredients": [
      "面条",
      "豆瓣酱",
      "花椒",
      "辣椒",
      "蒜",
      "姜",
      "生抽",
      "醋"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "面食"
  },
  {
    "id": 262,
    "name": "清汤面",
    "description": "清汤面",
    "ingredients": [
      "面条",
      "青菜",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 8,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 263,
    "name": "打卤面",
    "description": "打卤面",
    "ingredients": [
      "面条",
      "猪肉",
      "木耳",
      "黄花菜",
      "鸡蛋",
      "淀粉",
      "生抽",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 264,
    "name": "凉面",
    "description": "凉面",
    "ingredients": [
      "面条",
      "黄瓜丝",
      "胡萝卜丝",
      "蒜",
      "醋",
      "生抽",
      "香油",
      "芝麻酱"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 265,
    "name": "热干面",
    "description": "热干面",
    "ingredients": [
      "面条",
      "芝麻酱",
      "蒜",
      "醋",
      "生抽",
      "辣椒油",
      "榨菜"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 266,
    "name": "河粉",
    "description": "河粉",
    "ingredients": [
      "河粉",
      "韭黄",
      "豆芽",
      "生抽",
      "老抽",
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "面食"
  },
  {
    "id": 267,
    "name": "炒河粉",
    "description": "炒河粉",
    "ingredients": [
      "河粉",
      "韭黄",
      "豆芽",
      "猪肉丝",
      "生抽",
      "老抽",
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
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 268,
    "name": "牛肉河粉",
    "description": "牛肉河粉",
    "ingredients": [
      "河粉",
      "牛肉",
      "韭黄",
      "豆芽",
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
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 269,
    "name": "虾仁河粉",
    "description": "虾仁河粉",
    "ingredients": [
      "河粉",
      "虾仁",
      "韭黄",
      "豆芽",
      "生抽",
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
    "difficulty": "中等",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 270,
    "name": "海鲜河粉",
    "description": "海鲜河粉",
    "ingredients": [
      "河粉",
      "虾",
      "蛤蜊",
      "韭黄",
      "豆芽",
      "生抽",
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
    "difficulty": "中等",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 271,
    "name": "米线",
    "description": "米线",
    "ingredients": [
      "米线",
      "青菜",
      "鸡蛋",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "面食"
  },
  {
    "id": 272,
    "name": "过桥米线",
    "description": "过桥米线",
    "ingredients": [
      "米线",
      "鸡汤",
      "猪肉片",
      "鸡蛋",
      "青菜",
      "豆腐皮",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 30,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "面食"
  },
  {
    "id": 273,
    "name": "酸辣米线",
    "description": "酸辣米线",
    "ingredients": [
      "米线",
      "豆芽",
      "花生米",
      "醋",
      "辣椒油",
      "生抽",
      "盐",
      "糖"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "碗"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "面食"
  },
  {
    "id": 274,
    "name": "肉丝米线",
    "description": "肉丝米线",
    "ingredients": [
      "米线",
      "猪肉丝",
      "青菜",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "面食"
  },
  {
    "id": 275,
    "name": "鸡汤米线",
    "description": "鸡汤米线",
    "ingredients": [
      "米线",
      "鸡肉",
      "青菜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "面食"
  },
  {
    "id": 276,
    "name": "粉丝汤",
    "description": "粉丝汤",
    "ingredients": [
      "粉丝",
      "青菜",
      "鸡蛋",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 277,
    "name": "肉丝粉丝汤",
    "description": "肉丝粉丝汤",
    "ingredients": [
      "粉丝",
      "猪肉丝",
      "青菜",
      "蒜",
      "姜",
      "生抽",
      "料酒",
      "盐"
    ],
    "cookware": [
      "煮锅",
      "炒锅",
      "菜刀",
      "砧板",
      "锅铲"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 278,
    "name": "海带粉丝汤",
    "description": "海带粉丝汤",
    "ingredients": [
      "粉丝",
      "海带",
      "豆腐",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 279,
    "name": "白萝卜粉丝汤",
    "description": "白萝卜粉丝汤",
    "ingredients": [
      "粉丝",
      "白萝卜",
      "香菜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 280,
    "name": "冬瓜粉丝汤",
    "description": "冬瓜粉丝汤",
    "ingredients": [
      "粉丝",
      "冬瓜",
      "虾米",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 281,
    "name": "丝瓜粉丝汤",
    "description": "丝瓜粉丝汤",
    "ingredients": [
      "粉丝",
      "丝瓜",
      "鸡蛋",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 282,
    "name": "豆腐粉丝汤",
    "description": "豆腐粉丝汤",
    "ingredients": [
      "粉丝",
      "豆腐",
      "青菜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 283,
    "name": "蛋花粉丝汤",
    "description": "蛋花粉丝汤",
    "ingredients": [
      "粉丝",
      "鸡蛋",
      "青菜",
      "盐",
      "香油",
      "葱花"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 10,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 284,
    "name": "虾仁粉丝汤",
    "description": "虾仁粉丝汤",
    "ingredients": [
      "粉丝",
      "虾仁",
      "青菜",
      "姜",
      "料酒",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 285,
    "name": "蛤蜊粉丝汤",
    "description": "蛤蜊粉丝汤",
    "ingredients": [
      "粉丝",
      "蛤蜊",
      "青菜",
      "姜",
      "料酒",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 286,
    "name": "扇贝粉丝汤",
    "description": "扇贝粉丝汤",
    "ingredients": [
      "粉丝",
      "扇贝",
      "青菜",
      "姜",
      "料酒",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 287,
    "name": "鱼丸粉丝汤",
    "description": "鱼丸粉丝汤",
    "ingredients": [
      "粉丝",
      "鱼丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 288,
    "name": "肉丸粉丝汤",
    "description": "肉丸粉丝汤",
    "ingredients": [
      "粉丝",
      "肉丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 289,
    "name": "鸡丸粉丝汤",
    "description": "鸡丸粉丝汤",
    "ingredients": [
      "粉丝",
      "鸡丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 290,
    "name": "虾丸粉丝汤",
    "description": "虾丸粉丝汤",
    "ingredients": [
      "粉丝",
      "虾丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 291,
    "name": "牛丸粉丝汤",
    "description": "牛丸粉丝汤",
    "ingredients": [
      "粉丝",
      "牛丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 15,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 292,
    "name": "猪丸粉丝汤",
    "description": "猪丸粉丝汤",
    "ingredients": [
      "粉丝",
      "猪丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 12,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 293,
    "name": "混合丸子汤",
    "description": "混合丸子汤",
    "ingredients": [
      "粉丝",
      "鱼丸",
      "肉丸",
      "虾丸",
      "青菜",
      "姜",
      "盐",
      "胡椒粉",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "简单",
    "cookingTime": 18,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 294,
    "name": "三鲜汤",
    "description": "三鲜汤",
    "ingredients": [
      "虾仁",
      "蛤蜊",
      "扇贝",
      "青菜",
      "姜",
      "料酒",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 20,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 295,
    "name": "海鲜汤",
    "description": "海鲜汤",
    "ingredients": [
      "虾",
      "蟹",
      "鱼",
      "青菜",
      "姜",
      "料酒",
      "盐",
      "香油"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 25,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 296,
    "name": "鱼头汤",
    "description": "鱼头汤",
    "ingredients": [
      "鱼头",
      "豆腐",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉",
      "料酒"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 45,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
  },
  {
    "id": 297,
    "name": "鱼骨汤",
    "description": "鱼骨汤",
    "ingredients": [
      "鱼骨",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉",
      "料酒"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 60,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ks411w7Rq",
    "category": "汤菜"
  },
  {
    "id": 298,
    "name": "鸡骨汤",
    "description": "鸡骨汤",
    "ingredients": [
      "鸡骨架",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 90,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1E8R2Y3Ejz",
    "category": "汤菜"
  },
  {
    "id": 299,
    "name": "猪骨汤",
    "description": "猪骨汤",
    "ingredients": [
      "猪骨",
      "白萝卜",
      "玉米",
      "胡萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 120,
    "bilibiliUrl": "https://www.bilibili.com/video/BV14s421T7Me",
    "category": "汤菜"
  },
  {
    "id": 300,
    "name": "牛骨汤",
    "description": "牛骨汤",
    "ingredients": [
      "牛骨",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 180,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1aJ411z7z9",
    "category": "汤菜"
  },
  {
    "id": 301,
    "name": "羊骨汤",
    "description": "羊骨汤",
    "ingredients": [
      "羊骨",
      "白萝卜",
      "姜",
      "葱",
      "盐",
      "胡椒粉"
    ],
    "cookware": [
      "煮锅",
      "菜刀",
      "砧板",
      "汤勺"
    ],
    "difficulty": "中等",
    "cookingTime": 150,
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411G7bw",
    "category": "汤菜"
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
