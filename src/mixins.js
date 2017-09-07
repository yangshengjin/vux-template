export default {
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
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '加载中...',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pulldown-'
      }
    }
  },
  methods: {
    showToast (text) {
      const config = {
        text: text,
        type: 'text',
        width: '10.6em',
        time: 3500
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
    checkPhoneReg (phone) {
      let phoneReg = /(^1\d{10}$)|(^[0-9]\d{7}$)/ // 手机号码正则表达式
      return !phoneReg.test(phone)
    },
    checkIdCardReg (idcard) {
      var IdNumberReg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/ // 身份证号码正则表达式
      return !IdNumberReg.test(idcard)
    },
    checkTel (tel) {
      var telReg = /^0\d{2,3}-?\d{7,8}$/ // 固定电话正则表达式
      return !telReg.test(tel)
    }
  }
}
