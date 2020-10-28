import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "首页",
      isShow: false,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course/Course.vue'),
    meta: {
      title: "课程",
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/Appointment.vue'),
    meta: {
      title: "约课记录",
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue'),
    meta: {
      title: "练习",
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      title: "我的",
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true,
    }
  },
  //一对一课程
  {
    path: '/onevsone',
    name: 'onevsone',
    component: () => import('../views/homeRoutes/onevsone.vue'),
    meta: {
      title: "一对一课程",
      isShow: true,
      isShowleft: true,
      isTab: false,
    }
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/mailBox/email.vue'),
    meta: {}
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue'),
    meta: {}
  },
  {//考点专练
    path: '/examination-site',
    name: 'Examination-site',
    component: () => import('../views/practice/Examination-site.vue'),
    meta: {
      title: "题库选择",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,

    }
  },
  {//学习日历
    path: '/rili',
    name: 'Rili',
    component: () => import('../views/rili/rili.vue'),
    meta: {
      title: "学习日历",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,

    }
  },
  {//套卷练习
    path: '/set-up',
    name: 'Set-up',
    component: () => import('../views/practice/Set-up.vue'),
    meta: {
      title: "套卷练习",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
      isShowright:true //顶部搜索
    }
  },
  {//仿真模考
    path: '/simulation-test',
    name: 'Simulation-test',
    component: () => import('../views/practice/Simulation-test.vue'),
    meta: {
      title: "仿真模考",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright:true //顶部搜索
    }
  },
  //登录页面路由
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      
    }
  },
  {//错题练习
    path: '/wrong-question-practice',
    name: 'Wrong-question-practice',
    component: () => import('../views/practice/Wrong-question-practice.vue'),
    meta: {
      title: "错题练习",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright:true //顶部搜索
    }
  },
  {//测评记录
    path: '/evaluation-record',
    name: 'Evaluation-record',
    component: () => import('../views/practice/Evaluation-record.vue'),
    meta: {
      title: "测评记录",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright:true //顶部搜索
    }
  },
  {//习题收藏
    path: '/exercise-collection',
    name: 'Exercise-collection',
    component: () => import('../views/practice/Exercise-collection.vue'),
    meta: {
      title: "习题收藏",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright:true //顶部搜索
    }
  },









]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router