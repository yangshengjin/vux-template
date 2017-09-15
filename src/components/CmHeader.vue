<template>
  <div class="m-header fixed">
  	<x-header 
  		:left-options="{showBack: isBack, preventGoBack: true}" 
  		v-show="title"
  		@on-click-back="onClickBack">
  		{{title}}
  	</x-header>
  </div>

</template>

<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    },
    name: 'cm-header',
    data () {
      return {
        showQuit: false,
        time: 2000
      }
    },
    methods: {
      onClickBack () {
        const _this = this
        switch (_this.$route.path) {
          case '/user/basicInfo': _this.$router.push('/user')
            break
          default: this.$router.go(-1)
            break
        }
      }
    },
    computed: {
      title () {
        // this.Listener()
        return this.$store.state.comm.indexConf.title
      },
      isBack () {
        return this.$store.state.comm.indexConf.isBack
      },
      Listener () {
        // 监听返回按钮
        let i = 0
        const $this = this
        setTimeout(() => {
          plus.key.removeEventListener('backbutton', onback)
          plus.key.addEventListener('backbutton', onback)
          function onback () {
            if ($this.$route.path === '/login/login') {
              plus.runtime.quit()
              return
            }
            if ($this.$route.path === '/page1' || $this.$route.path === '/page2' || $this.$route.path === '/user') {
              i++
              if (i >= 2) {
                plus.runtime.quit()
              } else {
                $this.showToast('再按一次退出系统', $this.time)
                setTimeout(() => {
                  i = 0
                }, 2000)
              }
            } else {
              $this.goBack()
            }
          }
        }, 500)
      }
    },
    created () {
      // 调用native api
      // const plusReady = function () {
      //   window.plus = window.plus
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
  .backdrop {
  	display: flex;
  	justify-content: center;
  	position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .1);
    z-index: 999;
    span {
      margin: 150px 0 0 0;
    }
  }
  .m-header.fixed {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }
  
</style>
