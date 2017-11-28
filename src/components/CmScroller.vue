<!--自定义封装vux Scroller 组件-->
<template>
	<div>
	    	<scroller v-model="status"  
	    		:prevent-default="false" 
	    		lock-x scrollbar-y 
	    		:use-pullup="usePullup"
	    		:use-pulldown="usePulldown"
	    		height="-90" 
	    		:pullup-config="upConf"
	    		:pulldown-config="downConf"
	    		ref="scroller">
		        <div>
		        	
		            <slot></slot>
			        
		        </div>
		      <!--pullup slot-->
		      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
		        <span v-show="status.pullupStatus === 'default'"></span>
		        <divider v-show="status.pullupStatus === 'disabled'">没有更多数据</divider>
		        <span class="pullup-arrow" v-show="status.pullupStatus === 'default' || status.pullupStatus === 'up' || status.pullupStatus === 'down'" :class="{'rotate': status.pullupStatus === 'down'}">↑</span>
		        <span v-show="status.pullupStatus === 'loading'"><spinner type="ios"></spinner></span>
		      </div>
		      
		      <!--pulldown slot-->
		      <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
		        <span v-show="status.pulldownStatus === 'default'"></span>
		        <span class="pulldown-arrow" v-show="status.pulldownStatus === 'down' || status.pulldownStatus === 'up'" :class="{'rotate': status.pulldownStatus === 'up'}">↓</span>
		        <span v-show="status.pulldownStatus === 'loading'"><spinner type="ios"></spinner></span>
		      </div>
		    </scroller>
		    
	</div>
</template>

<script>
  import { Scroller, Spinner, Divider } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner
    },
    props: {
      // 是否启用上拉加载
      usePullup: {
        type: Boolean,
        default: true
      },
      // 是否启用下拉刷新
      usePulldown: {
        type: Boolean,
        default: false
      },
      // 默认加载的最大数据条数，判断是否小于该条数时就不给上拉了
      maxNum: {
        type: Number,
        default: 15
      },
      // 是否首次组件就触发下上拉
      'first-load': {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        status: {
          pulldownStatus: 'default',
          pullupStatus: 'default'
        },
        upConf: { // 上拉配置
          content: '上拉加载更多',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: 'Loading...',
          upContent: '上拉加载更多',
          loadingContent: 'Loading...',
          clsPrefix: 'xs-plugin-pullup-'
        },
        downConf: { // 下拉配置
          content: 'Pull Down To Refresh',
          height: 60,
          autoRefresh: true,
          downContent: '下拉刷新',
          upContent: '加载中...',
          loadingContent: '加载中...',
          clsPrefix: 'xs-plugin-pulldown-'
        }
      }
    },
    methods: {
      resetScroll (len) {
        this.$nextTick(() => {
          this.$refs.scroller.reset()
          this.status.pulldownStatus = 'default'
          if (len !== undefined) {
            this.status.pullupStatus = len >= this.maxNum ? 'default' : 'disabled'
          }
        })
      },
      onFirstLoad () {
        this.status.pullupStatus = 'loading'
        this.$emit('onFirstLoad')
      }
    },
    watch: {
      status (e) {
        if (e.pulldownStatus === 'loading') {
          this.$emit('onPullDownRefresh', this.resetScroll)
        } else if (e.pullupStatus === 'loading') {
          this.$emit('onPullUpLoadMore', this.resetScroll)
        }
      }
    },
    created () {
      if (this.firstLoad) {
        this.$emit('onPullUpLoadMore', this.resetScroll)
      }
    }
  }
</script>
<style lang="less">

</style>
