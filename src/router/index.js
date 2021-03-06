import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Tabs from '@/components/Tabs.vue'

// 登录
const Login = resolve => require(['../views/user/login.vue'], resolve)
// 注册
const Register = resolve => require(['../views/user/register.vue'], resolve)
const page1 = resolve => require(['../views/page1.vue'], resolve)
const page2 = resolve => require(['../views/page2.vue'], resolve)
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
          path: '/page1',
          component: page1,
          meta: {
            title: 'page1',
            isBack: false,
            isToken: false,
            mask: 'page1'
          }
        },
        {
          path: '/page2',
          component: page2,
          meta: {
            title: 'page2',
            isBack: false,
            isToken: false,
            mask: 'page2'
          }
        },
        {
          path: '/user',
          component: User,
          meta: {
            title: '个人中心',
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
    if (to.path === '/' || to.path === '/user/login') {
      next('/page1')
    } else {
      next()
    }
    // 如果有token就正常转向
  } else {
    if (to.meta.isToken) {
      next('/user/login?redirect=' + to.path) // 否则如果该页面需要Token则跳转回登录页
    } else if (to.path === '/') {
      next('/page1')
    } else {
      next()
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
