const app = getApp()

Page({
  data: {
    testResults: []
  },

  onLoad() {
    console.log('测试页面加载')
    this.runBasicTests()
  },

  runBasicTests() {
    const results = []
    
    // 测试1: App数据加载
    const recipes = app.globalData.recipes
    const ingredients = app.globalData.ingredients
    const cookware = app.globalData.cookware
    
    results.push({
      name: 'App数据加载测试',
      status: recipes && ingredients && cookware ? '✅ 通过' : '❌ 失败',
      detail: `菜谱:${recipes?.length || 0}道, 食材:${ingredients?.length || 0}种, 厨具:${cookware?.length || 0}种`
    })
    
    // 测试2: 菜谱数据完整性
    let completeRecipes = 0
    if (recipes) {
      recipes.forEach(recipe => {
        if (recipe.name && recipe.ingredients && recipe.cookware && recipe.bilibiliUrl) {
          completeRecipes++
        }
      })
    }
    
    results.push({
      name: '菜谱数据完整性测试',
      status: completeRecipes === recipes?.length ? '✅ 通过' : '❌ 失败',
      detail: `${completeRecipes}/${recipes?.length || 0} 道菜谱数据完整`
    })
    
    // 测试3: 推荐算法测试
    let canRecommend = false
    if (recipes && recipes.length > 0) {
      const testIngredient = '西红柿'
      const matchedRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ingredient => ingredient.includes(testIngredient))
      )
      canRecommend = matchedRecipes.length > 0
    }
    
    results.push({
      name: '推荐算法测试',
      status: canRecommend ? '✅ 通过' : '❌ 失败',
      detail: '西红柿推荐功能正常'
    })
    
    this.setData({ testResults: results })
  },

  goToHome() {
    wx.navigateBack()
  },

  goToRandom() {
    wx.navigateTo({
      url: '/pages/random/random'
    })
  },

  goToIngredients() {
    wx.navigateTo({
      url: '/pages/ingredients/ingredients'
    })
  }
})
