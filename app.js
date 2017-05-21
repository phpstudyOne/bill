//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    let that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          if(res.code){
            wx.getUserInfo({
              success: function (result) {
                let data = Object.assign({ code: res.code }, result.userInfo);
                wx.request({
                  url: that.globalData.requestUrl + 'billUser/weChatLogin',
                  data: data,
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function (loginRes) {
                    let latitude;
                    let longitude;
                    wx.getLocation({
                      type: 'wgs84',
                      success: function (locationRes) {
                        latitude = locationRes.latitude;
                        longitude = locationRes.longitude;
                        wx.request({
                          url: that.globalData.requestUrl + 'billUser/weChatLog',
                          data: { user_id: loginRes.data.user_id, latitude: latitude, longitude: longitude},
                          method: 'POST',
                          header: {
                            'content-type': 'application/x-www-form-urlencoded'
                          }
                        });
                      }
                    });
                  }
                });
                that.globalData.userInfo = result.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            });
          }else{
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    requestUrl:'http://phpstudy.duapp1.com/'
  }
})