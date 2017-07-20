//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数：点击修改url，跳转页面
  bindViewTap: function() {

  },
  onLoad: function () {
    console.info('加载完成了你这个逗比赶紧去拿数据')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady(){
    console.info('页面Render结束');
  }
})
