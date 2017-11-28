<template>
  <div class="page-tabs">
  	<div class="m-tabs-wrap">
	    <Tabbar :animate="false" :lineWidth = "0">
	      <tabbar-item :selected="selected === 'page1'" @click.native="channgeTab('page1')">
          <img slot="icon" src="../assets/icon-information.png">
          <span slot="label">page1</span>
        </tabbar-item>
	      <tabbar-item :selected="selected === 'page2'" @click.native="channgeTab('page2')">
          <img slot="icon" src="../assets/icon-interaction.png">
          <span slot="label">page2</span>
        </tabbar-item>
	      <tabbar-item :selected="selected === 'user'" @click.native="channgeTab('user')">
          <img slot="icon" src="../assets/icon-user.png">
          <span slot="label">我</span>          
        </tabbar-item>
	    </Tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {
      channgeTab (tab) {
        switch (tab) {
          case 'page1': this.$router.push('/page1')
            break
          case 'page2': this.$router.push('/page2')
            break
          case 'user': this.$router.push('/user')
            break
          default: this.$router.push('/page1')
            break
        }
      }
    },
    computed: {
      selected () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style lang="less">
  .m-tabs-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  .page-tabs {
    .vux-tab {
      border-top: 1px solid #d9d9d9;
    }
    
  }
</style>
