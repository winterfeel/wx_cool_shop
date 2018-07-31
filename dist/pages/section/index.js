'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current: 0,
    tabStyle: {
      'color': '#333',
      'width:': '80px'
    },
    activeTabStyle: {
      'color': '#b5262d',
      'border-right': '1px solid #b5262d'
    },
    tabItems: [{ name: '热门' }, { name: '居家' }, { name: '服饰' }, { name: '电器' }, { name: '饮食' }],
    height: wx.DEFAULT_CONTENT_HEIGHT,
    tabContents: [{
      cover: 'http://yanxuan.nosdn.127.net/0fd85ac68bc25288ad3750f5357ab9ae.jpg',
      subCategoryList: [{
        categoryName: '凉席',
        imageUrl: 'http://yanxuan.nosdn.127.net/41384c389e80d6437324616e346f3294.png'
      }, {
        categoryName: '箱包',
        imageUrl: 'http://yanxuan.nosdn.127.net/b560fc3ad3fa5cce264a8e9887ae043f.png'
      }, {
        categoryName: '女装',
        imageUrl: 'http://yanxuan.nosdn.127.net/4bac465679a525e3191c3f12074aabb3.png'
      }, {
        categoryName: '男装',
        imageUrl: 'http://yanxuan.nosdn.127.net/783a899d7c13340bcc7dfc2434346bfa.png'
      }, {
        categoryName: '养生',
        imageUrl: 'http://yanxuan.nosdn.127.net/bb950edc2e8656d301dcbae053e47d07.png'
      }]
    }, {
      cover: 'http://yanxuan.nosdn.127.net/c1adbc77984d504e48329dcc5f742905.jpg',
      subCategoryList: [{
        categoryName: '床品件套',
        imageUrl: 'http://yanxuan.nosdn.127.net/d77f8cd37529d4fc10932aaf708663bc.png'
      }, {
        categoryName: '家具',
        imageUrl: 'http://yanxuan.nosdn.127.net/16b936a40daf74eb36fdefdd361c88b3.png'
      }, {
        categoryName: '灯具',
        imageUrl: 'http://yanxuan.nosdn.127.net/f702dc399d14d4e1509d5ed6e57acd19.png'
      }, {
        categoryName: '饰品',
        imageUrl: 'http://yanxuan.nosdn.127.net/227a266e41a477fd28a405b9953ba640.png'
      }, {
        categoryName: '宠物',
        imageUrl: 'http://yanxuan.nosdn.127.net/6ee564543f7cbc140794e68c9ac0e17e.png'
      }]
    }, {
      cover: 'http://yanxuan.nosdn.127.net/2b9b15a7a5a092bbae16a40d00bdd89e.jpg',
      subCategoryList: [{
        categoryName: 'T恤',
        imageUrl: 'http://yanxuan.nosdn.127.net/505c9a5a794b79e85fef4654722b3447.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '裤装',
        imageUrl: 'http://yanxuan.nosdn.127.net/8752be5bb8de1aaffe128f22788ece58.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '衬衫',
        imageUrl: 'http://yanxuan.nosdn.127.net/a6d2700bc2a09c2498a91a06c1df2722.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '内衣裤',
        imageUrl: 'http://yanxuan.nosdn.127.net/20992ee15f59539d532d13161db233dc.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '外套',
        imageUrl: 'http://yanxuan.nosdn.127.net/aa41311c497e1da88d94dc4ac4335acb.png?imageView&quality=85&thumbnail=144x144'
      }]
    }, {
      cover: 'http://yanxuan.nosdn.127.net/65ea81d2b32a28344fc2b7e2888912f5.jpg',
      subCategoryList: [{
        categoryName: '生活电器',
        imageUrl: 'http://yanxuan.nosdn.127.net/77b221c72cd9009a7272af1b251c6ad4.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '厨房电器',
        imageUrl: 'http://yanxuan.nosdn.127.net/c09d784ba592e4fadabbaef6b2e95a95.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '个人护理',
        imageUrl: 'http://yanxuan.nosdn.127.net/f63241ed305df78b322daf2a6e33094a.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '影音娱乐',
        imageUrl: 'http://yanxuan.nosdn.127.net/72c28d827fb7d28f94932bcf57b87702.png?imageView&quality=85&thumbnail=144x144'
      }]
    }, {
      cover: 'http://yanxuan.nosdn.127.net/93305ac491667331fec0ec81174a67de.jpg',
      subCategoryList: [{
        categoryName: '零食',
        imageUrl: 'http://yanxuan.nosdn.127.net/418f86049f957108a31ad55cec42c349.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '茗茶',
        imageUrl: 'http://yanxuan.nosdn.127.net/cfeb623929f3936cc882ffc6a9a2e927.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '酒水',
        imageUrl: 'http://yanxuan.nosdn.127.net/aaa7ed7fdadee5278a94ac17b10c38ac.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '甜品',
        imageUrl: 'http://yanxuan.nosdn.127.net/20cbd362df56344b6d2f712b0111b707.png?imageView&quality=85&thumbnail=144x144'
      }, {
        categoryName: '生鲜',
        imageUrl: 'http://yanxuan.nosdn.127.net/b7d34a1ac4f59fccd76c6c1b1fd43d7e.png?imageView&quality=85&thumbnail=144x144'
      }]
    }],
    tabContentData: []
  },
  onReady: function onReady() {
    this.setData({
      tabContentData: this.data.tabContents[0]
    });
  },
  handleChange: function handleChange(e) {
    console.log(e);
    var index = e.detail.index;
    this.setData({
      current: index,
      tabContentData: this.data.tabContents[index]
    });
  },

  onclick: function onclick(e) {
    wx.navigateTo({
      url: '../list/index'
    });
  }
});