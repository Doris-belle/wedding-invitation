Page({
  data: {
    couple: '多多 & 慢慢',
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
    musicSrc: '/src/audio/elegant-wedding.wav',
    confetti: [
      { id: 1, left: 4, drift: -18, delay: 0, color: 'pink', shape: 'strip' },
      { id: 2, left: 8, drift: 22, delay: 120, color: 'blue', shape: 'dot' },
      { id: 3, left: 12, drift: -8, delay: 240, color: 'yellow', shape: 'strip' },
      { id: 4, left: 16, drift: 28, delay: 80, color: 'green', shape: 'dot' },
      { id: 5, left: 20, drift: -24, delay: 360, color: 'purple', shape: 'strip' },
      { id: 6, left: 24, drift: 12, delay: 180, color: 'orange', shape: 'dot' },
      { id: 7, left: 28, drift: -16, delay: 460, color: 'pink', shape: 'strip' },
      { id: 8, left: 32, drift: 26, delay: 60, color: 'blue', shape: 'dot' },
      { id: 9, left: 36, drift: -28, delay: 280, color: 'yellow', shape: 'strip' },
      { id: 10, left: 40, drift: 18, delay: 420, color: 'green', shape: 'dot' },
      { id: 11, left: 44, drift: -10, delay: 130, color: 'purple', shape: 'strip' },
      { id: 12, left: 48, drift: 30, delay: 520, color: 'orange', shape: 'dot' },
      { id: 13, left: 52, drift: -20, delay: 210, color: 'pink', shape: 'strip' },
      { id: 14, left: 56, drift: 14, delay: 390, color: 'blue', shape: 'dot' },
      { id: 15, left: 60, drift: -26, delay: 40, color: 'yellow', shape: 'strip' },
      { id: 16, left: 64, drift: 24, delay: 310, color: 'green', shape: 'dot' },
      { id: 17, left: 68, drift: -14, delay: 500, color: 'purple', shape: 'strip' },
      { id: 18, left: 72, drift: 20, delay: 160, color: 'orange', shape: 'dot' },
      { id: 19, left: 76, drift: -30, delay: 340, color: 'pink', shape: 'strip' },
      { id: 20, left: 80, drift: 10, delay: 230, color: 'blue', shape: 'dot' },
      { id: 21, left: 84, drift: -22, delay: 470, color: 'yellow', shape: 'strip' },
      { id: 22, left: 88, drift: 28, delay: 90, color: 'green', shape: 'dot' },
      { id: 23, left: 92, drift: -12, delay: 300, color: 'purple', shape: 'strip' },
      { id: 24, left: 96, drift: 18, delay: 560, color: 'orange', shape: 'dot' },
      { id: 25, left: 6, drift: 36, delay: 620, color: 'yellow', shape: 'dot' },
      { id: 26, left: 18, drift: -34, delay: 700, color: 'blue', shape: 'strip' },
      { id: 27, left: 42, drift: 34, delay: 650, color: 'pink', shape: 'dot' },
      { id: 28, left: 58, drift: -36, delay: 740, color: 'green', shape: 'strip' },
      { id: 29, left: 74, drift: 32, delay: 670, color: 'purple', shape: 'dot' },
      { id: 30, left: 90, drift: -32, delay: 760, color: 'orange', shape: 'strip' }
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

  audio: null,

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

    if (!this.data.showSplash) {
      this.playMusic()
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

      this.playMusic()
    }, 1250)
  },

  playMusic() {
    if (!this.audio) {
      this.audio = wx.createInnerAudioContext()
      this.audio.src = this.data.musicSrc
      this.audio.loop = true
      this.audio.volume = 0.32
    }

    this.audio.play()
  },

  onHide() {
    if (this.audio) {
      this.audio.pause()
    }
  },

  onUnload() {
    if (this.audio) {
      this.audio.destroy()
      this.audio = null
    }
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
