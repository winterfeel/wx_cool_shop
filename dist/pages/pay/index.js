'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
exports.default = Page({
  data: {
    goodsList: [{
      pic: "http://yanxuan.nosdn.127.net/bb54b4e6a7f9cce92c24dd51a6485646.png?imageView&thumbnail=750x0&quality=75",
      name: "新款线控耳机",
      price: "119",
      label: "支持苹果安卓双端",
      number: "2"
    }, {
      pic: "http://yanxuan.nosdn.127.net/fcbfea414e3a2e1aa941574fb40cbd4d.png?imageView&amp;thumbnail=750x0&amp;quality=75",
      name: "黑色大理石纹旅行箱",
      price: "449",
      label: "出行有格调",
      number: "1"
    }],
    isNeedLogistics: 0, // 是否需要物流信息
    allGoodsPrice: 0,
    yunPrice: 0,
    allGoodsAndYunPrice: 0,
    goodsJsonStr: "",
    hasNoCoupons: true,
    coupons: [],
    youhuijine: 0, //优惠券金额
    curCoupon: null // 当前选择使用的优惠券
  },
  onShow: function onShow() {
    var that = this;
    var shopList = [];

    //购物车下单
    var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
    that.data.kjId = shopCarInfoMem.kjId;
    if (shopCarInfoMem && shopCarInfoMem.shopList) {
      // shopList = shopCarInfoMem.shopList
      shopList = shopCarInfoMem.shopList.filter(function (entity) {
        return entity.active;
      });
    }

    // that.setData({
    //   goodsList: shopList,
    // });
    that.initShippingAddress();
  },

  onLoad: function onLoad(e) {
    var that = this;
    //显示收货地址标识
    that.setData({
      isNeedLogistics: 1
    });
  },

  getDistrictId: function getDistrictId(obj, aaa) {
    if (!obj) {
      return "";
    }
    if (!aaa) {
      return "";
    }
    return aaa;
  },

  createOrder: function createOrder(e) {
    wx.showLoading();
    var that = this;
    var loginToken = wx.getStorageSync('token'); // 用户登录 token
    var remark = ""; // 备注信息
    if (e) {
      remark = e.detail.value.remark; // 备注信息
    }

    var postData = {
      token: loginToken,
      goodsJsonStr: that.data.goodsJsonStr,
      remark: remark
    };
    if (that.data.kjId) {
      postData.kjid = that.data.kjId;
    }
    if (that.data.isNeedLogistics > 0) {
      if (!that.data.curAddressData) {
        wx.hideLoading();
        wx.showModal({
          title: '错误',
          content: '请先设置您的收货地址！',
          showCancel: false
        });
        return;
      }
      postData.provinceId = that.data.curAddressData.provinceId;
      postData.cityId = that.data.curAddressData.cityId;
      if (that.data.curAddressData.districtId) {
        postData.districtId = that.data.curAddressData.districtId;
      }
      postData.address = that.data.curAddressData.address;
      postData.linkMan = that.data.curAddressData.linkMan;
      postData.mobile = that.data.curAddressData.mobile;
      postData.code = that.data.curAddressData.code;
    }
    if (that.data.curCoupon) {
      postData.couponId = that.data.curCoupon.id;
    }
    if (!e) {
      postData.calculate = "true";
    }
  },
  initShippingAddress: function initShippingAddress() {
    var that = this;
    that.setData({
      curAddressData: null
    });
  },
  addAddress: function addAddress() {
    wx.navigateTo({
      url: "../address-add/index"
    });
  },
  selectAddress: function selectAddress() {
    wx.navigateTo({
      url: "/pages/select-address/index"
    });
  }

});