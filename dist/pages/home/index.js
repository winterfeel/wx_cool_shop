'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current1: 0,
    banners: [{ 'img': 'https://yanxuan.nosdn.127.net/0e78165e335c1307c79027a745eb3143.jpg' }, { 'img': 'https://yanxuan.nosdn.127.net/102b4b903d01096284e74092a6e6ab95.jpg' }, { 'img': 'https://yanxuan.nosdn.127.net/5986e092916de9fa57e929d67c8bb70c.jpg' }],
    scrolls: [{
      'img': 'http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png',
      'title': '新款线控耳机X21',
      'subtitle': '支持苹果安卓双端',
      'price': '89'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/6af47a715172e766e39c55f4b31ec7db.png',
      'title': '灭蚊魔方',
      'subtitle': '支持苹果安卓双端',
      'price': '89'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/4ed0b3ba344a1a8a050de4f06d178b7d.png',
      'title': '新款线控耳机X21',
      'subtitle': '支持苹果安卓双端',
      'price': '89'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/e9c2901382a1929be07be7c52344d3fc.png',
      'title': '新款线控耳机X21',
      'subtitle': '支持苹果安卓双端',
      'price': '89'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/e3a98766dda2d446dc194d9ac38baf05.png',
      'title': '新款线控耳机X21',
      'subtitle': '支持苹果安卓双端',
      'price': '89'
    }],
    articles: [{
      'img': 'http://yanxuan.nosdn.127.net/056020fae9535417dae4c51140028a8f.jpg',
      'name': '小公举',
      'avatar': 'http://yanxuan.nosdn.127.net/6807fd568e667de9d3c82f76548d35ad.jpg',
      'title': '夏天防蚊秘籍',
      'subtitle': '从此告别蚊虫叮咬～'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/2454faed946c369545854e14cfca0f91.jpg',
      'name': '咖啡陪你',
      'avatar': 'http://yanxuan.nosdn.127.net/ee5d69b43548a0b8f8765216aa2b335b.jpg',
      'title': '今朝有酒今朝醉',
      'subtitle': 'happy的不得了'
    }, {
      'img': 'http://yanxuan.nosdn.127.net/a9bb49a63fd2de0d833b16600cce3837.jpg',
      'name': '杂货铺',
      'avatar': 'http://yanxuan.nosdn.127.net/6807fd568e667de9d3c82f76548d35ad.jpg',
      'title': '家装好物',
      'subtitle': '看到的第一眼就种草'
    }],
    shopitems: [{
      "img": "http://yanxuan.nosdn.127.net/9a5df7c15df022a632eb46a34da95607.png",
      "name": "普罗旺斯红葡萄酒",
      "price": "118"
    }, {
      "img": "http://yanxuan.nosdn.127.net/faf45aee8f6d9bd49a49c97576110013.png",
      "name": "牛皮手提包",
      "price": "389"
    }, {
      "img": "http://yanxuan.nosdn.127.net/07e7bce8a3aefc5bebccfe5d8f35a204.png",
      "name": "景点POLO衫",
      "price": "199"
    }, {
      "img": "http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png",
      "name": "夏日凉席",
      "price": "499"
    }, {
      "img": "http://yanxuan.nosdn.127.net/9a5df7c15df022a632eb46a34da95607.png",
      "name": "普罗旺斯红葡萄酒",
      "price": "118"
    }, {
      "img": "http://yanxuan.nosdn.127.net/faf45aee8f6d9bd49a49c97576110013.png",
      "name": "牛皮手提包",
      "price": "389"
    }, {
      "img": "http://yanxuan.nosdn.127.net/07e7bce8a3aefc5bebccfe5d8f35a204.png",
      "name": "景点POLO衫",
      "price": "199"
    }, {
      "img": "http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png",
      "name": "夏日凉席",
      "price": "499"
    }]
  },
  handleChange1: function handleChange1(e) {
    var index = e.detail.index;
    this.setData({
      current1: index
    });
  }
});