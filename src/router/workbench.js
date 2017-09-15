
// 资料库
const database = resolve => require(['../views/workbench/database.vue'], resolve)

export default [
  {
    path: '/workbench/database',
    component: database,
    meta: {
      title: '资料库',
      isBack: true
    }
  }
]
