// 党费管理
const PartyCost = resolve => require(['../views/workbench/party-cost.vue'], resolve)
// 通讯录
const Contacts = resolve => require(['../views/workbench/contacts.vue'], resolve)
// 问卷调查
const Questionnaire = resolve => require(['../views/workbench/questionnaire.vue'], resolve)
// 组织管理
const Organization = resolve => require(['../views/workbench/organization.vue'], resolve)
// 党员档案
const MemberRecord = resolve => require(['../views/workbench/member-record.vue'], resolve)
// 党员发展
const MemberDevelop = resolve => require(['../views/workbench/member-develop.vue'], resolve)
// 资料库
const database = resolve => require(['../views/workbench/database.vue'], resolve)

export default [
  {
    path: '/workbench/party-cost',
    component: PartyCost,
    meta: {
      title: '党费管理',
      isBack: true
    }
  },
  {
    path: '/workbench/contacts',
    component: Contacts,
    meta: {
      title: '通讯录',
      isBack: true
    }
  },
  {
    path: '/workbench/questionnaire',
    component: Questionnaire,
    meta: {
      title: '问卷调查',
      isBack: true
    }
  },
  {
    path: '/workbench/organization',
    component: Organization,
    meta: {
      title: '组织管理',
      isBack: true
    }
  },
  {
    path: '/workbench/member-record',
    component: MemberRecord,
    meta: {
      title: '党员档案',
      isBack: true
    }
  },
  {
    path: '/workbench/member-develop',
    component: MemberDevelop,
    meta: {
      title: '党员发展',
      isBack: true
    }
  },
  {
    path: '/workbench/database',
    component: database,
    meta: {
      title: '资料库',
      isBack: true
    }
  }
]
