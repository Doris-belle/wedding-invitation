Component({
  data: {
    selected: 0,
    color: '#c7c3c3',
    selectedColor: '#171313',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '婚纱照',
        icon: 'photo'
      },
      {
        pagePath: '/pages/timeline/timeline',
        text: '时间轴',
        icon: 'time'
      }
    ]
  },

  methods: {
    switchTab(event) {
      const index = event.currentTarget.dataset.index
      const item = this.data.list[index]

      wx.switchTab({
        url: item.pagePath
      })
    }
  }
})
