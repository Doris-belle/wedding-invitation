Page({
  data: {
    couple: '佳佳 & 肖肖',
    weddingDateCn: '乙巳年正月二十一',
    weddingDateEn: 'Feb 18th 2025',
    weddingTime: '12:00 AM',
    location: '绵阳市三台县义景生态园',
    blessingCount: 389,
    showEnvelope: false,
    envelopeOpened: false,
    activeTab: 'photos',
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
    ],
    timeline: [
      {
        date: '2025.02.18 10:00',
        title: '宾客签到',
        text: '亲友陆续到场，领取伴手礼，合影留念。'
      },
      {
        date: '2025.02.18 11:20',
        title: '婚礼仪式',
        text: '佳偶登场，交换誓言，共证良缘。'
      },
      {
        date: '2025.02.18 12:00',
        title: '喜宴开席',
        text: '良辰吉日宜宴客，敬请各位亲朋好友入席。'
      },
      {
        date: '2025.02.18 14:00',
        title: '合影祝福',
        text: '留下团圆笑颜，也留下今天的好天气。'
      }
    ]
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
      showEnvelope: false,
      envelopeOpened: false
    })
  },

  switchTab(event) {
    const activeTab = event.currentTarget.dataset.tab
    this.setData({ activeTab })
  }
})
