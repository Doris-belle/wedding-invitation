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
    envelopeClosing: false,
    shareImage: '/src/images/photo.jpg',
    photos: [
      {
        src: '/src/images/photo.jpg',
        title: '婚纱照 01'
      },
      {
        src: '/src/images/photo.jpg',
        title: '婚纱照 02'
      },
      {
        src: '/src/images/photo.jpg',
        title: '婚纱照 03'
      },
      {
        src: '/src/images/photo.jpg',
        title: '婚纱照 04'
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
