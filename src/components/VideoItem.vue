// 直播
<template>
  <div class="base-padding">
    <div class="base-vdo-item" v-for="(item,index) in list" :key="index">
      <div class="base-img"><img :src="item.avatar" alt="img" class="img-avatar"></div>
      <div class="base-content">
        <div class="base-title">{{item.title}}</div>
        <div class="base-dec">主播：<span>{{item.name}}</span></div>
        <div class="base-dec">在线人数：<span>{{item.people}}</span></div>
         <span class="base-time">{{item.time}}</span>
      </div>
      <div class="base-btn" v-if="item.status == 1">
        <x-button mini class="btn act" @click.native="pushLink(item.id)">签到加入</x-button>
      </div>
      <div class="base-btn" v-else-if="item.status == 2">
        <x-button mini class="btn" @click.native="pushLink(item.id)">主播</x-button>
      </div>
      <div class="base-btn" v-else-if="item.status == 3">
        <x-button mini class="btn" @click.native="pushLink(item.id)">已结束</x-button>
      </div>
     
    </div>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  export default {
    props: {
      list: {
        type: Array,
        required: []
      }
    },
    components: {
      XButton
    },
    data () {
      return {
      }
    },
    methods: {
      pushLink (e) {
        this.$router.push({ path: '/videoDetail/' + e })
      }
    }
  }
</script>
<style lang="less">
  .base-padding {
    padding: 0 15px;
  }
  .base-vdo-item {
    display: flex;
    position: relative;
    background: #fff;
    color: #333;
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;

    .base-time {
      position: absolute;
      bottom: 10px;
      font-size: 12px;
      color: #999;
      right: 0;
    }

    .base-img {
      flex: 0 0 auto;
      .img-avatar {
        width: 80px;
        height: 60px;
      }
    }
    .base-btn {
      flex: 0 0 auto;
      display: flex;
      align-items:center;
      .btn {
        background: #fff;
        background-color: #fff;
        &.act {
          color: #00FF00;
        }
      }
      .weui-btn:after {
        border: none;
      }
    }
    .base-content {
      padding-left: 10px;
      flex: 1 1 auto;
      flex-wrap: wrap;

      .base-title {
        font-size: 16px;
        line-height: 24px;
      }
      .base-dec {
        font-size: 14px;
        line-height: 24px;

      }
    }


 
  }
</style>
