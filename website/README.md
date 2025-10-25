# 🍳 做菜小助手 - 网站版

这是做菜小助手的完整网站版本，功能与微信小程序完全一致。

## ✨ 功能特点

### 1. 首页
- 显示菜谱总数统计
- 热门菜谱预览（前6道）
- 菜谱分类统计（家常菜、川菜、素菜、汤菜等）
- 快速随机推荐功能

### 2. 食材推荐
- **食材选择**：按分类（蔬菜、肉类、主食、调料、其他）选择现有食材
- **厨具选择**：按分类（锅具、刀具、工具）选择现有厨具
- **智能匹配**：根据选择的食材和厨具，智能推荐最匹配的菜谱
- **匹配度显示**：显示每道菜的食材匹配数和厨具匹配数
- **排序算法**：按总匹配度、食材匹配度、匹配比例排序

### 3. 随机推荐
- 可选择推荐数量：1道、3道、5道、10道
- 从300+道菜谱中随机推荐
- 显示菜谱库统计信息
- 支持重新随机推荐

### 4. 菜谱详情
- 完整的菜谱信息展示
- 所需食材列表
- 所需厨具列表
- 难度等级
- 烹饪时间
- 菜品分类
- B站教学视频链接

### 5. 视频教程
- 每道菜都配有B站真实教学视频
- 点击即可跳转观看
- 自动复制链接到剪贴板

## 🚀 使用方法

### 方法一：直接打开（推荐）
1. 进入 `website` 目录
2. 双击打开 `index.html` 文件
3. 即可在浏览器中使用

### 方法二：本地服务器
如果需要更好的体验，可以使用本地服务器：

```bash
# 进入 website 目录
cd website

# 使用 Python 启动简单服务器
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

## 📁 文件结构

```
website/
├── index.html          # 主页面（包含所有页面结构）
├── styles.css          # 样式文件
├── app.js             # 应用数据（食材、厨具、基础菜谱）
├── autoRecipes.js     # 自动生成菜谱工具
├── script.js          # 交互逻辑
└── README.md          # 说明文档
```

## 🎨 设计特点

- **渐变色主题**：紫色渐变背景，现代美观
- **响应式设计**：支持桌面和移动设备
- **流畅动画**：页面切换、卡片悬停等动画效果
- **直观交互**：清晰的视觉反馈和操作提示
- **模态框详情**：点击菜谱卡片查看完整详情

## 📊 数据说明

- **基础菜谱**：15道精选菜谱（手工编写）
- **自动生成**：300+道菜谱（基于食材自动生成）
- **食材种类**：70+种常见食材
- **厨具种类**：18种常用厨具
- **视频教程**：所有菜谱都配有真实B站教学视频

## 🔧 技术栈

- **HTML5**：语义化标签
- **CSS3**：渐变、动画、Flexbox、Grid
- **JavaScript (ES6+)**：模块化、箭头函数、模板字符串
- **无依赖**：纯原生实现，无需任何框架或库

## 🌟 核心功能实现

### 智能推荐算法
```javascript
// 计算食材匹配度
selectedIngredients.forEach(si => {
    recipe.ingredients.forEach(ri => {
        if (ri === si || ri.includes(si) || si.includes(ri)) {
            ingredientMatch++;
        }
    });
});

// 按总分、食材分、匹配比例排序
matched.sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
    if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
    return b.matchRatio - a.matchRatio;
});
```

### 随机推荐算法
```javascript
// 无重复随机选择
const used = new Set();
while (picked.length < n) {
    const idx = Math.floor(Math.random() * recipes.length);
    if (!used.has(idx)) {
        used.add(idx);
        picked.push(recipes[idx]);
    }
}
```

## 🎯 与小程序的对应关系

| 小程序页面 | 网站页面 | 功能 |
|----------|---------|------|
| pages/index | #page-home | 首页 |
| pages/ingredients | #page-ingredients | 食材推荐 |
| pages/random | #page-random | 随机推荐 |
| pages/recipe-detail | 模态框 | 菜谱详情 |

## 💡 使用建议

1. **首次使用**：建议先浏览首页了解菜谱库规模
2. **食材推荐**：选择3-5种主要食材即可获得较好的推荐结果
3. **厨具选择**：可以不选厨具，只根据食材推荐
4. **随机推荐**：适合没有明确想法时获取灵感
5. **视频学习**：每道菜都有B站教学视频，建议观看学习

## 🔄 更新日志

### v1.0.0 (2024-10-24)
- ✅ 完整实现小程序所有功能
- ✅ 300+道菜谱数据
- ✅ 智能推荐算法
- ✅ 随机推荐功能
- ✅ B站视频链接集成
- ✅ 响应式设计
- ✅ 美观的UI界面

## 📝 注意事项

1. 建议使用现代浏览器（Chrome、Firefox、Safari、Edge）
2. 部分功能需要浏览器支持 Clipboard API（复制链接功能）
3. 视频链接跳转到B站，需要网络连接
4. 所有数据存储在前端，无需后端服务器

## 🤝 贡献

欢迎提出建议和改进意见！

## 📄 许可

本项目仅供学习交流使用。

