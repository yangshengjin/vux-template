<template>
	<div>
		<div class="page-wrap">
      <h2 style="text-align: center;padding-top: 10px">logo</h2>
			<group>
				<x-input v-model="model.loginId" title="账号" placeholder="请输入账号" :max="11"></x-input>
				<x-input v-model="model.password" type="password" title="密码" placeholder="请输入密码"></x-input>
        <x-input title="验证码">
          <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
        </x-input>
			</group>
			<div class="u-fild">
				<router-link to="register">点击注册</router-link>
				<router-link to="forgetpwd">忘记密码？</router-link>
			</div>
			<group class="u-p10">
				<x-button type="primary" @click.native="submitLogin">立 即 登 录</x-button>
			</group>
		</div>
	</div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
import { mapActions } from 'vuex'

export default {
  components: {
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      model: {
        loginId: '',
        password: '',
        roleId: 1
      }
    }
  },
  methods: {
    ...mapActions([
      'PostLogin'
    ]),
    checkLoginInfo () {
      if (this.model.loginId === '' || this.model.password === '') {
        this.showAlert('账户密码不能为空！')
        return false
      } else {
        return true
      }
    },
    submitLogin () {
      const flag = this.checkLoginInfo()
      if (flag) {
        this.PostLogin(this.model).then(res => {
          this.showToast(`${res.desc}`)
          if (res.status === 1) {
            const path = this.$route.query.redirect
            if (path !== undefined) {
              this.$router.replace({path: path})
            } else {
              this.goBack()
            }
          }
        })
      }
    }
  },
  created () {
  }
}
</script>

<style lang="less">
.u-fild {
	padding: 15px 0;
	text-align: center;
	a {
		margin: 0 15px;
		color: #aaa;
	}
}
</style>
