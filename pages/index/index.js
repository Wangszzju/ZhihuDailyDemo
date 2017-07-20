//index.js
//获取应用实例
var app = getApp()
let { formatDate } = require('../../utils/util')
Page({
  data: {
    storiesList: []
  },
  //事件处理函数：点击修改url，跳转页面
  bindViewTap: function() {

  },
  onLoad: function () {
    var that = this
    // 页面加载后获取知乎数据
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + formatDate(new Date(),''),
      success: res => {
        this.setData({
          storiesList: res.data && res.data.stories
        });
      },
      fail: err => {
        throw(new Error(err));
      }
    })
  },
  onReady(){
    console.info('页面Render结束');
  }
})
