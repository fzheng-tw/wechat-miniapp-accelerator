import {getNewToken, verifyToken, storeToken, getStoredToken} from './utils/token'

App({
  
  loginAndInitToken() {
    const self = this;
    wx.login({
      success: ({code}) => {
        getNewToken(code).then((response)=>{
          self.globalData.token = response.data.token;
          storeToken(response.data.token)
        });
      },
      fail: () => {
        console.error('fail to login');
      }
    });
  },

  onShow() {
    const self = this;

    wx.checkSession({
      success: function () {
        verifyToken(self.globalData.token || getStoredToken()).catch((error) => {
          self.loginAndInitToken();
        });
      },

      fail: function() {
        self.loginAndInitToken();
      }
    });
  },

  globalData: {
    token: null
  },

})
