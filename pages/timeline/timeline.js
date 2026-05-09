Page({
  data: {
    togetherDays: 4884,
    timeline: [
      {
        date: '2015.09.09',
        title: '相识于校园',
        side: 'left'
      },
      {
        date: '2015.12.25',
        title: '开始于网恋',
        side: 'right'
      },
      {
        date: '2021.05.29',
        title: '订婚在夏天',
        side: 'left'
      },
      {
        date: '2023.10.01',
        title: '结婚在秋天',
        side: 'right'
      },
      {
        date: '2025.02.18',
        title: '共赴婚礼',
        side: 'left'
      }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  }
})
