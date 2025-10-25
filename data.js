// 菜谱数据
const recipes = [
  {
    id: 1,
    name: '西红柿炒蛋',
    description: '经典家常菜，营养丰富',
    ingredients: ['西红柿', '鸡蛋', '葱', '盐', '糖', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '简单',
    cookingTime: 10,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Py4y1S7EF',
    category: '家常菜'
  },
  {
    id: 2,
    name: '酸辣土豆丝',
    description: '爽脆开胃的经典菜品',
    ingredients: ['土豆', '青椒', '红椒', '蒜', '醋', '生抽', '盐', '糖', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 15,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1x441127Hk',
    category: '家常菜'
  },
  {
    id: 3,
    name: '宫保鸡丁',
    description: '川菜经典，麻辣鲜香',
    ingredients: ['鸡胸肉', '花生米', '青椒', '红椒', '蒜', '姜', '豆瓣酱', '生抽', '老抽', '料酒', '糖', '盐', '淀粉', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '中等',
    cookingTime: 20,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Xt411Z7z8',
    category: '川菜'
  },
  {
    id: 4,
    name: '麻婆豆腐',
    description: '川菜经典，麻辣鲜香',
    ingredients: ['嫩豆腐', '猪肉末', '豆瓣酱', '花椒粉', '蒜', '姜', '葱', '生抽', '老抽', '料酒', '糖', '盐', '淀粉', '食用油', '香油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗', '勺子'],
    difficulty: '中等',
    cookingTime: 20,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Rs411V7i9',
    category: '川菜'
  },
  {
    id: 5,
    name: '红烧肉',
    description: '软糯香甜的经典菜品',
    ingredients: ['五花肉', '冰糖', '生抽', '老抽', '料酒', '葱', '姜', '八角', '桂皮', '盐'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '中等',
    cookingTime: 45,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Nw4m1d7Bq',
    category: '荤菜'
  },
  {
    id: 6,
    name: '青椒肉丝',
    description: '下饭神器',
    ingredients: ['青椒', '猪肉丝', '蒜', '姜', '生抽', '老抽', '料酒', '淀粉', '盐', '糖', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '简单',
    cookingTime: 15,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1x441127Hk',
    category: '家常菜'
  },
  {
    id: 7,
    name: '糖醋里脊',
    description: '酸甜可口的经典菜品',
    ingredients: ['猪里脊肉', '鸡蛋', '淀粉', '面粉', '糖', '醋', '生抽', '料酒', '盐', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '中等',
    cookingTime: 25,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1CV411a7W8',
    category: '荤菜'
  },
  {
    id: 8,
    name: '可乐鸡翅',
    description: '孩子最爱的美味',
    ingredients: ['鸡翅', '可乐', '生抽', '老抽', '料酒', '姜', '葱', '盐', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 30,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1CV411a7W8',
    category: '荤菜'
  },
  {
    id: 9,
    name: '红烧茄子',
    description: '下饭必备素菜',
    ingredients: ['茄子', '蒜', '姜', '生抽', '老抽', '糖', '盐', '淀粉', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 20,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1CV411a7W8',
    category: '素菜'
  },
  {
    id: 10,
    name: '清炒小白菜',
    description: '清淡爽口的素菜',
    ingredients: ['小白菜', '蒜', '盐', '鸡精', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 8,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1CV411a7W8',
    category: '素菜'
  },
  {
    id: 11,
    name: '菠菜面',
    description: '小高姐的菠菜面',
    ingredients: ['菠菜', '中筋面粉', '盐', '葱', '蒜', '辣椒粉', '糖', '食用油', '香醋', '生抽', '水', '香油'],
    cookware: ['煮锅', '菜刀', '砧板', '擀面杖', '碗'],
    difficulty: '中等',
    cookingTime: 45,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Ks411w7Rq',
    category: '面食'
  },
  {
    id: 12,
    name: '清炒菠菜',
    description: '超子美食的清炒菠菜',
    ingredients: ['菠菜', '蒜', '盐', '鸡精', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 8,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1hE411P7tV',
    category: '素菜'
  },
  {
    id: 13,
    name: '菠菜炒鸡蛋',
    description: '老东北美食的菠菜炒鸡蛋',
    ingredients: ['菠菜', '鸡蛋', '蒜', '盐', '胡椒粉', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '简单',
    cookingTime: 10,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1w24y1C7pK',
    category: '家常菜'
  },
  {
    id: 14,
    name: '凉拌菠菜',
    description: '老东北美食的凉拌菠菜',
    ingredients: ['菠菜', '蒜', '醋', '生抽', '香油', '盐', '糖', '辣椒油'],
    cookware: ['煮锅', '菜刀', '砧板', '碗', '勺子'],
    difficulty: '简单',
    cookingTime: 15,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1bu4m137KL',
    category: '凉菜'
  },
  {
    id: 15,
    name: '菠菜豆腐汤',
    description: '营养丰富的菠菜豆腐汤',
    ingredients: ['菠菜', '豆腐', '蒜', '盐', '胡椒粉', '香油', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '汤勺'],
    difficulty: '简单',
    cookingTime: 12,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1E8R2Y3Ejz',
    category: '汤菜'
  },
  {
    id: 16,
    name: '凉拌豆芽',
    description: '王刚的凉拌豆芽',
    ingredients: ['豆芽', '蒜', '生抽', '醋', '香油', '盐', '糖', '辣椒油'],
    cookware: ['煮锅', '菜刀', '砧板', '碗', '勺子'],
    difficulty: '简单',
    cookingTime: 15,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1up4y1X7h4',
    category: '凉菜'
  },
  {
    id: 17,
    name: '肉丝豆芽炒韭菜',
    description: '老东北美食的肉丝豆芽炒韭菜',
    ingredients: ['豆芽', '猪肉丝', '韭菜', '蒜', '姜', '生抽', '料酒', '盐', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 12,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Ta4y147Ya',
    category: '家常菜'
  },
  {
    id: 18,
    name: '豆芽炒肉丝',
    description: '小厨大亮的豆芽炒肉丝',
    ingredients: ['豆芽', '猪肉丝', '蒜', '姜', '生抽', '老抽', '料酒', '淀粉', '盐', '糖', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
    difficulty: '简单',
    cookingTime: 10,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Ti4y1r7pW',
    category: '家常菜'
  },
  {
    id: 19,
    name: '醋烹豆芽',
    description: '老隐记的醋烹豆芽',
    ingredients: ['豆芽', '蒜', '干辣椒', '醋', '生抽', '盐', '糖', '食用油'],
    cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
    difficulty: '简单',
    cookingTime: 8,
    bilibiliUrl: 'https://www.bilibili.com/video/BV1E94y1V7Pv',
    category: '素菜'
  },
  {
    id: 20,
    name: '豆芽拌粉条',
    description: '老东北美食的豆芽拌粉条',
    ingredients: ['豆芽', '粉条', '胡萝卜丝', '蒜', '醋', '生抽', '香油', '盐', '糖', '辣椒油'],
    cookware: ['煮锅', '菜刀', '砧板', '碗', '勺子'],
    difficulty: '简单',
    cookingTime: 20,
    bilibiliUrl: 'https://www.bilibili.com/video/BV14s421T7Me',
    category: '凉菜'
  }
];

// 食材数据
const ingredients = [
  // 蔬菜类
  { name: '土豆', category: '蔬菜', color: '#90EE90' },
  { name: '胡萝卜', category: '蔬菜', color: '#90EE90' },
  { name: '白菜', category: '蔬菜', color: '#90EE90' },
  { name: '青椒', category: '蔬菜', color: '#90EE90' },
  { name: '洋葱', category: '蔬菜', color: '#90EE90' },
  { name: '西红柿', category: '蔬菜', color: '#90EE90' },
  { name: '黄瓜', category: '蔬菜', color: '#90EE90' },
  { name: '茄子', category: '蔬菜', color: '#90EE90' },
  { name: '豆腐', category: '蔬菜', color: '#90EE90' },
  { name: '菠菜', category: '蔬菜', color: '#90EE90' },
  { name: '豆芽', category: '蔬菜', color: '#90EE90' },
  { name: '萝卜', category: '蔬菜', color: '#90EE90' },
  { name: '冬瓜', category: '蔬菜', color: '#90EE90' },
  { name: '丝瓜', category: '蔬菜', color: '#90EE90' },
  { name: '四季豆', category: '蔬菜', color: '#90EE90' },
  // 肉类
  { name: '猪肉', category: '肉类', color: '#FFB6C1' },
  { name: '牛肉', category: '肉类', color: '#FFB6C1' },
  { name: '鸡肉', category: '肉类', color: '#FFB6C1' },
  { name: '鱼肉', category: '肉类', color: '#FFB6C1' },
  { name: '虾', category: '肉类', color: '#FFB6C1' },
  { name: '鸡蛋', category: '肉类', color: '#FFB6C1' },
  { name: '羊肉', category: '肉类', color: '#FFB6C1' },
  { name: '鸭肉', category: '肉类', color: '#FFB6C1' },
  { name: '扇贝', category: '肉类', color: '#FFB6C1' },
  { name: '培根', category: '肉类', color: '#FFB6C1' },
  { name: '腊肠', category: '肉类', color: '#FFB6C1' },
  // 主食
  { name: '米饭', category: '主食', color: '#F0E68C' },
  { name: '面条', category: '主食', color: '#F0E68C' },
  { name: '饺子皮', category: '主食', color: '#F0E68C' },
  { name: '馒头', category: '主食', color: '#F0E68C' },
  { name: '面粉', category: '主食', color: '#F0E68C' },
  // 调料
  { name: '盐', category: '调料', color: '#DDA0DD' },
  { name: '糖', category: '调料', color: '#DDA0DD' },
  { name: '生抽', category: '调料', color: '#DDA0DD' },
  { name: '老抽', category: '调料', color: '#DDA0DD' },
  { name: '料酒', category: '调料', color: '#DDA0DD' },
  { name: '醋', category: '调料', color: '#DDA0DD' },
  { name: '蒜', category: '调料', color: '#DDA0DD' },
  { name: '姜', category: '调料', color: '#DDA0DD' },
  { name: '葱', category: '调料', color: '#DDA0DD' },
  { name: '食用油', category: '调料', color: '#DDA0DD' }
];

// 厨具数据
const cookware = [
  // 锅具
  { name: '炒锅', category: '锅具', type: '锅具' },
  { name: '煮锅', category: '锅具', type: '锅具' },
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
