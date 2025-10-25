// 菜谱数据 - 自动生成自 recipes.csv
const recipes = [
  {
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1kE411i7r1",
    "category": "家常菜"
  },
  {
    "id": 18,
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
    "id": 19,
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
    "id": 20,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1iW411N7CY",
    "category": "素菜"
  },
  {
    "id": 21,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Fz4y187Li",
    "category": "素菜"
  },
  {
    "id": 22,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1x441127Hk",
    "category": "素菜"
  },
  {
    "id": 23,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1fy4y1W7z5",
    "category": "素菜"
  },
  {
    "id": 24,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1yf42117oX",
    "category": "素菜"
  },
  {
    "id": 25,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1nW411Z7MQ",
    "category": "川菜"
  },
  {
    "id": 26,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Ts411n7ns",
    "category": "家常菜"
  },
  {
    "id": 27,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1KW411N7Dw",
    "category": "素菜"
  },
  {
    "id": 28,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1R4411x7Pi",
    "category": "海鲜"
  },
  {
    "id": 29,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1QU4y1j7T4",
    "category": "海鲜"
  },
  {
    "id": 30,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1m441177A8",
    "category": "海鲜"
  },
  {
    "id": 31,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1DR4y1p7j4",
    "category": "海鲜"
  },
  {
    "id": 32,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1jK411W723",
    "category": "汤菜"
  },
  {
    "id": 33,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Gq4y1S7JT",
    "category": "面食"
  },
  {
    "id": 34,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1vW411o73q",
    "category": "面食"
  },
  {
    "id": 35,
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
    "id": 36,
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
    "id": 37,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV14P411A7SZ",
    "category": "蒸菜"
  },
  {
    "id": 38,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Cs411w7ka",
    "category": "凉菜"
  },
  {
    "id": 39,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1RV41167WV",
    "category": "凉菜"
  },
  {
    "id": 40,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1Bs411F7W3",
    "category": "凉菜"
  },
  {
    "id": 41,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1es41177P4",
    "category": "凉菜"
  },
  {
    "id": 42,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1CebaznE19",
    "category": "特色菜"
  },
  {
    "id": 43,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1f34y1H77U",
    "category": "荤菜"
  },
  {
    "id": 44,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV12y4y1q7rZ",
    "category": "海鲜"
  },
  {
    "id": 45,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1gx411B7V7",
    "category": "蒸菜"
  },
  {
    "id": 46,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1ih411R7Zx",
    "category": "荤菜"
  },
  {
    "id": 47,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1fK4y1h7jb",
    "category": "汤菜"
  },
  {
    "id": 48,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1jc411w7aV",
    "category": "素菜"
  },
  {
    "id": 49,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1JE411D7KD",
    "category": "家常菜"
  },
  {
    "id": 50,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1ph4y1v7jB",
    "category": "主食"
  },
  {
    "id": 51,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1es411c7ob",
    "category": "家常菜"
  },
  {
    "id": 52,
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
    "id": 53,
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
    "id": 54,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1iT411V7FJ",
    "category": "海鲜"
  },
  {
    "id": 55,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1sJ411V7C5",
    "category": "海鲜"
  },
  {
    "id": 56,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1mK411F7oM",
    "category": "川菜"
  },
  {
    "id": 57,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV15s411L7kc",
    "category": "川菜"
  },
  {
    "id": 58,
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
    "bilibiliUrl": "https://www.bilibili.com/video/BV1YV411b7yp",
    "category": "荤菜"
  },
  {
    "id": 59,
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
    "id": 60,
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
    "id": 61,
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
    "id": 62,
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
    "id": 63,
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
    "id": 64,
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
    "id": 65,
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
    "id": 66,
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
    "id": 67,
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
    "id": 68,
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
    "id": 69,
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
    "id": 70,
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
    "id": 71,
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
    "id": 72,
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
    "id": 73,
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
    "id": 74,
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
    "id": 75,
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
    "id": 76,
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
