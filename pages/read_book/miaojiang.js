// miaojiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var title = '';
    wx.request({
      url: 'http://www.miaojianggushi2.cc/1558.html', 
      data: {
      },
      header: {
        'content-type': 'application/html'
      },
      success: function (res) {
        var re = /<title>(.*)<\/title>/
        re.test(res.data);
        title = RegExp.$1;
        res = /<div class="bookcontent clearfix" id= "BookText" > (.*)< br \/><br \/><div id="i_ad_t3">/
        res.test(res.data);
        var content = RegExp.$1;
        console.log(content);
        that.setData({
          book: {
            title: title,
            content: content
          }
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})