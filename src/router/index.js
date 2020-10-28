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
  {
    path: '/kaodianZL',
    name: 'kaodianZL',
    component: () => import('../views/lianxiRoutes/kaodianZL.vue'),
    meta: {
      isShow: true,
      title: '考点专练',
      isShowleft: true,
    }
  },
  {
    path: '/taojvanLX',
    name: 'taojvanLX',
    component: () => import('../views/lianxiRoutes/taojvanLX.vue'),
    meta: {
      isShow: true,
      title: '套卷练习',
      isShowleft: true,
    }
  },
  {
    path: '/mokaoFZ',
    name: 'mokaoFZ',
    component: () => import('../views/lianxiRoutes/mokaoFZ.vue'),
    meta: {
      isShow: true,
      title: '仿真模考',
      isShowleft: true,
    }
  },
  {
    path: '/cuotiLX',
    name: 'cuotiLX',
    component: () => import('../views/lianxiRoutes/cuotiLX.vue'),
    meta: {
      isShow: true,
      title: '错题练习',
      isShowleft: true,
    }
  }, {
    path: '/cepingJL',
    name: 'cepingJL',
    component: () => import('../views/lianxiRoutes/cepingJL.vue'),
    meta: {
      isShow: true,
      title: '测评记录',
      isShowleft: true,
    }
  }, {
    path: '/shoucang',
    name: 'shoucang',
    component: () => import('../views/lianxiRoutes/shoucang.vue'),
    meta: {
      isShow: true,
      title: '习题收藏',
      isShowleft: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router