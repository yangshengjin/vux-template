<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading" :text="'正在加载'"></loading>
    </div> 

    <view-box ref="viewBox" body-padding-top="0" body-padding-bottom="55px" style="width:100%;height:100%;">
	    <cm-header></cm-header>
	    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
	      <router-view class="router-view" slot="default"></router-view>
	    </transition>
    </view-box>
  </div>
</template>

<script>
import CmHeader from '@/components/CmHeader'
import { LoadMore, ViewBox, Loading, TransferDom } from 'vux'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    CmHeader,
    LoadMore,
    ViewBox,
    Loading
  },
  computed: {
    direction () {
      return this.$store.state.comm.direction
    },
    title () {
      return this.$store.state.comm.indexConf.title
    },
    isLoading () {
      return this.$store.state.comm.isLoading
    }
  },
  watch: {
    '$route' (to, from) {
      this.$refs.viewBox.scrollTo(0)
    }
  },
  created () {
    let uid = localStorage.getItem('uid')
    if (uid === '' || uid == null || uid === undefined) {
      // 判断有无登录，无则跳转到登录
      // this.$router.push('/user/login')
    } else {
      this.$store.state.responseData['UserInfo'].uid = uid
    }
    // 调用native api
    // const plusReady = res => {
    //   plus.navigator.setStatusBarBackground('#26A2FF')
    // }
    // if (window.plus) {
    //   plusReady(this)
    // } else {
    //   document.addEventListener('plusready', plusReady, false)
    // }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/base.less';

body {
  background-color: #fff;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
	height:100%;
  .weui-loadmore {
    position: absolute;
    /*margin: 10.5em auto;*/
    top: 33.3%;
    right: 0;
    left: 0;
  }
}
/**
* vue-router transition
*/
.router-view {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter-active {
  animation-name: popInLeft;
}
.vux-pop-out-leave-active {
  animation-name: popOutRight;
}
.vux-pop-in-enter-active {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave-active {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
