// 测试
<template>
  <div >
    <router-link :to="'/testDetail/'+item.id" class="base-test-item" v-for="(item,index) in list" :key="index">
      <div class="base-img">
        <img :src="item.avatar" alt="img" class="img-avatar">
        <span class="text-info">进行中</span>
        </div>
      <div class="base-content">
        <div class="base-title">{{item.title}}</div>
        <div class="base-dec">活动时间：<span>{{item.stime}}-{{item.etime}}</span></div>
        <div class="base-dec">来自:<router-link to='/' class="links">{{item.from}}</router-link></div>
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
     
    </router-link>
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
  .base-test-item {
    display: flex;
    position: relative;
    background: #fff;
    color: #333;
    padding: 10px 15px;
    border-bottom: 1px solid #f2f2f2;

    .text-info {
      display: block;
      width: 100px;
      transform: rotate(-240deg);
      height: 20px;
      top: 18px;
      left: -37px;
      color: #fff;
      position: absolute;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background: #0A9351;
    }

    .base-time {
      position: absolute;
      bottom: 10px;
      font-size: 12px;
      color: #999;
      right: 0;
    }

    .base-img {
      position: relative;
      flex: 0 0 auto;
      overflow: hidden;
      .img-avatar {
        width: 70px;
        height: 80px;
      }
    }
   
    .base-content {
      padding-left: 10px;
      flex: 1 1 auto;
      font-size: 14px;
      flex-wrap: wrap;
      .links {
        color: #ACBEC2;
      }

      .base-title {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 24px;
      }
      .base-dec {
        font-size: 14px;
        line-height: 24px;

      }
    }


 
  }
</style>
