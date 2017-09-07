<template>
	<div>
		<div class="page-wrap">
      <h2 style="text-align: center;padding-top: 10px">盘古党建App用户注册</h2>
			<group>
				<x-input v-model="model.loginId" title="账号" placeholder="请输入账号" :max="11"></x-input>
				<x-input v-model="model.password" type="password" title="密码" placeholder="请输入密码"></x-input>
				<x-input v-model="model.password" type="password2" title="密码" placeholder="请再次输入密码"></x-input>
        <x-input title="验证码" class="weui-cell_vcode">
          <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
        </x-input>
			</group>
			<group class="u-p10">
				<x-button type="primary" @click.native="submitLogin">立 即 注 册</x-button>
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
            this.$router.push('/')
          }
        })
      }
    }
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
