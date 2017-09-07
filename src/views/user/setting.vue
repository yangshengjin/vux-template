<!--用户设置-->
<template>
	<div>
		<div class="page-wrap">
			<group>
				<cell title="修改密码" link="/user/edit-pwd"></cell>
				<cell title="清除缓存" link="/user/clear-cahce"></cell>
				<cell title="关于我们" link="/user/about"></cell>
			</group>

      <group class="u-p10 u-fixed-bottom">
				<x-button type="warn" @click.native="loginOut">退 出 登 录</x-button>
			</group> 
		</div>
	</div>
</template>

<script>
import { Group, Cell, XButton } from 'vux'
import { mapActions } from 'vuex'

export default {
  components: {
    Group,
    Cell,
    XButton
  },
  data () {
    return {
      model: {
      }
    }
  },
  methods: {
    ...mapActions([
      'GetLoginOut'
    ]),
    loginOut () {
      this.GetLoginOut().then(() => {
        this.$router.push('/user/login')
      })
    }
  }
}
</script>

<style lang="less">
.u-fixed-bottom {
  // position: absolute;
  // text-align: center;
  // width: 90%;
  // left: 0;
  // right: 0;
  // margin: 0 auto;
  // bottom: 25px;
  margin-top: 150px;
}
</style>
