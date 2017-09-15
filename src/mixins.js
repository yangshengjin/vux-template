export default {
  data () {
    return {
    }
  },
  methods: {
    showToast (text, time) {
      const config = {
        text: text,
        type: 'text',
        width: '10.6em',
        time: time || 2500
      }
      this.$vux.toast.show(config)
    },
    showAlert (content, callback) {
      this.$vux.alert.show({
        title: '提示',
        content: content,
        onHide () {
          if (callback instanceof Function) {
            callback()
          }
        }
      })
    },
    showComfirm (text, callback) {
      this.$vux.confirm.show({
        // 组件除show外的属性
        title: text,
        onCancel () {
        },
        onConfirm () {
          if (callback instanceof Function) {
            callback()
          }
        }
      })
    },
    // 手机号码正则表达式
    checkPhoneReg (phone) {
      let phoneReg = /(^1\d{10}$)|(^[0-9]\d{7}$)/
      return !phoneReg.test(phone)
    },
    // 身份证号码正则表达式
    checkIdCardReg (idcard) {
      var IdNumberReg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
      return !IdNumberReg.test(idcard)
    },
    // 固定电话正则表达式
    checkTel (tel) {
      var telReg = /^0\d{2,3}-?\d{7,8}$/
      return !telReg.test(tel)
    },
    // 回退
    goBack () {
      this.$router.go(-1)
    }
  }
}
