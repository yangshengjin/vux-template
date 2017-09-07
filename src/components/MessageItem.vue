// 通知公告
<template>
  <div>
    <router-link :to="'/messageDetail/'+item.id" class="base-msg-item" v-for="(item,index) in list" :key="index">
      <div class="base-ion">{{item.time}} <i class="icon"
       :class="item.status==1 ? 'green':item.status==2?'yellow':'grow'"></i></div>
      <div class="base-content">
        <div class="base-title">{{item.title}}</div>
        <div class="base-dec">{{item.content}}</div>
      </div>
     
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: []
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style lang="less">
  .base-msg-item {
    display: flex;
    background-color: #eee;
    color: #333;
    padding: 0 15px;
    border-bottom: 1px solid #666;
    .base-ion {
      flex: 0 0 auto;
      padding-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      position: relative;
      border-right: 1px solid #666;
      .icon {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        right: -5px;
        top: 16px;
        &.yellow {
            background: #ff6600;
        }
        &.grow {
            background: #999;
        }

        &.green {
            background: #2C9D23;
        }
      }
    }
    .base-content {
      flex: 1 1 auto;
      padding: 10px 0;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding-left: 10px;

      .base-title {
        line-height: 25px;
      }
      .base-dec {
        color:#999;
      }
    }
  }
</style>
