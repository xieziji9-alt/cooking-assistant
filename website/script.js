// 全局状态
const State = {
    currentPage: 'home',
    currentIngredientCategory: '蔬菜',
    currentCookwareCategory: '锅具',
    selectedIngredients: [],
    selectedCookware: [],
    selectedCount: 5,
    recommendedRecipes: [],
    randomRecipes: []
};

// 页面导航
function navigateTo(page) {
    // 更新导航链接状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // 更新页面显示
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(`page-${page}`).classList.add('active');
    
    State.currentPage = page;
    
    // 初始化页面
    if (page === 'home') {
        initHomePage();
    } else if (page === 'ingredients') {
        initIngredientsPage();
    } else if (page === 'random') {
        initRandomPage();
    }
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 初始化首页
function initHomePage() {
    const recipes = AppData.recipes;
    
    // 设置菜谱总数
    document.getElementById('home-recipe-count').textContent = recipes.length;
    
    // 显示热门菜谱（前6道）
    const popularRecipes = recipes.slice(0, 6);
    const popularContainer = document.getElementById('popular-recipes');
    popularContainer.innerHTML = popularRecipes.map(recipe => `
        <div class="popular-item" onclick="showRecipeDetail(${recipe.id})">
            <div class="popular-name">${recipe.name}</div>
            <div class="popular-info">
                <span class="popular-time">⏰ ${recipe.cookingTime}分钟</span>
                <span class="popular-difficulty">⭐ ${recipe.difficulty}</span>
            </div>
            <div class="popular-category">${recipe.category}</div>
        </div>
    `).join('');
    
    // 统计分类数据
    const categoryStats = {};
    recipes.forEach(recipe => {
        categoryStats[recipe.category] = (categoryStats[recipe.category] || 0) + 1;
    });
    
    const statsContainer = document.getElementById('category-stats');
    const categories = ['家常菜', '川菜', '素菜', '汤菜'];
    statsContainer.innerHTML = categories.map(cat => `
        <div class="stat-item">
            <div class="stat-number">${categoryStats[cat] || 0}</div>
            <div class="stat-label">${cat}</div>
        </div>
    `).join('');
}

// 初始化食材推荐页面
function initIngredientsPage() {
    // 初始化食材分类标签
    const ingredientTabs = document.getElementById('ingredient-tabs');
    ingredientTabs.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            ingredientTabs.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            State.currentIngredientCategory = tab.dataset.category;
            refreshIngredientsList();
        });
    });
    
    // 初始化厨具分类标签
    const cookwareTabs = document.getElementById('cookware-tabs');
    cookwareTabs.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            cookwareTabs.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            State.currentCookwareCategory = tab.dataset.category;
            refreshCookwareList();
        });
    });
    
    refreshIngredientsList();
    refreshCookwareList();
    updateSelectedDisplay();
}

// 刷新食材列表
function refreshIngredientsList() {
    const ingredients = AppData.ingredients.filter(i => i.category === State.currentIngredientCategory);
    const grid = document.getElementById('ingredients-grid');
    grid.innerHTML = ingredients.map(ing => `
        <div class="item ${State.selectedIngredients.includes(ing.name) ? 'selected' : ''}" 
             onclick="toggleIngredient('${ing.name}')">
            ${ing.name}
        </div>
    `).join('');
}

// 刷新厨具列表
function refreshCookwareList() {
    const cookware = AppData.cookware.filter(c => c.category === State.currentCookwareCategory);
    const grid = document.getElementById('cookware-grid');
    grid.innerHTML = cookware.map(cw => `
        <div class="item ${State.selectedCookware.includes(cw.name) ? 'selected' : ''}" 
             onclick="toggleCookware('${cw.name}')">
            ${cw.name}
        </div>
    `).join('');
}

// 切换食材选择
function toggleIngredient(name) {
    const index = State.selectedIngredients.indexOf(name);
    if (index > -1) {
        State.selectedIngredients.splice(index, 1);
    } else {
        State.selectedIngredients.push(name);
    }
    refreshIngredientsList();
    updateSelectedDisplay();
}

// 切换厨具选择
function toggleCookware(name) {
    const index = State.selectedCookware.indexOf(name);
    if (index > -1) {
        State.selectedCookware.splice(index, 1);
    } else {
        State.selectedCookware.push(name);
    }
    refreshCookwareList();
    updateSelectedDisplay();
}

// 更新已选显示
function updateSelectedDisplay() {
    // 更新食材计数
    document.getElementById('selected-ingredients-count').textContent = State.selectedIngredients.length;
    
    // 更新食材标签
    const ingredientsDisplay = document.getElementById('selected-ingredients-display');
    const ingredientsTags = document.getElementById('selected-ingredients-tags');
    if (State.selectedIngredients.length > 0) {
        ingredientsDisplay.style.display = 'block';
        ingredientsTags.innerHTML = State.selectedIngredients.map(name => `
            <div class="selected-tag">
                ${name}
                <span class="remove-btn" onclick="removeIngredient('${name}')">×</span>
            </div>
        `).join('');
    } else {
        ingredientsDisplay.style.display = 'none';
    }
    
    // 更新厨具计数
    document.getElementById('selected-cookware-count').textContent = State.selectedCookware.length;
    
    // 更新厨具标签
    const cookwareDisplay = document.getElementById('selected-cookware-display');
    const cookwareTags = document.getElementById('selected-cookware-tags');
    if (State.selectedCookware.length > 0) {
        cookwareDisplay.style.display = 'block';
        cookwareTags.innerHTML = State.selectedCookware.map(name => `
            <div class="selected-tag">
                ${name}
                <span class="remove-btn" onclick="removeCookware('${name}')">×</span>
            </div>
        `).join('');
    } else {
        cookwareDisplay.style.display = 'none';
    }
}

// 移除食材
function removeIngredient(name) {
    const index = State.selectedIngredients.indexOf(name);
    if (index > -1) {
        State.selectedIngredients.splice(index, 1);
    }
    refreshIngredientsList();
    updateSelectedDisplay();
}

// 移除厨具
function removeCookware(name) {
    const index = State.selectedCookware.indexOf(name);
    if (index > -1) {
        State.selectedCookware.splice(index, 1);
    }
    refreshCookwareList();
    updateSelectedDisplay();
}

// 清空所有选择
function clearAllSelections() {
    State.selectedIngredients = [];
    State.selectedCookware = [];
    State.recommendedRecipes = [];
    refreshIngredientsList();
    refreshCookwareList();
    updateSelectedDisplay();
    document.getElementById('ingredients-results').style.display = 'none';
    document.getElementById('ingredients-empty').style.display = 'none';
}

// 推荐菜谱
function recommendRecipes() {
    if (State.selectedIngredients.length === 0 && State.selectedCookware.length === 0) {
        alert('请先选择食材或厨具');
        return;
    }
    
    const btn = document.getElementById('recommend-btn');
    btn.disabled = true;
    btn.textContent = '推荐中...';
    
    setTimeout(() => {
        const matched = [];
        AppData.recipes.forEach(recipe => {
            let ingredientMatch = 0;
            let cookwareMatch = 0;
            
            State.selectedIngredients.forEach(si => {
                recipe.ingredients.forEach(ri => {
                    if (ri === si || ri.includes(si) || si.includes(ri)) {
                        ingredientMatch++;
                    }
                });
            });
            
            State.selectedCookware.forEach(sc => {
                recipe.cookware.forEach(rc => {
                    if (rc === sc || rc.includes(sc) || sc.includes(rc)) {
                        cookwareMatch++;
                    }
                });
            });
            
            const total = ingredientMatch + cookwareMatch;
            if (total > 0) {
                matched.push({
                    ...recipe,
                    matchScore: ingredientMatch,
                    cookwareScore: cookwareMatch,
                    totalScore: total,
                    matchRatio: ingredientMatch / Math.max(State.selectedIngredients.length, 1)
                });
            }
        });
        
        matched.sort((a, b) => {
            if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
            if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
            return b.matchRatio - a.matchRatio;
        });
        
        State.recommendedRecipes = matched;
        displayRecommendedRecipes();
        
        btn.disabled = false;
        btn.textContent = '推荐菜谱';
    }, 500);
}

// 显示推荐结果
function displayRecommendedRecipes() {
    const resultsSection = document.getElementById('ingredients-results');
    const emptySection = document.getElementById('ingredients-empty');
    const recipesList = document.getElementById('recommended-recipes-list');

    if (State.recommendedRecipes.length === 0) {
        resultsSection.style.display = 'none';
        emptySection.style.display = 'block';
    } else {
        resultsSection.style.display = 'block';
        emptySection.style.display = 'none';
        document.getElementById('results-count').textContent = State.recommendedRecipes.length;

        recipesList.innerHTML = State.recommendedRecipes.map(recipe => createRecipeCard(recipe, true)).join('');
    }
}

// 创建菜谱卡片
function createRecipeCard(recipe, showMatch = false) {
    const matchBadges = showMatch ? `
        ${recipe.matchScore > 0 ? `<span class="match-badge">🥬 食材匹配${recipe.matchScore}个</span>` : ''}
        ${recipe.cookwareScore > 0 ? `<span class="cookware-badge">🍳 厨具匹配${recipe.cookwareScore}个</span>` : ''}
    ` : '';

    return `
        <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
            <div class="recipe-header">
                <div class="recipe-name">${recipe.name}</div>
                <div class="recipe-badges">
                    ${matchBadges}
                    <span class="video-hint" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">📺 教程</span>
                </div>
            </div>

            <div class="recipe-desc">${recipe.description}</div>

            <div class="recipe-info">
                <span class="info-item">⭐ ${recipe.difficulty}</span>
                <span class="info-item">⏰ ${recipe.cookingTime}分钟</span>
                <span class="info-item">🍽️ ${recipe.category}</span>
            </div>

            <div class="recipe-details">
                <div class="detail-section">
                    <div class="detail-label">🥬 食材：</div>
                    <div class="detail-content">
                        ${recipe.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <div class="detail-label">🍳 厨具：</div>
                    <div class="detail-content">
                        ${recipe.cookware.map(cw => `<span class="cookware-tag">${cw}</span>`).join('')}
                    </div>
                </div>
                ${recipe.bilibiliUrl ? `
                <div class="detail-section">
                    <div class="detail-label">📺 视频：</div>
                    <div class="detail-content">
                        <span class="video-link" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">
                            点击观看B站教学视频
                        </span>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// 初始化随机推荐页面
function initRandomPage() {
    const recipes = AppData.recipes;
    document.getElementById('random-recipe-count').textContent = recipes.length;
    document.getElementById('random-empty-count').textContent = recipes.length;

    // 初始化数量选择
    const countOptions = document.querySelectorAll('.count-option');
    countOptions.forEach(option => {
        option.addEventListener('click', () => {
            countOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            State.selectedCount = parseInt(option.dataset.count);
        });
    });

    // 统计分类数据
    const categoryStats = {};
    recipes.forEach(recipe => {
        categoryStats[recipe.category] = (categoryStats[recipe.category] || 0) + 1;
    });

    const statsContainer = document.getElementById('random-category-stats');
    const categories = ['家常菜', '川菜', '素菜', '汤菜'];
    statsContainer.innerHTML = `
        <div class="stat-item">
            <div class="stat-number">${recipes.length}</div>
            <div class="stat-label">总菜谱</div>
        </div>
        ${categories.map(cat => `
            <div class="stat-item">
                <div class="stat-number">${categoryStats[cat] || 0}</div>
                <div class="stat-label">${cat}</div>
            </div>
        `).join('')}
    `;
}

// 获取随机菜谱
function getRandomRecipes() {
    const recipes = AppData.recipes;
    if (recipes.length === 0) {
        alert('暂无菜谱数据');
        return;
    }

    const btn = document.getElementById('random-recommend-btn');
    btn.disabled = true;
    btn.textContent = '推荐中...';

    setTimeout(() => {
        const n = Math.min(State.selectedCount, recipes.length);
        const used = new Set();
        const picked = [];

        while (picked.length < n) {
            const idx = Math.floor(Math.random() * recipes.length);
            if (!used.has(idx)) {
                used.add(idx);
                picked.push(recipes[idx]);
            }
        }

        State.randomRecipes = picked;
        displayRandomRecipes();

        btn.disabled = false;
        btn.textContent = '🎲 开始随机推荐';
    }, 500);
}

// 显示随机推荐结果
function displayRandomRecipes() {
    const resultsSection = document.getElementById('random-results');
    const emptySection = document.getElementById('random-empty');
    const recipesList = document.getElementById('random-recipes-list');

    if (State.randomRecipes.length === 0) {
        resultsSection.style.display = 'none';
        emptySection.style.display = 'block';
    } else {
        resultsSection.style.display = 'block';
        emptySection.style.display = 'none';
        document.getElementById('random-results-count').textContent = State.randomRecipes.length;

        recipesList.innerHTML = State.randomRecipes.map((recipe, index) => {
            return `
                <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
                    <div class="recipe-header">
                        <div class="recipe-number">${index + 1}</div>
                        <div class="recipe-name">${recipe.name}</div>
                        <div class="recipe-badges">
                            <span class="video-hint" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">📺 教程</span>
                        </div>
                    </div>

                    <div class="recipe-desc">${recipe.description}</div>

                    <div class="recipe-info">
                        <span class="info-item">⭐ ${recipe.difficulty}</span>
                        <span class="info-item">⏰ ${recipe.cookingTime}分钟</span>
                        <span class="info-item">🍽️ ${recipe.category}</span>
                    </div>

                    <div class="recipe-details">
                        <div class="detail-section">
                            <div class="detail-label">🥬 食材：</div>
                            <div class="detail-content">
                                ${recipe.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                            </div>
                        </div>
                        <div class="detail-section">
                            <div class="detail-label">🍳 厨具：</div>
                            <div class="detail-content">
                                ${recipe.cookware.map(cw => `<span class="cookware-tag">${cw}</span>`).join('')}
                            </div>
                        </div>
                        ${recipe.bilibiliUrl ? `
                        <div class="detail-section">
                            <div class="detail-label">📺 视频：</div>
                            <div class="detail-content">
                                <span class="video-link" onclick="event.stopPropagation(); openBilibiliVideo('${recipe.bilibiliUrl}')">
                                    点击观看B站教学视频
                                </span>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// 清空随机推荐结果
function clearRandomResults() {
    State.randomRecipes = [];
    document.getElementById('random-results').style.display = 'none';
    document.getElementById('random-empty').style.display = 'block';
}

// 首页快速随机推荐
function getRandomRecipeQuick() {
    const recipes = AppData.recipes;
    if (recipes.length === 0) {
        alert('暂无菜谱数据');
        return;
    }

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    const message = `为您推荐：${randomRecipe.name}\n\n${randomRecipe.description}\n\n⏰ ${randomRecipe.cookingTime}分钟 | ⭐ ${randomRecipe.difficulty}`;

    if (confirm(message + '\n\n点击"确定"查看详情，点击"取消"再来一道')) {
        showRecipeDetail(randomRecipe.id);
    } else {
        getRandomRecipeQuick();
    }
}

// 打开B站视频
function openBilibiliVideo(url) {
    if (!url || url.trim() === '') {
        alert('该菜谱暂无教学视频');
        return;
    }

    const message = `即将跳转到B站观看教学视频，是否继续？\n\n链接：${url}`;

    if (confirm(message)) {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(url).then(() => {
            alert('链接已复制到剪贴板！\n\n正在打开新窗口...');
            window.open(url, '_blank');
        }).catch(() => {
            // 如果复制失败，直接打开
            window.open(url, '_blank');
        });
    }
}

// 显示菜谱详情
function showRecipeDetail(recipeId) {
    const recipe = AppData.recipes.find(r => r.id === recipeId);
    if (!recipe) {
        alert('菜谱不存在');
        return;
    }

    const modal = document.getElementById('recipe-modal');
    const content = document.getElementById('recipe-detail-content');

    content.innerHTML = `
        <div style="padding: 20px 0;">
            <h2 style="color: #667eea; margin-bottom: 15px; font-size: 28px;">${recipe.name}</h2>
            <p style="color: #666; margin-bottom: 20px; font-size: 16px;">${recipe.description}</p>

            <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap;">
                <div style="background: #f0f0f0; padding: 10px 20px; border-radius: 10px;">
                    <strong>难度：</strong>${recipe.difficulty}
                </div>
                <div style="background: #f0f0f0; padding: 10px 20px; border-radius: 10px;">
                    <strong>时间：</strong>${recipe.cookingTime}分钟
                </div>
                <div style="background: #f0f0f0; padding: 10px 20px; border-radius: 10px;">
                    <strong>分类：</strong>${recipe.category}
                </div>
            </div>

            <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin-bottom: 12px; font-size: 20px;">🥬 所需食材</h3>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    ${recipe.ingredients.map(ing => `
                        <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                     color: white; padding: 8px 15px; border-radius: 15px; font-size: 14px;">
                            ${ing}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin-bottom: 12px; font-size: 20px;">🍳 所需厨具</h3>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    ${recipe.cookware.map(cw => `
                        <span style="background: #f5f5f5; color: #666; padding: 8px 15px;
                                     border-radius: 15px; font-size: 14px; border: 2px solid #e0e0e0;">
                            ${cw}
                        </span>
                    `).join('')}
                </div>
            </div>

            ${recipe.bilibiliUrl ? `
            <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 12px; font-size: 20px;">📺 教学视频</h3>
                <button onclick="openBilibiliVideo('${recipe.bilibiliUrl}')"
                        style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                               color: white; border: none; padding: 12px 30px; border-radius: 25px;
                               font-size: 16px; cursor: pointer; font-weight: bold;">
                    观看B站教学视频
                </button>
            </div>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
}

// 关闭菜谱详情
function closeRecipeModal() {
    document.getElementById('recipe-modal').classList.remove('active');
}

// 点击模态框外部关闭
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipe-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRecipeModal();
        }
    });

    // 初始化首页
    initHomePage();
});

