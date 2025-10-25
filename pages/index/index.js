const app = getApp()

Page({
  data: {
    recipeCount: 0,
    popularRecipes: [],
    categoryStats: {}
  },

  onLoad() {
    this.initData()
  },

  onShow() {
    this.initData()
  },

  // 初始化数据
  initData() {
    const recipes = app.globalData.recipes
    
    // 设置菜谱总数
    this.setData({
      recipeCount: recipes.length
    })

    // 获取热门菜谱（前6道）
    const popularRecipes = recipes.slice(0, 6)
    this.setData({
      popularRecipes: popularRecipes
    })

    // 统计分类数据
    const categoryStats = {}
    recipes.forEach(recipe => {
      if (categoryStats[recipe.category]) {
        categoryStats[recipe.category]++
      } else {
        categoryStats[recipe.category] = 1
      }
    })
    
    this.setData({
      categoryStats: categoryStats
    })

    console.log('首页数据初始化完成', {
      recipeCount: recipes.length,
      categoryStats: categoryStats
    })
  },

  // 跳转到食材推荐页面
  goToIngredients() {
    wx.switchTab({
      url: '/pages/ingredients/ingredients'
    })
  },

  // 跳转到随机推荐页面
  goToRandom() {
    wx.switchTab({
      url: '/pages/random/random'
    })
  },

  // 跳转到测试功能页面
  goToTest() {
    wx.switchTab({
      url: '/pages/test/test'
    })
  },

  // 跳转到菜谱详情页面
  goToRecipeDetail(e) {
    const recipeId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${recipeId}`
    })
  },

  // 随机推荐一道菜
  getRandomRecipe() {
    const recipes = app.globalData.recipes
    if (recipes.length === 0) {
      wx.showToast({
        title: '暂无菜谱数据',
        icon: 'none'
      })
      return
    }

    const randomIndex = Math.floor(Math.random() * recipes.length)
    const randomRecipe = recipes[randomIndex]
    
    wx.showModal({
      title: '🎲 随机推荐',
      content: `为您推荐：${randomRecipe.name}\n\n${randomRecipe.description}\n\n⏰ ${randomRecipe.cookingTime}分钟 | ⭐ ${randomRecipe.difficulty}`,
      confirmText: '查看详情',
      cancelText: '再来一道',
      success: (res) => {
        if (res.confirm) {
          // 查看详情
          wx.navigateTo({
            url: `/pages/recipe-detail/recipe-detail?id=${randomRecipe.id}`
          })
        } else if (res.cancel) {
          // 再来一道
          this.getRandomRecipe()
        }
      }
    })
  }
})
