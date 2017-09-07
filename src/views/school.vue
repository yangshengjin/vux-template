<template>
  <div class="infomation-box">
    <!-- 轮播图片 -->
      <swiper class="swiper-box" 
              dots-position="center" 
              dots-class="com-dot" 
              auto 
              :show-desc-mask="false"  
              :loop="true" 
              :list="bannerList"></swiper>
     <!-- 切换区域块 -->
     <button-tab class="tab-content">
        <button-tab-item @on-item-click="changeIndex(1)" :selected = "mode == 1">学习</button-tab-item>
        <button-tab-item @on-item-click="changeIndex(2)" :selected = "mode == 2">直播</button-tab-item>
        <button-tab-item @on-item-click="changeIndex(3)" :selected = "mode == 3">测试</button-tab-item>
    </button-tab> 

    <view-box class="main-content" style="position:absolute;top:0;left:0; width:100%;height:100%"  body-padding-top="220px" body-padding-bottom="60px" v-scrollMonitor.func="getScrollLoad">
      <item-two :list="dataList" v-if="mode == 1"></item-two>
      <video-item :list="videoList" v-else-if="mode == 2"></video-item>
      <test-item :list="testList" v-else-if="mode == 3"></test-item>
      <!-- 加载信息 -->
      <load-more v-show="loading" :show-loading="true" tip="正在加载"></load-more>
      <load-more v-show="noData" :show-loading="false" tip="暂无数据" background-color="#f2f2f2"></load-more>
    </view-box> 
  </div>
</template>

<script>
import { ButtonTab, ButtonTabItem, Swiper, ViewBox, SwiperItem, LoadMore } from 'vux'
import ItemTwo from '../components/ItemTwo.vue'
import VideoItem from '../components/VideoItem.vue'
import TestItem from '../components/TestItem.vue'

export default {
  name: 'main',
  components: {
    VideoItem, Swiper, SwiperItem, ViewBox, ButtonTab, ButtonTabItem, ItemTwo, LoadMore, TestItem
  },
  computed: {
  },
  created: () => {
    console.log(this.$store)
  },
  mounted: () => {
  },
  data () {
    return {
      // 切换模式
      mode: 1,
      loading: false,
      noData: false,
      // 轮播
      bannerList: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg'
          // title: ''
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg'
        }
      ],
      dataList: [
        {
          id: 1,
          title: '党员发展基本知识',
          status: 1
        },
        {
          id: 11,
          title: '党员基本知识',
          status: 2
        },
        {
          id: 13,
          title: '党员基本知识',
          status: 2
        },
        {
          id: 12,
          title: '党员基本知识',
          status: 2
        },
        {
          id: 3,
          title: '党员基本知识',
          status: 2
        }
      ],
      videoList: [
        {
          id: 1,
          avatar: 'https://static.vux.li/demo/1.jpg',
          title: '一带一路',
          name: '张三',
          status: 1,
          people: 33,
          time: '2013-10-20'
        },
        {
          id: 2,
          avatar: 'https://static.vux.li/demo/1.jpg',
          title: '一带一路讲座一带一路讲座一带一路讲座一带一路讲座',
          name: '张三',
          status: 2,
          people: 33,
          time: '2013-10-20'
        },
        {
          id: 3,
          avatar: 'https://static.vux.li/demo/1.jpg',
          title: '一带一路讲座一带一路讲座一带一路讲座一带一路讲座',
          name: '张三',
          status: 3,
          people: 33,
          time: '2013-10-20'
        }
      ],
      testList: [
        {
          id: 1,
          avatar: 'https://static.vux.li/demo/1.jpg',
          title: '毛邓精选题库',
          stime: '09-10 13:00',
          etime: '10-10 14:00',
          from: '党支部'
        },
        {
          id: 2,
          title: '毛邓精选题库',
          avatar: 'https://static.vux.li/demo/1.jpg',
          stime: '09-10 13:00',
          etime: '10-10 14:00',
          from: '党支部'
        }
      ]
    }
  },
  methods: {
    // 设置滚动
    getScrollLoad () {
      // to do
      this.loading = true
    },
    // 切换模式
    changeIndex (e) {
      this.mode = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

  .infomation-box {
    background: #fff;
    height: 100%;

    .tab-content {
      position:fixed;
      top: 180px;
      border-bottom: 2px solid #f3f3f3;
      width:100%;
      z-index:2;
      display: flex;
      align-items: center;
      height: 40px;
      background: #fff;
      & > a {
        background: #fff;
      }

      & > a.vux-button-tab-item-first:after {
        border: none;
        border-radius: 0;
        
      }
       & > a.vux-button-tab-item:after {
        border-right: 0px solid #fff;
        border-top: 0px solid #fff;
        border-bottom: 0px solid #fff;
        border-left: none;
        color: #333;
        
      }
      & > a.vux-button-tab-item-first {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
       & > a.vux-button-tab-item-last {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      & > a.vux-button-group-current {
        background: #fff;
        position: relative;
        top: 2px;
        color: #C91F1F;
        height: 38px;
        line-height: 38px;
        border-bottom: 2px solid #C91F1F;
      }
      & > a.vux-button-tab-item-last:after {
        border: none;
        border-radius: 0;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }

    .swiper-demo-img img {
      width: 100%;
    }
    .swiper-box {
      width:100%;
      height: 180px;
      position: absolute;
      z-index: 2;
    }
    .main-content {
      width:100%;
   }

  }




</style>
