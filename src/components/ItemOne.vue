// 资讯
<template>
  <group gutter="0">
    <cell is-link :link="'/informationDetail/'+item.id" class="base-mq-content"  v-for="(item, index) in list" :key="index" >
      <div slot="title" class="base-mq-item">
        <img :src="item.avatar" alt="img" class="base-img"/>
        <div class="base-content">
          <div class="base-title">{{item.title}}</div>
          <div class="base-dec">{{item.reportname}}<span>{{item.time}}</span></div>
        </div>
      </div>
    </cell>
  </group>
</template>

<script>
  import { Cell, Group } from 'vux'
  export default {
    props: {
      list: {
        type: Array,
        required: []
      }
    },
    components: {
      Cell, Group
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
  .base-mq-content {
    .vux-cell-primary {
      width: 90%;
    }
   .base-mq-item {
      
      color: #333;
      .base-img {
        width: 80px;
        height: 50px;
        position: absolute;
        top:10px;
        left: 15px;
      }
      
      .base-content {
        position: relative;
        width: 100%;
        padding-left: 90px;
        box-sizing: border-box;

        .base-title {
          font-size: 14px;
          width: 100%;
          line-height: 25px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

        }
        .base-dec {
          font-size: 12px;
          color: #999;
          line-height: 20px;
          & > span {
            margin-left: 5px;
          }
        }
      }
    }



  }
</style>
