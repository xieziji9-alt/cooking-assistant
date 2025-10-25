// 全局应用数据
const AppData = {
    // 食材数据
    ingredients: [
        // 蔬菜类
        { name: '西红柿', category: '蔬菜' },
        { name: '土豆', category: '蔬菜' },
        { name: '青椒', category: '蔬菜' },
        { name: '白菜', category: '蔬菜' },
        { name: '菠菜', category: '蔬菜' },
        { name: '豆芽', category: '蔬菜' },
        { name: '茄子', category: '蔬菜' },
        { name: '胡萝卜', category: '蔬菜' },
        { name: '洋葱', category: '蔬菜' },
        { name: '黄瓜', category: '蔬菜' },
        { name: '韭菜', category: '蔬菜' },
        { name: '豆腐', category: '蔬菜' },
        { name: '冬瓜', category: '蔬菜' },
        { name: '丝瓜', category: '蔬菜' },
        { name: '花菜', category: '蔬菜' },
        { name: '西兰花', category: '蔬菜' },
        { name: '四季豆', category: '蔬菜' },
        { name: '蒜苔', category: '蔬菜' },
        { name: '芹菜', category: '蔬菜' },
        { name: '空心菜', category: '蔬菜' },
        { name: '萝卜', category: '蔬菜' },
        { name: '豆角', category: '蔬菜' },
        
        // 肉类
        { name: '猪肉', category: '肉类' },
        { name: '牛肉', category: '肉类' },
        { name: '鸡肉', category: '肉类' },
        { name: '鸭肉', category: '肉类' },
        { name: '羊肉', category: '肉类' },
        { name: '鸡蛋', category: '肉类' },
        { name: '虾', category: '肉类' },
        { name: '鱼肉', category: '肉类' },
        { name: '带鱼', category: '肉类' },
        { name: '鲈鱼', category: '肉类' },
        { name: '扇贝', category: '肉类' },
        { name: '生蚝', category: '肉类' },
        { name: '小龙虾', category: '肉类' },
        { name: '排骨', category: '肉类' },
        
        // 主食
        { name: '面条', category: '主食' },
        { name: '米饭', category: '主食' },
        { name: '面粉', category: '主食' },
        { name: '粉条', category: '主食' },
        { name: '粉丝', category: '主食' },
        
        // 调料
        { name: '蒜', category: '调料' },
        { name: '姜', category: '调料' },
        { name: '葱', category: '调料' },
        { name: '盐', category: '调料' },
        { name: '糖', category: '调料' },
        { name: '生抽', category: '调料' },
        { name: '老抽', category: '调料' },
        { name: '料酒', category: '调料' },
        { name: '醋', category: '调料' },
        { name: '食用油', category: '调料' },
        { name: '香油', category: '调料' },
        { name: '豆瓣酱', category: '调料' },
        { name: '花椒', category: '调料' },
        { name: '辣椒', category: '调料' },
        
        // 其他
        { name: '香菇', category: '其他' },
        { name: '木耳', category: '其他' },
        { name: '紫菜', category: '其他' },
        { name: '海带', category: '其他' },
        { name: '酸菜', category: '其他' }
    ],

    // 厨具数据
    cookware: [
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
        
        // 工具
        { name: '砧板', category: '工具', type: '工具' },
        { name: '锅铲', category: '工具', type: '工具' },
        { name: '勺子', category: '工具', type: '工具' },
        { name: '碗', category: '工具', type: '工具' },
        { name: '盘子', category: '工具', type: '工具' },
        { name: '漏勺', category: '工具', type: '工具' },
        { name: '擀面杖', category: '工具', type: '工具' },
        { name: '汤勺', category: '工具', type: '工具' }
    ],

    // 菜谱数据（基础菜谱）
    recipes: [
        {
            id: 1,
            name: '西红柿炒蛋',
            description: '经典家常菜，营养丰富',
            ingredients: ['西红柿', '鸡蛋', '葱', '盐', '糖', '食用油'],
            cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
            difficulty: '简单',
            cookingTime: 10,
            bilibiliUrl: 'https://www.bilibili.com/video/BV1gY411C7BY',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1BHZmYjENX',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1gt411o78F',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV11xpjezEBV',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1GM41157Hz',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1Wg411L7Jx',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1at411874o',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1se4y1b723',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1XK411K7TU',
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
            description: '翠绿少水无涩味的清炒菠菜',
            ingredients: ['菠菜', '蒜', '盐', '鸡精', '食用油'],
            cookware: ['炒锅', '菜刀', '砧板', '锅铲'],
            difficulty: '简单',
            cookingTime: 8,
            bilibiliUrl: 'https://www.bilibili.com/video/BV1eU4y1j72P',
            category: '素菜'
        },
        {
            id: 13,
            name: '菠菜炒鸡蛋',
            description: '简单一做竟然如此好吃',
            ingredients: ['菠菜', '鸡蛋', '蒜', '盐', '胡椒粉', '食用油'],
            cookware: ['炒锅', '菜刀', '砧板', '锅铲', '碗'],
            difficulty: '简单',
            cookingTime: 10,
            bilibiliUrl: 'https://www.bilibili.com/video/BV16v4y1s77M',
            category: '家常菜'
        },
        {
            id: 14,
            name: '凉拌菠菜',
            description: '清爽开胃的凉拌菠菜',
            ingredients: ['菠菜', '蒜', '醋', '生抽', '香油', '盐', '糖', '辣椒油'],
            cookware: ['煮锅', '菜刀', '砧板', '碗', '勺子'],
            difficulty: '简单',
            cookingTime: 15,
            bilibiliUrl: 'https://www.bilibili.com/video/BV1EQ4y1e7Cb',
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
            bilibiliUrl: 'https://www.bilibili.com/video/BV1HY4y1s7BL',
            category: '汤菜'
        }
    ]
};

// 初始化应用
function initApp() {
    console.log('做菜小助手启动');
    
    // 自动扩充菜谱库
    try {
        const autoRecipes = generateRecipes(AppData.ingredients, AppData.cookware, {
            minPerIngredient: 3,
            minTotal: 320,
            startId: 10000
        });
        AppData.recipes = AppData.recipes.concat(autoRecipes);
        console.log('菜谱总数：', AppData.recipes.length);
    } catch (e) {
        console.warn('自动扩充菜谱失败', e);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

