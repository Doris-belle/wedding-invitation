Page({
  data: {
    couple: '佳佳 & 肖肖',
    weddingDateCn: '乙巳年正月二十一',
    weddingDateEn: 'Feb 18th 2025',
    weddingTime: '12:00 AM',
    location: '绵阳市三台县义景生态园',
    blessingCount: 389,
    showSplash: true,
    showEnvelope: false,
    envelopeOpened: false,
    photos: [
      {
        src: '/src/images/photo.jpg',
        title: '初见欢喜',
        desc: '从并肩而立，到余生同行。'
      },
      {
        src: '/src/images/photo.jpg',
        title: '今日良辰',
        desc: '把所有温柔，写进这一天。'
      },
      {
        src: '/src/images/photo.jpg',
        title: '携手白首',
        desc: '山水一程，三生有幸。'
      }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  openEnvelope() {
    this.setData({
      showEnvelope: true,
      envelopeOpened: false
    })
  },

  revealInvitation() {
    this.setData({
      envelopeOpened: true
    })
  },

  closeEnvelope() {
    this.setData({
      showSplash: false,
      showEnvelope: false,
      envelopeOpened: false
    })
  }
})
