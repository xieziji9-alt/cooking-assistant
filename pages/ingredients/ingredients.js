const app = getApp()

Page({
  data: {
    // 选择状态
    currentIngredientCategory: '蔬菜',
    currentCookwareCategory: '锅具',
    currentIngredients: [],
    currentCookware: [],

    selectedIngredients: [],
    selectedCookware: [],

    // 推荐结果
    isLoading: false,
    recommendedRecipes: [],
    showEmptyState: false
  },

  onLoad() {
    this.refreshLists()
  },

  // 刷新当前分类列表
  refreshLists() {
    const { currentIngredientCategory, currentCookwareCategory } = this.data
    const ingredients = app.globalData.ingredients.filter(i => i.category === currentIngredientCategory)
    const cookware = app.globalData.cookware.filter(c => c.category === currentCookwareCategory)
    this.setData({ currentIngredients: ingredients, currentCookware: cookware })
  },

  // 切换食材分类
  switchIngredientCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ currentIngredientCategory: category }, () => this.refreshLists())
  },

  // 切换厨具分类
  switchCookwareCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ currentCookwareCategory: category }, () => this.refreshLists())
  },

  // 勾选/取消食材
  toggleIngredient(e) {
    const name = e.currentTarget.dataset.name
    let list = [...this.data.selectedIngredients]
    if (list.includes(name)) {
      list = list.filter(n => n !== name)
    } else {
      list.push(name)
    }
    this.setData({ selectedIngredients: list })
  },

  // 勾选/取消厨具
  toggleCookware(e) {
    const name = e.currentTarget.dataset.name
    let list = [...this.data.selectedCookware]
    if (list.includes(name)) {
      list = list.filter(n => n !== name)
    } else {
      list.push(name)
    }
    this.setData({ selectedCookware: list })
  },

  // 移除已选
  removeIngredient(e) {
    const name = e.currentTarget.dataset.name
    this.setData({ selectedIngredients: this.data.selectedIngredients.filter(n => n !== name) })
  },
  removeCookware(e) {
    const name = e.currentTarget.dataset.name
    this.setData({ selectedCookware: this.data.selectedCookware.filter(n => n !== name) })
  },

  // 清空
  clearAll() {
    this.setData({
      selectedIngredients: [],
      selectedCookware: [],
      recommendedRecipes: [],
      showEmptyState: false
    })
  },

  // 推荐
  recommendRecipes() {
    const { selectedIngredients, selectedCookware } = this.data
    const all = app.globalData.recipes || []

    if (selectedIngredients.length === 0 && selectedCookware.length === 0) {
      wx.showToast({ title: '请先选择食材或厨具', icon: 'none' })
      return
    }

    this.setData({ isLoading: true })

    const matched = []
    all.forEach(recipe => {
      let ingredientMatch = 0
      let cookwareMatch = 0

      selectedIngredients.forEach(si => {
        recipe.ingredients.forEach(ri => {
          if (ri === si || ri.includes(si) || si.includes(ri)) ingredientMatch++
        })
      })

      selectedCookware.forEach(sc => {
        recipe.cookware.forEach(rc => {
          if (rc === sc || rc.includes(sc) || sc.includes(rc)) cookwareMatch++
        })
      })

      const total = ingredientMatch + cookwareMatch
      if (total > 0) {
        matched.push({
          ...recipe,
          matchScore: ingredientMatch,
          cookwareScore: cookwareMatch,
          totalScore: total,
          matchRatio: ingredientMatch / Math.max(selectedIngredients.length, 1)
        })
      }
    })

    matched.sort((a, b) => {
      if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore
      if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore
      return b.matchRatio - a.matchRatio
    })

    this.setData({
      isLoading: false,
      recommendedRecipes: matched,
      showEmptyState: matched.length === 0
    })
  },

  // 跳转详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/recipe-detail/recipe-detail?id=${id}` })
  },

  // 打开B站
  openBilibiliVideo(e) {
    const url = e.currentTarget.dataset.url
    console.log('点击B站链接，URL:', url)

    if (!url || url.trim() === '') {
      wx.showToast({
        title: '该菜谱暂无教学视频',
        icon: 'none',
        duration: 2000
      })
      return
    }

    wx.showModal({
      title: '跳转提示',
      content: '即将跳转到B站观看教学视频，是否继续？\n\n链接：' + url,
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: url,
            success() {
              wx.showToast({
                title: '链接已复制到剪贴板，请在浏览器中粘贴打开',
                icon: 'success',
                duration: 3000
              })
            },
            fail() {
              wx.showToast({
                title: '复制失败，请手动复制链接',
                icon: 'none'
              })
            }
          })
        }
      }
    })
  },

  // 去随机
  goToRandom() {
    wx.switchTab({ url: '/pages/random/random' })
  }
})
