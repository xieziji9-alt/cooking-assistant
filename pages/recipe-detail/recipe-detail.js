// pages/recipe-detail/recipe-detail.js
const app = getApp()

Page({
  data: {
    recipe: null,
    ingredientsList: [],
    cookwareList: []
  },

  onLoad(options) {
    const recipeId = parseInt(options.id)
    this.loadRecipeDetail(recipeId)
  },

  loadRecipeDetail(recipeId) {
    const allRecipes = app.globalData.recipes
    const recipe = allRecipes.find(r => r.id === recipeId)
    
    if (recipe) {
      // 将食材和厨具转换为显示格式
      const ingredientsList = recipe.ingredients.map((item, index) => ({
        id: index,
        name: item,
        category: this.getIngredientCategory(item)
      }))
      
      const cookwareList = recipe.cookware.map((item, index) => ({
        id: index,
        name: item,
        type: this.getCookwareType(item)
      }))
      
      this.setData({
        recipe,
        ingredientsList,
        cookwareList
      })
    } else {
      wx.showToast({
        title: '菜谱不存在',
        icon: 'error'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }
  },

  getIngredientCategory(ingredientName) {
    const allIngredients = app.globalData.ingredients
    const ingredient = allIngredients.find(item => item.name === ingredientName)
    return ingredient ? ingredient.category : '其他'
  },

  getCookwareType(cookwareName) {
    const allCookware = app.globalData.cookware
    const cookware = allCookware.find(item => item.name === cookwareName)
    return cookware ? cookware.type : '其他'
  },

  openBilibiliVideo() {
    const url = this.data.recipe.bilibiliUrl
    if (url) {
      wx.showModal({
        title: '跳转提示',
        content: '即将跳转到B站观看教学视频，是否继续？',
        success(res) {
          if (res.confirm) {
            wx.setClipboardData({
              data: url,
              success() {
                wx.showToast({
                  title: '链接已复制，请在浏览器中打开',
                  icon: 'success',
                  duration: 2000
                })
              }
            })
          }
        }
      })
    }
  },

  goBack() {
    wx.navigateBack()
  }
})
