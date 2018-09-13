"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  attachInfo: function attachInfo() {
    var res = wx.getSystemInfoSync();

    wx.WIN_WIDTH = res.screenWidth;
    wx.WIN_HEIGHT = res.screenHeight;
    wx.IS_IOS = /ios/i.test(res.system);
    wx.IS_ANDROID = /android/i.test(res.system);
    wx.STATUS_BAR_HEIGHT = res.statusBarHeight;
    wx.DEFAULT_HEADER_HEIGHT = 46; // res.screenHeight - res.windowHeight - res.statusBarHeight
    wx.DEFAULT_CONTENT_HEIGHT = res.screenHeight - res.statusBarHeight - wx.DEFAULT_HEADER_HEIGHT;
    wx.IS_APP = true;

    wx.showAlert = function (options) {
      options.showCancel = false;
      wx.showModal(options);
    };

    wx.showConfirm = function (options) {
      wx.showModal(options);
    };
  }
};