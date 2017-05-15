//index.js
//获取应用实例
let app = getApp();
Page({
  data: {
    motto: 'Hello World!',
    userInfo: {},
    localtion:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewLocation: function () {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  bindViewRead: function () {
    wx.navigateTo({
      url: '../read_book/miaojiang'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    let that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
    wx.setNavigationBarTitle({
      title: '博客资讯'
    }),
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        let speed = res.speed;
        let accuracy = res.accuracy;
        that.setData({
          localtion: { latitude, longitude,speed, accuracy}
        })
      }
    })
  }
});
