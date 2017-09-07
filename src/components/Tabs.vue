<template>
  <div class="page-tabs">
  	<div class="m-tabs-wrap">
	    <Tabbar :animate="false" :lineWidth = "0">
	      <tabbar-item :selected="selected === 'information'" @click.native="channgeTab('information')">
          <img slot="icon" src="../assets/icon-information.png">
          <span slot="label">资讯</span>
        </tabbar-item>
	      <tabbar-item :selected="selected === 'school'" @click.native="channgeTab('school')">
          <img slot="icon" src="../assets/icon-school.png">
          <span slot="label">党校</span>
        </tabbar-item>
	      <tabbar-item :selected="selected === 'interaction'" @click.native="channgeTab('interaction')">
          <img slot="icon" src="../assets/icon-interaction.png">
          <span slot="label">互动</span>
        </tabbar-item>
	      <tabbar-item :selected="selected === 'workbench'" @click.native="channgeTab('workbench')">
          <img slot="icon" src="../assets/icon-workbench.png">
          <span slot="label">工作台</span>
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
          case 'information': this.$router.push('/information')
            break
          case 'school': this.$router.push('/school')
            break
          case 'interaction': this.$router.push('/interaction')
            break
          case 'workbench': this.$router.push('/workbench')
            break
          case 'user': this.$router.push('/user')
            break
          default: this.$router.push('/information')
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
