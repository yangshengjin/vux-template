// 学习
<template>
  <group class="base-link-box" gutter="0" >
    <cell is-link :link="'/learn/'+item.id"   v-for="(item, index) in list" :key="index">
      <span slot="title" class="cell-title">
      <span>{{item.title}}</span>
      </span>
      <span slot="value" class="cell-value act" v-if="item.status == 1">
      <span>进行中</span>
      </span>
      <span slot="value" class="cell-value" v-if="item.status == 2">
      <span>已完成</span>
      </span>
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
  .base-link-box {
    .cell-title{
      line-height: 30px;
    }
    .cell-value {
      &.act {
        color: #2C9D23;
      }  
      
    }
    .weui-cell__ft {
      padding-right: 20px!important;

    }
  }
</style>
