const app = getApp()

Page({
  data: {
    recipeCount: 0,
    selectedCount: 5,
    randomRecipes: [],
    categoryStats: {},
    isLoading: false,
    showEmptyState: true
  },

  onLoad() {
    const recipes = app.globalData.recipes || []
    this.setData({ recipeCount: recipes.length })
    this.calcCategoryStats(recipes)
  },

  calcCategoryStats(recipes) {
    const stats = {}
    recipes.forEach(r => { stats[r.category] = (stats[r.category] || 0) + 1 })
    this.setData({ categoryStats: stats })
  },

  selectCount(e) {
    const count = Number(e.currentTarget.dataset.count)
    this.setData({ selectedCount: count })
  },

  getRandomRecipes() {
    const recipes = app.globalData.recipes || []
    if (!recipes.length) {
      wx.showToast({ title: '暂无菜谱数据', icon: 'none' })
      return
    }
    this.setData({ isLoading: true })

    const n = Math.min(this.data.selectedCount, recipes.length)
    const used = new Set()
    const picked = []
    while (picked.length < n) {
      const idx = Math.floor(Math.random() * recipes.length)
      if (!used.has(idx)) { used.add(idx); picked.push(recipes[idx]) }
    }

    this.setData({ randomRecipes: picked, isLoading: false, showEmptyState: false })
  },

  clearResults() {
    this.setData({ randomRecipes: [], showEmptyState: true })
  },

  // 打开视频
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

  // 跳详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/recipe-detail/recipe-detail?id=${id}` })
  }
})
