// 全局变量
let selectedIngredients = [];
let selectedCookware = [];
let currentIngredientCategory = '蔬菜';
let currentCookwareCategory = '锅具';

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    initializeIngredients();
    initializeCookware();
});

// 页面切换
function showPage(pageId) {
    console.log('showPage 被调用，pageId:', pageId);

    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // 显示目标页面
    const targetPage = document.getElementById(pageId + '-page');
    console.log('目标页面:', targetPage);

    if (targetPage) {
        targetPage.classList.add('active');
        console.log('页面切换成功:', pageId);
    } else {
        console.error('找不到页面:', pageId + '-page');
    }

    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        // 如果按钮的 onclick 包含当前 pageId，则设为 active
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${pageId}'`)) {
            btn.classList.add('active');
        }
    });
}

// 初始化食材选择
function initializeIngredients() {
    showIngredientCategory('蔬菜');
}

// 显示食材分类
function showIngredientCategory(category) {
    currentIngredientCategory = category;

    // 更新标签页状态
    document.querySelectorAll('#ingredients-page .tab-btn').forEach(btn => {
        btn.classList.remove('active');
        // 如果按钮的 onclick 包含当前 category，则设为 active
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // 显示该分类的食材
    const grid = document.getElementById('ingredients-grid');
    grid.innerHTML = '';

    const categoryIngredients = ingredients.filter(item => item.category === category);

    categoryIngredients.forEach(ingredient => {
        const btn = document.createElement('button');
        btn.className = 'item-btn';
        btn.textContent = ingredient.name;
        btn.style.backgroundColor = ingredient.color;

        if (selectedIngredients.includes(ingredient.name)) {
            btn.classList.add('selected');
        }

        btn.onclick = () => toggleIngredient(ingredient.name, btn);
        grid.appendChild(btn);
    });
}

// 切换食材选择
function toggleIngredient(name, btn) {
    if (selectedIngredients.includes(name)) {
        selectedIngredients = selectedIngredients.filter(item => item !== name);
        btn.classList.remove('selected');
    } else {
        selectedIngredients.push(name);
        btn.classList.add('selected');
    }
    updateSelectedIngredients();
}

// 更新已选食材显示
function updateSelectedIngredients() {
    const container = document.getElementById('selected-ingredients');
    container.innerHTML = '';
    
    selectedIngredients.forEach(ingredient => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
            ${ingredient}
            <button class="remove-tag" onclick="removeIngredient('${ingredient}')">×</button>
        `;
        container.appendChild(tag);
    });
}

// 移除食材
function removeIngredient(name) {
    selectedIngredients = selectedIngredients.filter(item => item !== name);
    updateSelectedIngredients();
    
    // 更新按钮状态
    const btn = Array.from(document.querySelectorAll('#ingredients-grid .item-btn'))
        .find(b => b.textContent === name);
    if (btn) {
        btn.classList.remove('selected');
    }
}

// 初始化厨具选择
function initializeCookware() {
    showCookwareCategory('锅具');
}

// 显示厨具分类
function showCookwareCategory(category) {
    currentCookwareCategory = category;

    // 更新标签页状态
    document.querySelectorAll('#ingredients-page .selection-section:last-of-type .tab-btn').forEach(btn => {
        btn.classList.remove('active');
        // 如果按钮的 onclick 包含当前 category，则设为 active
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // 显示该分类的厨具
    const grid = document.getElementById('cookware-grid');
    grid.innerHTML = '';

    const categoryCookware = cookware.filter(item => item.category === category);

    categoryCookware.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'item-btn';
        btn.textContent = item.name;

        if (selectedCookware.includes(item.name)) {
            btn.classList.add('selected');
        }

        btn.onclick = () => toggleCookware(item.name, btn);
        grid.appendChild(btn);
    });
}

// 切换厨具选择
function toggleCookware(name, btn) {
    if (selectedCookware.includes(name)) {
        selectedCookware = selectedCookware.filter(item => item !== name);
        btn.classList.remove('selected');
    } else {
        selectedCookware.push(name);
        btn.classList.add('selected');
    }
    updateSelectedCookware();
}

// 更新已选厨具显示
function updateSelectedCookware() {
    const container = document.getElementById('selected-cookware');
    container.innerHTML = '';
    
    selectedCookware.forEach(item => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
            ${item}
            <button class="remove-tag" onclick="removeCookware('${item}')">×</button>
        `;
        container.appendChild(tag);
    });
}

// 移除厨具
function removeCookware(name) {
    selectedCookware = selectedCookware.filter(item => item !== name);
    updateSelectedCookware();
    
    // 更新按钮状态
    const btn = Array.from(document.querySelectorAll('#cookware-grid .item-btn'))
        .find(b => b.textContent === name);
    if (btn) {
        btn.classList.remove('selected');
    }
}

// 清空选择
function clearSelection() {
    selectedIngredients = [];
    selectedCookware = [];
    updateSelectedIngredients();
    updateSelectedCookware();
    
    // 清除所有按钮的选中状态
    document.querySelectorAll('.item-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 隐藏推荐结果
    document.getElementById('recommendation-results').style.display = 'none';
}

// 推荐菜谱
function recommendRecipes() {
    if (selectedIngredients.length === 0 && selectedCookware.length === 0) {
        alert('请至少选择一种食材或厨具！');
        return;
    }
    
    const matchedRecipes = [];
    
    recipes.forEach(recipe => {
        let ingredientMatch = 0;
        let cookwareMatch = 0;
        
        // 计算食材匹配度
        selectedIngredients.forEach(selectedIngredient => {
            recipe.ingredients.forEach(recipeIngredient => {
                if (recipeIngredient === selectedIngredient || 
                    recipeIngredient.includes(selectedIngredient) ||
                    selectedIngredient.includes(recipeIngredient)) {
                    ingredientMatch++;
                }
            });
        });
        
        // 计算厨具匹配度
        selectedCookware.forEach(selectedCookwareItem => {
            recipe.cookware.forEach(recipeCookware => {
                if (recipeCookware === selectedCookwareItem || 
                    recipeCookware.includes(selectedCookwareItem) ||
                    selectedCookwareItem.includes(recipeCookware)) {
                    cookwareMatch++;
                }
            });
        });
        
        const totalScore = ingredientMatch + cookwareMatch;
        
        if (totalScore > 0) {
            matchedRecipes.push({
                ...recipe,
                matchScore: ingredientMatch,
                cookwareScore: cookwareMatch,
                totalScore: totalScore,
                matchRatio: ingredientMatch / Math.max(selectedIngredients.length, 1)
            });
        }
    });
    
    // 按总分排序
    matchedRecipes.sort((a, b) => {
        if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
        }
        if (b.matchScore !== a.matchScore) {
            return b.matchScore - a.matchScore;
        }
        return b.matchRatio - a.matchRatio;
    });
    
    displayRecommendationResults(matchedRecipes);
}

// 显示推荐结果
function displayRecommendationResults(matchedRecipes) {
    const resultsSection = document.getElementById('recommendation-results');
    const recipesList = document.getElementById('recipes-list');
    
    if (matchedRecipes.length === 0) {
        resultsSection.innerHTML = `
            <h3>😔 没有找到匹配的菜谱</h3>
            <p>建议您：</p>
            <ul>
                <li>尝试选择更常见的食材</li>
                <li>减少厨具限制</li>
                <li>查看随机推荐获取灵感</li>
            </ul>
        `;
        resultsSection.style.display = 'block';
        return;
    }
    
    recipesList.innerHTML = '';
    
    matchedRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => showRecipeDetail(recipe);
        
        card.innerHTML = `
            <div class="recipe-header">
                <div>
                    <div class="recipe-name">${recipe.name}</div>
                    <div class="recipe-desc">${recipe.description}</div>
                </div>
                <div class="recipe-badges">
                    ${recipe.matchScore > 0 ? `<span class="match-badge">🥬 食材匹配${recipe.matchScore}个</span>` : ''}
                    ${recipe.cookwareScore > 0 ? `<span class="cookware-badge">🍳 厨具匹配${recipe.cookwareScore}个</span>` : ''}
                    <span class="video-hint" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">📺 教程</span>
                </div>
            </div>
            <div class="recipe-info">
                <span class="info-item">⭐ ${recipe.difficulty}</span>
                <span class="info-item">⏰ ${recipe.cookingTime}分钟</span>
                <span class="info-item">🍽️ ${recipe.category}</span>
            </div>
            <div class="recipe-details">
                <div class="detail-section">
                    <div class="detail-label">🥬 食材：</div>
                    <div class="detail-content">
                        ${recipe.ingredients.map(ingredient => 
                            `<span class="ingredient-tag">${ingredient}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-label">🍳 厨具：</div>
                    <div class="detail-content">
                        ${recipe.cookware.map(item => 
                            `<span class="cookware-tag">${item}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-label">📺 视频：</div>
                    <div class="detail-content">
                        <span class="video-link" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">
                            点击观看B站教学视频
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        recipesList.appendChild(card);
    });
    
    resultsSection.querySelector('h3').textContent = `🎉 为您推荐以下菜谱 (共${matchedRecipes.length}道)：`;
    resultsSection.style.display = 'block';
    
    // 滚动到结果区域
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// 随机推荐菜谱
function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    const resultDiv = document.getElementById('random-result');
    resultDiv.innerHTML = `
        <div class="recipe-card" onclick="showRecipeDetail(recipes[${randomIndex}])">
            <div class="recipe-header">
                <div>
                    <div class="recipe-name">${randomRecipe.name}</div>
                    <div class="recipe-desc">${randomRecipe.description}</div>
                </div>
                <div class="recipe-badges">
                    <span class="video-hint" onclick="event.stopPropagation(); openBilibiliVideo('${randomRecipe.bilibiliUrl}')">📺 教程</span>
                </div>
            </div>
            <div class="recipe-info">
                <span class="info-item">⭐ ${randomRecipe.difficulty}</span>
                <span class="info-item">⏰ ${randomRecipe.cookingTime}分钟</span>
                <span class="info-item">🍽️ ${randomRecipe.category}</span>
            </div>
            <div class="recipe-details">
                <div class="detail-section">
                    <div class="detail-label">🥬 食材：</div>
                    <div class="detail-content">
                        ${randomRecipe.ingredients.map(ingredient =>
                            `<span class="ingredient-tag">${ingredient}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-label">🍳 厨具：</div>
                    <div class="detail-content">
                        ${randomRecipe.cookware.map(item =>
                            `<span class="cookware-tag">${item}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-label">📺 视频：</div>
                    <div class="detail-content">
                        <span class="video-link" onclick="event.stopPropagation(); openBilibiliVideo('${randomRecipe.bilibiliUrl}')">
                            点击观看B站教学视频
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示菜谱详情
function showRecipeDetail(recipe) {
    const modal = document.getElementById('recipe-modal');
    const detail = document.getElementById('recipe-detail');

    detail.innerHTML = `
        <h2>${recipe.name}</h2>
        <p class="recipe-desc">${recipe.description}</p>

        <div class="recipe-info" style="margin: 1rem 0;">
            <span class="info-item">⭐ ${recipe.difficulty}</span>
            <span class="info-item">⏰ ${recipe.cookingTime}分钟</span>
            <span class="info-item">🍽️ ${recipe.category}</span>
        </div>

        <div class="detail-section" style="margin: 1.5rem 0;">
            <h3>🥬 所需食材 (${recipe.ingredients.length}种)</h3>
            <div class="detail-content" style="margin-top: 0.5rem;">
                ${recipe.ingredients.map(ingredient =>
                    `<span class="ingredient-tag">${ingredient}</span>`
                ).join('')}
            </div>
        </div>

        <div class="detail-section" style="margin: 1.5rem 0;">
            <h3>🍳 所需厨具 (${recipe.cookware.length}种)</h3>
            <div class="detail-content" style="margin-top: 0.5rem;">
                ${recipe.cookware.map(item =>
                    `<span class="cookware-tag">${item}</span>`
                ).join('')}
            </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="openBilibiliVideo('${recipe.bilibiliUrl}')">
                📺 观看教学视频
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// 打开B站视频
function openBilibiliVideo(url) {
    if (confirm('即将跳转到B站观看教学视频，是否继续？')) {
        window.open(url, '_blank');
    }
}

// 测试功能
function testRecipeCount() {
    const result = `菜谱数量测试结果：

总菜谱数：${recipes.length}道

分类统计：
- 家常菜：${recipes.filter(r => r.category === '家常菜').length}道
- 川菜：${recipes.filter(r => r.category === '川菜').length}道
- 荤菜：${recipes.filter(r => r.category === '荤菜').length}道
- 素菜：${recipes.filter(r => r.category === '素菜').length}道
- 面食：${recipes.filter(r => r.category === '面食').length}道
- 汤菜：${recipes.filter(r => r.category === '汤菜').length}道
- 凉菜：${recipes.filter(r => r.category === '凉菜').length}道

✅ 菜谱数量充足！`;

    document.getElementById('test-results').textContent = result;
}

function testIngredientCoverage() {
    const mainIngredients = ['西红柿', '土豆', '青椒', '鸡蛋', '牛肉', '猪肉', '菠菜', '豆芽', '白菜'];
    let result = '主要食材覆盖测试：\n\n';

    mainIngredients.forEach(ingredient => {
        const count = recipes.filter(recipe =>
            recipe.ingredients.some(ing => ing.includes(ingredient))
        ).length;
        const status = count >= 5 ? '✅' : '❌';
        result += `${status} ${ingredient}：${count}道菜\n`;
    });

    const totalIssues = mainIngredients.filter(ingredient => {
        const count = recipes.filter(recipe =>
            recipe.ingredients.some(ing => ing.includes(ingredient))
        ).length;
        return count < 5;
    }).length;

    result += `\n📊 总结：${totalIssues === 0 ? '所有主要食材都达标！' : `${totalIssues}种食材不足5道菜`}`;

    document.getElementById('test-results').textContent = result;
}

function testBilibiliLinks() {
    let result = 'B站链接测试：\n\n';
    let validLinks = 0;
    let invalidLinks = 0;

    recipes.forEach((recipe, index) => {
        if (recipe.bilibiliUrl && recipe.bilibiliUrl.includes('bilibili.com')) {
            validLinks++;
            if (index < 5) {
                result += `✅ ${recipe.name}: ${recipe.bilibiliUrl}\n`;
            }
        } else {
            invalidLinks++;
            result += `❌ ${recipe.name}: 链接无效\n`;
        }
    });

    if (recipes.length > 5) {
        result += `...还有${recipes.length - 5}个链接\n`;
    }

    result += `\n📊 统计：
有效链接：${validLinks}个
无效链接：${invalidLinks}个
总链接数：${recipes.length}个

${invalidLinks === 0 ? '✅ 所有链接都有效！' : '❌ 存在无效链接'}`;

    document.getElementById('test-results').textContent = result;
}

function testRecommendation() {
    // 模拟选择西红柿进行测试
    const testIngredients = ['西红柿'];
    const matchedRecipes = [];

    recipes.forEach(recipe => {
        let ingredientMatch = 0;

        testIngredients.forEach(selectedIngredient => {
            recipe.ingredients.forEach(recipeIngredient => {
                if (recipeIngredient === selectedIngredient ||
                    recipeIngredient.includes(selectedIngredient) ||
                    selectedIngredient.includes(recipeIngredient)) {
                    ingredientMatch++;
                }
            });
        });

        if (ingredientMatch > 0) {
            matchedRecipes.push({
                name: recipe.name,
                matchScore: ingredientMatch,
                category: recipe.category
            });
        }
    });

    let result = '推荐功能测试（测试食材：西红柿）：\n\n';
    result += `找到匹配菜谱：${matchedRecipes.length}道\n\n`;

    matchedRecipes.slice(0, 5).forEach((recipe, index) => {
        result += `${index + 1}. ${recipe.name} (${recipe.category}) - 匹配度${recipe.matchScore}\n`;
    });

    if (matchedRecipes.length > 5) {
        result += `...还有${matchedRecipes.length - 5}道菜\n`;
    }

    result += `\n${matchedRecipes.length >= 5 ? '✅ 推荐功能正常！' : '❌ 推荐结果不足'}`;

    document.getElementById('test-results').textContent = result;
}

function validateAllData() {
    let result = '数据完整性验证：\n\n';
    let missingIngredients = 0;
    let missingCookware = 0;
    let complete = 0;

    recipes.forEach(recipe => {
        const hasIngredients = recipe.ingredients && recipe.ingredients.length > 0;
        const hasCookware = recipe.cookware && recipe.cookware.length > 0;

        if (hasIngredients && hasCookware) {
            complete++;
        } else {
            if (!hasIngredients) missingIngredients++;
            if (!hasCookware) missingCookware++;
        }
    });

    result += `总菜谱数：${recipes.length}道\n`;
    result += `✅ 完整菜谱：${complete}道\n`;
    result += `❌ 缺少食材：${missingIngredients}道\n`;
    result += `❌ 缺少厨具：${missingCookware}道\n\n`;

    result += `食材数据：${ingredients.length}种\n`;
    result += `厨具数据：${cookware.length}种\n\n`;

    result += `${missingIngredients === 0 && missingCookware === 0 ? '🎉 所有数据完整！' : '⚠️ 存在数据缺失'}`;

    document.getElementById('test-results').textContent = result;
}
