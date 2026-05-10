Page({
  data: {
    couple: '佳佳 & 肖肖',
    weddingDateCn: '乙巳年八月初六',
    weddingDateEn: 'Sep 16th 2026',
    weddingTime: '12:00 AM',
    location: '河南市新乡县世纪情缘酒店',
    blessingCount: 389,
    showSplash: true,
    showEnvelope: false,
    envelopeOpened: false,
    envelopeClosing: false,
    shareImage: '/src/images/photo.jpg',
    coupleImage: '/src/images/wed-cp.png',
    confetti: [
      { left: 6, delay: 0, color: 'pink', shape: 'strip' },
      { left: 12, delay: 260, color: 'blue', shape: 'dot' },
      { left: 18, delay: 120, color: 'yellow', shape: 'strip' },
      { left: 25, delay: 420, color: 'green', shape: 'dot' },
      { left: 31, delay: 80, color: 'purple', shape: 'strip' },
      { left: 38, delay: 320, color: 'orange', shape: 'dot' },
      { left: 45, delay: 170, color: 'pink', shape: 'strip' },
      { left: 52, delay: 520, color: 'blue', shape: 'dot' },
      { left: 59, delay: 60, color: 'yellow', shape: 'strip' },
      { left: 66, delay: 390, color: 'green', shape: 'dot' },
      { left: 73, delay: 210, color: 'purple', shape: 'strip' },
      { left: 80, delay: 470, color: 'orange', shape: 'dot' },
      { left: 87, delay: 150, color: 'pink', shape: 'strip' },
      { left: 94, delay: 350, color: 'blue', shape: 'dot' }
    ],
    photos: [
      {
        id: 1,
        src: '/src/images/photo.jpg'
      },
      {
        id: 2,
        src: '/src/images/photo.jpg'
      },
      {
        id: 3,
        src: '/src/images/photo.jpg'
      },
      {
        id: 4,
        src: '/src/images/photo.jpg'
      }
    ]
  },

  onLoad() {
    const app = getApp()
    const hasEnteredHome = app.globalData.hasEnteredHome

    this.setData({
      showSplash: !hasEnteredHome
    })

    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        hidden: this.data.showSplash
      })
    }
  },

  openEnvelope() {
    this.setData({
      showEnvelope: true,
      envelopeOpened: false,
      envelopeClosing: false
    })
  },

  revealInvitation() {
    this.setData({
      envelopeOpened: true
    })
  },

  closeEnvelope() {
    this.setData({
      envelopeOpened: false,
      envelopeClosing: true
    })

    setTimeout(() => {
      getApp().globalData.hasEnteredHome = true

      this.setData({
        showSplash: false,
        showEnvelope: false,
        envelopeClosing: false
      })

      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0,
          hidden: false
        })
      }
    }, 1250)
  },

  onShareAppMessage() {
    return {
      title: '我们结婚啦',
      path: '/pages/index/index',
      imageUrl: this.data.shareImage
    }
  },

  onShareTimeline() {
    return {
      title: '我们结婚啦',
      query: '',
      imageUrl: this.data.shareImage
    }
  }
})
