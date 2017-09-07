import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Tabs from '@/components/Tabs.vue'

// 登录
const Login = resolve => require(['../views/user/login.vue'], resolve)
// 注册
const Register = resolve => require(['../views/user/register.vue'], resolve)
const Information = resolve => require(['../views/information.vue'], resolve)
const InformationDetail = resolve => require(['../views/information/detail.vue'], resolve)
const School = resolve => require(['../views/school.vue'], resolve)
const VideoDetail = resolve => require(['../views/school/videoDetail.vue'], resolve)
const Interaction = resolve => require(['../views/interaction.vue'], resolve)
const Workbench = resolve => require(['../views/workbench.vue'], resolve)
const User = resolve => require(['../views/user.vue'], resolve)

// 个人中心
const Setting = resolve => require(['../views/user/setting.vue'], resolve)

/**
 * 导入工作台路由
 */
import workbench from './workbench'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Tabs,
      children: [
        {
          path: '/information',
          component: Information,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '资讯'
          }
        },
        {
          path: '/informationDetail/:id',
          component: InformationDetail,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '资讯'
          }
        },
        {
          path: '/school',
          component: School,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '党校'
          }
        },
        {
          path: '/videoDetail/:id',
          component: VideoDetail,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '详情'
          }
        },
        {
          path: '/interaction',
          component: Interaction,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '互动'
          }
        },
        {
          path: '/workbench',
          component: Workbench,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '工作台'
          }
        },
        {
          path: '/user',
          component: User,
          meta: {
            title: false,
            isBack: true,
            isToken: true,
            mask: '我'
          }
        }
      ]
    },
    {
      path: '/user/login',
      component: Login,
      meta: {
        title: '',
        isBack: false
      }
    },
    {
      path: '/user/register',
      component: Register,
      meta: {
        title: '',
        isBack: false
      }
    },
    {
      path: '/user/setting',
      component: Setting,
      meta: {
        title: '设置',
        isBack: true
      }
    },
    ...workbench
  ]
})

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  store.commit('isLoading', {isLoading: true})
  // 判断有无登录
  let uid = localStorage.getItem('uid')
  if (uid) {
    if (to.path === '/') {
      next('/information')
    } else {
      next()
    }
    // 如果有token就正常转向
  } else {
    if (to.meta.isToken) {
      next('/user/login') // 否则如果该页面需要Token则跳转回登录页
    }
  }

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach((to) => {
  store.commit('isLoading', {isLoading: false})
  store.commit('changeIndexConf', {
    isBack: to.meta.isBack,
    title: to.meta.title
  })
})

export default router
