'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showchoose = false;
exports.default = Page({
  data: {
    showchoose: showchoose,
    current: 1,
    images: [{ 'img': 'http://yanxuan.nosdn.127.net/b797b809d72d6ea963f8106cf852ddb5.jpg' }, { 'img': 'http://yanxuan.nosdn.127.net/488310fb5cf19c5f95b8b29582623d21.jpg' }, { 'img': 'http://yanxuan.nosdn.127.net/530c2b239d39cf77a10e521af98f9a5e.jpg' }, { 'img': 'http://yanxuan.nosdn.127.net/d94c1df5b4cabe9a07fc2c35397a09fb.jpg' }]
  },
  onchange: function onchange(e) {
    this.setData({
      current: e.detail.current + 1
    });
  },
  onchoose: function onchoose(e) {
    showchoose = !showchoose;
    this.setData({
      showchoose: showchoose
    });
  },
  onLoad: function onLoad(e) {
    showchoose = false;
  }
});