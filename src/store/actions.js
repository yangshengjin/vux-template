import base from '../api/base'

// 登录
export const PostLogin = ({ commit, state }, params) => {
  return base.PostLogin(params).then((res) => {
    res = {
      status: 1,
      desc: '登录成功',
      userinfo: {
        uid: '123456',
        name: '测试1'
      }
    }
    if (res.status === 1) {
      commit('PostLogin', { UserInfo: res.userinfo })
    }
    return res
  }).catch(e => {
  })
}

// 退出系统
export const GetLoginOut = ({commit, state}, params) => {
  commit('GetLoginOut', { params })
}

