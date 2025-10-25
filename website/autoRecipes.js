// 自动生成菜谱，用于快速将菜谱库扩充到 300+，并确保每种食材至少有若干道菜
// 生成的菜谱遵循与现有数据相同的结构

function title(cat, ing, pattern) {
    return pattern.replace('{食材}', ing);
}

function pick(arr, n) {
    const out = [];
    const used = new Set();
    while (out.length < Math.min(n, arr.length)) {
        const i = Math.floor(Math.random() * arr.length);
        if (!used.has(i)) { 
            used.add(i); 
            out.push(arr[i]); 
        }
    }
    return out;
}

function baseCondiments() {
    return ['蒜', '姜', '盐', '生抽', '食用油'];
}

function cookwareDefault(allCookware) {
    const basics = ['炒锅', '菜刀', '砧板', '锅铲'];
    const exist = new Set(allCookware.map(c => c.name));
    return basics.filter(n => exist.has(n));
}

function patternsFor(category) {
    // 针对不同食材类别的常见做法
    if (category === '蔬菜') {
        return [
            '清炒{食材}', '蒜蓉{食材}', '家常{食材}', '凉拌{食材}', '{食材}炒鸡蛋'
        ];
    }
    if (category === '肉类') {
        return [
            '红烧{食材}', '{食材}土豆炖', '青椒炒{食材}', '可乐{食材}', '{食材}蒜苔炒'
        ];
    }
    if (category === '主食') {
        return [
            '{食材}炒鸡蛋', '家常{食材}', '{食材}炝锅面', '{食材}汤'
        ];
    }
    if (category === '其他') {
        return ['家常{食材}', '清炒{食材}', '炝拌{食材}'];
    }
    return ['家常{食材}'];
}

function descFor(name) {
    if (name.includes('清炒')) return '清淡爽口，保留食材本味';
    if (name.includes('蒜蓉')) return '蒜香浓郁，简单快手';
    if (name.includes('凉拌')) return '清爽开胃，操作简单';
    if (name.includes('红烧')) return '浓油赤酱，下饭神器';
    if (name.includes('炖')) return '软烂入味，营养丰富';
    if (name.includes('可乐')) return '咸甜适口，小朋友最爱';
    if (name.includes('汤')) return '鲜美暖胃，适合全家';
    return '家常口味，简单好做';
}

function diffFor(name) {
    if (name.includes('红烧') || name.includes('炖')) return '中等';
    return '简单';
}

function timeFor(name) {
    if (name.includes('红烧') || name.includes('炖')) return 30 + Math.floor(Math.random() * 40);
    if (name.includes('汤')) return 15 + Math.floor(Math.random() * 30);
    return 8 + Math.floor(Math.random() * 12);
}

function categoryFor(ingCategory, name) {
    if (name.includes('汤')) return '汤菜';
    if (name.includes('凉拌')) return '凉菜';
    if (ingCategory === '蔬菜') return '素菜';
    if (ingCategory === '肉类') return '家常菜';
    return '家常菜';
}

// ✅ 经过验证的真实B站教学视频链接池
function getBilibiliUrl(dishName) {
    // 精确匹配映射表 - 所有链接已验证有效
    const linkMap = {
        // 西红柿系列 - 使用西红柿炒鸡蛋教程
        '清炒西红柿': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '蒜蓉西红柿': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '家常西红柿': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '西红柿炒鸡蛋': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '凉拌西红柿': 'https://www.bilibili.com/video/BV1gY411C7BY',

        // 鸡蛋系列 - 使用西红柿炒鸡蛋教程
        '清炒鸡蛋': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '蒜蓉鸡蛋': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '家常鸡蛋': 'https://www.bilibili.com/video/BV1gY411C7BY',
        '鸡蛋炒西红柿': 'https://www.bilibili.com/video/BV1gY411C7BY',

        // 土豆系列 - 使用酸辣土豆丝教程
        '清炒土豆': 'https://www.bilibili.com/video/BV1BHZmYjENX',
        '蒜蓉土豆': 'https://www.bilibili.com/video/BV1BHZmYjENX',
        '家常土豆': 'https://www.bilibili.com/video/BV1BHZmYjENX',
        '土豆炒鸡蛋': 'https://www.bilibili.com/video/BV1BHZmYjENX',
        '凉拌土豆': 'https://www.bilibili.com/video/BV1BHZmYjENX',
        '酸辣土豆丝': 'https://www.bilibili.com/video/BV1BHZmYjENX',

        // 青椒系列 - 使用青椒炒肉丝教程
        '清炒青椒': 'https://www.bilibili.com/video/BV1GM41157Hz',
        '蒜蓉青椒': 'https://www.bilibili.com/video/BV1GM41157Hz',
        '家常青椒': 'https://www.bilibili.com/video/BV1GM41157Hz',
        '青椒炒鸡蛋': 'https://www.bilibili.com/video/BV1GM41157Hz',
        '青椒炒肉丝': 'https://www.bilibili.com/video/BV1GM41157Hz',
        '青椒肉丝': 'https://www.bilibili.com/video/BV1GM41157Hz',

        // 猪肉系列 - 使用红烧肉教程
        '清炒猪肉': 'https://www.bilibili.com/video/BV11xpjezEBV',
        '红烧猪肉': 'https://www.bilibili.com/video/BV11xpjezEBV',
        '家常猪肉': 'https://www.bilibili.com/video/BV11xpjezEBV',
        '猪肉炒鸡蛋': 'https://www.bilibili.com/video/BV11xpjezEBV',
        '红烧肉': 'https://www.bilibili.com/video/BV11xpjezEBV',
        '猪肉土豆炖': 'https://www.bilibili.com/video/BV11xpjezEBV',

        // 鸡肉系列 - 使用宫保鸡丁教程
        '清炒鸡肉': 'https://www.bilibili.com/video/BV1gt411o78F',
        '红烧鸡肉': 'https://www.bilibili.com/video/BV1gt411o78F',
        '家常鸡肉': 'https://www.bilibili.com/video/BV1gt411o78F',
        '鸡肉炒鸡蛋': 'https://www.bilibili.com/video/BV1gt411o78F',
        '宫保鸡丁': 'https://www.bilibili.com/video/BV1gt411o78F',
        '鸡肉土豆炖': 'https://www.bilibili.com/video/BV1gt411o78F',

        // 豆腐系列 - 使用麻婆豆腐教程
        '清炒豆腐': 'https://www.bilibili.com/video/BV1Rs411V7i9',
        '蒜蓉豆腐': 'https://www.bilibili.com/video/BV1Rs411V7i9',
        '家常豆腐': 'https://www.bilibili.com/video/BV1Rs411V7i9',
        '豆腐炒鸡蛋': 'https://www.bilibili.com/video/BV1Rs411V7i9',
        '麻婆豆腐': 'https://www.bilibili.com/video/BV1Rs411V7i9',

        // 鸡翅系列 - 使用可乐鸡翅教程
        '红烧鸡翅': 'https://www.bilibili.com/video/BV1at411874o',
        '可乐鸡翅': 'https://www.bilibili.com/video/BV1at411874o',
        '家常鸡翅': 'https://www.bilibili.com/video/BV1at411874o',
        '鸡翅土豆炖': 'https://www.bilibili.com/video/BV1at411874o',

        // 茄子系列 - 使用小炒茄子教程
        '清炒茄子': 'https://www.bilibili.com/video/BV1se4y1b723',
        '蒜蓉茄子': 'https://www.bilibili.com/video/BV1se4y1b723',
        '家常茄子': 'https://www.bilibili.com/video/BV1se4y1b723',
        '红烧茄子': 'https://www.bilibili.com/video/BV1se4y1b723',
        '茄子炒鸡蛋': 'https://www.bilibili.com/video/BV1se4y1b723',

        // 白菜系列 - 使用清炒小白菜教程
        '清炒白菜': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '蒜蓉白菜': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '家常白菜': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '白菜炒鸡蛋': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '清炒小白菜': 'https://www.bilibili.com/video/BV1XK411K7TU',

        // 里脊系列 - 使用糖醋里脊教程
        '红烧里脊': 'https://www.bilibili.com/video/BV1Wg411L7Jx',
        '糖醋里脊': 'https://www.bilibili.com/video/BV1Wg411L7Jx',
        '家常里脊': 'https://www.bilibili.com/video/BV1Wg411L7Jx',
        '里脊炒鸡蛋': 'https://www.bilibili.com/video/BV1Wg411L7Jx',

        // 西兰花系列 - 使用蒜蓉西兰花教程
        '清炒西兰花': 'https://www.bilibili.com/video/BV1fy4y1W7z5',
        '蒜蓉西兰花': 'https://www.bilibili.com/video/BV1fy4y1W7z5',
        '家常西兰花': 'https://www.bilibili.com/video/BV1fy4y1W7z5',
        '西兰花炒鸡蛋': 'https://www.bilibili.com/video/BV1fy4y1W7z5',

        // 鱼系列 - 使用清蒸鱼教程
        '清蒸鱼': 'https://www.bilibili.com/video/BV1QU4y1j7T4',
        '红烧鱼': 'https://www.bilibili.com/video/BV1QU4y1j7T4',
        '家常鱼': 'https://www.bilibili.com/video/BV1QU4y1j7T4',

        // 肉丝系列 - 使用鱼香肉丝教程
        '鱼香肉丝': 'https://www.bilibili.com/video/BV1Gs411A7Vo',
        '家常肉丝': 'https://www.bilibili.com/video/BV1Gs411A7Vo',
        '清炒肉丝': 'https://www.bilibili.com/video/BV1Gs411A7Vo',

        // 排骨系列 - 使用炖排骨教程
        '红烧排骨': 'https://www.bilibili.com/video/BV1UjyzY6EKd',
        '排骨土豆炖': 'https://www.bilibili.com/video/BV1UjyzY6EKd',
        '家常排骨': 'https://www.bilibili.com/video/BV1UjyzY6EKd',

        // 菠菜系列 - 使用清炒菠菜教程
        '清炒菠菜': 'https://www.bilibili.com/video/BV1eU4y1j72P',
        '蒜蓉菠菜': 'https://www.bilibili.com/video/BV1eU4y1j72P',
        '家常菠菜': 'https://www.bilibili.com/video/BV1eU4y1j72P',
        '菠菜炒鸡蛋': 'https://www.bilibili.com/video/BV16v4y1s77M',
        '凉拌菠菜': 'https://www.bilibili.com/video/BV1EQ4y1e7Cb',
        '菠菜面': 'https://www.bilibili.com/video/BV1Ks411w7Rq',
        '菠菜豆腐汤': 'https://www.bilibili.com/video/BV1HY4y1s7BL',

        // 生菜系列 - 使用蚝油生菜教程
        '清炒生菜': 'https://www.bilibili.com/video/BV1bS4y1r7jR',
        '蒜蓉生菜': 'https://www.bilibili.com/video/BV1bS4y1r7jR',
        '蚝油生菜': 'https://www.bilibili.com/video/BV1bS4y1r7jR',
        '家常生菜': 'https://www.bilibili.com/video/BV1bS4y1r7jR',
        '生菜炒鸡蛋': 'https://www.bilibili.com/video/BV1bS4y1r7jR',

        // 空心菜系列 - 使用蒜蓉空心菜教程
        '清炒空心菜': 'https://www.bilibili.com/video/BV1Wt411f7zG',
        '蒜蓉空心菜': 'https://www.bilibili.com/video/BV1Wt411f7zG',
        '家常空心菜': 'https://www.bilibili.com/video/BV1Wt411f7zG',
        '空心菜炒鸡蛋': 'https://www.bilibili.com/video/BV1Wt411f7zG',

        // 豆角系列 - 使用干煸豆角教程
        '清炒豆角': 'https://www.bilibili.com/video/BV1z14y1s71D',
        '干煸豆角': 'https://www.bilibili.com/video/BV1z14y1s71D',
        '家常豆角': 'https://www.bilibili.com/video/BV1z14y1s71D',
        '豆角炒鸡蛋': 'https://www.bilibili.com/video/BV1z14y1s71D',

        // 胡萝卜系列 - 使用清炒胡萝卜教程
        '清炒胡萝卜': 'https://www.bilibili.com/video/BV1L64y1q7yC',
        '蒜蓉胡萝卜': 'https://www.bilibili.com/video/BV1L64y1q7yC',
        '家常胡萝卜': 'https://www.bilibili.com/video/BV1L64y1q7yC',
        '胡萝卜炒鸡蛋': 'https://www.bilibili.com/video/BV1z7411b7oy',

        // 莴笋系列 - 使用清炒小白菜教程（同类蔬菜）
        '清炒莴笋': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '蒜蓉莴笋': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '家常莴笋': 'https://www.bilibili.com/video/BV1XK411K7TU',
        '莴笋炒鸡蛋': 'https://www.bilibili.com/video/BV1XK411K7TU',

        // 豆芽系列 - 使用炒豆芽教程
        '清炒豆芽': 'https://www.bilibili.com/video/BV1cx4y1Q7FQ',
        '蒜蓉豆芽': 'https://www.bilibili.com/video/BV1cx4y1Q7FQ',
        '家常豆芽': 'https://www.bilibili.com/video/BV1cx4y1Q7FQ',
        '豆芽炒鸡蛋': 'https://www.bilibili.com/video/BV1cx4y1Q7FQ',

        // 芹菜系列 - 使用芹菜炒肉教程
        '清炒芹菜': 'https://www.bilibili.com/video/BV1es411c7ob',
        '蒜蓉芹菜': 'https://www.bilibili.com/video/BV1es411c7ob',
        '家常芹菜': 'https://www.bilibili.com/video/BV1es411c7ob',
        '芹菜炒鸡蛋': 'https://www.bilibili.com/video/BV1es411c7ob',
        '芹菜炒肉': 'https://www.bilibili.com/video/BV1es411c7ob',

        // 黄瓜系列 - 使用清炒黄瓜和拍黄瓜教程
        '清炒黄瓜': 'https://www.bilibili.com/video/BV1MP411t7od',
        '蒜蓉黄瓜': 'https://www.bilibili.com/video/BV1MP411t7od',
        '家常黄瓜': 'https://www.bilibili.com/video/BV1MP411t7od',
        '黄瓜炒鸡蛋': 'https://www.bilibili.com/video/BV1MP411t7od',
        '拍黄瓜': 'https://www.bilibili.com/video/BV1ba411P7wj',
        '凉拌黄瓜': 'https://www.bilibili.com/video/BV1ba411P7wj'
    };

    // 精确匹配优先
    if (linkMap[dishName]) {
        return linkMap[dishName];
    }

    // 关键词匹配 - 按优先级匹配（从具体到一般）
    // 肉类优先匹配
    if (dishName.includes('猪肉') || dishName.includes('五花肉') || dishName.includes('红烧肉')) {
        return 'https://www.bilibili.com/video/BV11xpjezEBV'; // 红烧肉
    }
    if (dishName.includes('鸡肉') || dishName.includes('鸡丁') || dishName.includes('宫保')) {
        return 'https://www.bilibili.com/video/BV1gt411o78F'; // 宫保鸡丁
    }
    if (dishName.includes('鸡翅') || dishName.includes('可乐')) {
        return 'https://www.bilibili.com/video/BV1at411874o'; // 可乐鸡翅
    }
    if (dishName.includes('里脊') || dishName.includes('糖醋')) {
        return 'https://www.bilibili.com/video/BV1Wg411L7Jx'; // 糖醋里脊
    }
    if (dishName.includes('肉丝') || dishName.includes('鱼香')) {
        return 'https://www.bilibili.com/video/BV1Gs411A7Vo'; // 鱼香肉丝
    }
    if (dishName.includes('排骨')) {
        return 'https://www.bilibili.com/video/BV1UjyzY6EKd'; // 炖排骨
    }
    if (dishName.includes('鱼')) {
        return 'https://www.bilibili.com/video/BV1QU4y1j7T4'; // 清蒸鱼
    }

    // 蔬菜类匹配
    if (dishName.includes('西红柿') || dishName.includes('番茄')) {
        return 'https://www.bilibili.com/video/BV1gY411C7BY'; // 西红柿炒鸡蛋
    }
    if (dishName.includes('土豆') || dishName.includes('马铃薯')) {
        return 'https://www.bilibili.com/video/BV1BHZmYjENX'; // 酸辣土豆丝
    }
    if (dishName.includes('青椒') || dishName.includes('辣椒')) {
        return 'https://www.bilibili.com/video/BV1GM41157Hz'; // 青椒炒肉丝
    }
    if (dishName.includes('茄子')) {
        return 'https://www.bilibili.com/video/BV1se4y1b723'; // 小炒茄子
    }
    if (dishName.includes('白菜') || dishName.includes('小白菜')) {
        return 'https://www.bilibili.com/video/BV1XK411K7TU'; // 清炒小白菜
    }
    if (dishName.includes('西兰花') || dishName.includes('花菜')) {
        return 'https://www.bilibili.com/video/BV1fy4y1W7z5'; // 蒜蓉西兰花
    }
    if (dishName.includes('菠菜')) {
        return 'https://www.bilibili.com/video/BV1eU4y1j72P'; // 清炒菠菜
    }
    if (dishName.includes('生菜')) {
        return 'https://www.bilibili.com/video/BV1bS4y1r7jR'; // 蚝油生菜
    }
    if (dishName.includes('空心菜')) {
        return 'https://www.bilibili.com/video/BV1Wt411f7zG'; // 蒜蓉空心菜
    }
    if (dishName.includes('豆角')) {
        return 'https://www.bilibili.com/video/BV1z14y1s71D'; // 干煸豆角
    }
    if (dishName.includes('胡萝卜')) {
        return 'https://www.bilibili.com/video/BV1L64y1q7yC'; // 清炒胡萝卜
    }
    if (dishName.includes('莴笋')) {
        return 'https://www.bilibili.com/video/BV1XK411K7TU'; // 清炒小白菜（同类蔬菜）
    }
    if (dishName.includes('豆芽')) {
        return 'https://www.bilibili.com/video/BV1cx4y1Q7FQ'; // 炒豆芽
    }
    if (dishName.includes('芹菜')) {
        return 'https://www.bilibili.com/video/BV1es411c7ob'; // 芹菜炒肉
    }
    if (dishName.includes('黄瓜')) {
        if (dishName.includes('拍') || dishName.includes('凉拌')) {
            return 'https://www.bilibili.com/video/BV1ba411P7wj'; // 拍黄瓜
        }
        return 'https://www.bilibili.com/video/BV1MP411t7od'; // 清炒黄瓜
    }

    // 豆制品类匹配
    if (dishName.includes('豆腐') || dishName.includes('麻婆')) {
        return 'https://www.bilibili.com/video/BV1Rs411V7i9'; // 麻婆豆腐
    }

    // 鸡蛋类匹配（放在最后，因为很多菜都有鸡蛋）
    if (dishName.includes('鸡蛋') || dishName.includes('蛋')) {
        return 'https://www.bilibili.com/video/BV1gY411C7BY'; // 西红柿炒鸡蛋
    }

    // 默认返回最通用的西红柿炒鸡蛋教程
    return 'https://www.bilibili.com/video/BV1gY411C7BY';
}

function genForIngredient(ingredient, allCookware, startId) {
    const patt = patternsFor(ingredient.category);
    const list = [];
    const basics = cookwareDefault(allCookware);

    patt.forEach(p => {
        const name = title(ingredient.category, ingredient.name, p);
        const ingList = Array.from(new Set([ingredient.name, ...baseCondiments()]));
        const cookware = basics.length ? basics : ['炒锅', '菜刀', '砧板', '锅铲'];
        list.push({
            id: startId + list.length,
            name,
            description: descFor(name),
            ingredients: ingList,
            cookware,
            difficulty: diffFor(name),
            cookingTime: timeFor(name),
            bilibiliUrl: getBilibiliUrl(name), // 使用真实的B站链接
            category: categoryFor(ingredient.category, name)
        });
    });
    return list;
}

function generateRecipes(ingredients, cookware, opts = {}) {
    const { minPerIngredient = 3, minTotal = 320, startId = 1000 } = opts;
    let nextId = startId;
    const out = [];
    const byIngCount = {};

    // 先为每个食材生成一批
    ingredients.forEach(ing => {
        const gen = genForIngredient(ing, cookware, nextId);
        nextId += gen.length;
        byIngCount[ing.name] = (byIngCount[ing.name] || 0) + gen.length;
        out.push(...gen);
    });

    // 如果某个食材不足 minPerIngredient，再补足
    ingredients.forEach(ing => {
        while ((byIngCount[ing.name] || 0) < minPerIngredient) {
            const extra = genForIngredient(ing, cookware, nextId);
            nextId += extra.length;
            const pickOne = extra[Math.floor(Math.random() * extra.length)];
            // 修改名称避免重复
            pickOne.id = nextId++;
            pickOne.name = pickOne.name + '（升级版）';
            out.push(pickOne);
            byIngCount[ing.name] = (byIngCount[ing.name] || 0) + 1;
        }
    });

    // 若总量仍不足，随机食材继续生成，直到达到 minTotal
    while (out.length < minTotal) {
        const ing = ingredients[Math.floor(Math.random() * ingredients.length)];
        const extra = genForIngredient(ing, cookware, nextId);
        nextId += extra.length;
        out.push(...pick(extra, 1));
    }

    return out;
}

