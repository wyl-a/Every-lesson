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
  //邮箱
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/mailBox/email.vue'),
    meta: {
      isTab: false,
      email: false,
    }
  },
  //登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      isTab: false,
      email: true,
    }
  },
  //找回密码
  {
    path: '/retrieve',
    name: 'Retrieve',
    component: () => import('../views/login/RetrievePass.vue'),
    meta: {
      title: "找回密码",  //标题
      isShow: true,  //顶部导航
      isShowleft: true,  //顶部返回
      isTab: false, //底部导航
      email: true, //邮箱
      isShowright:false //顶部搜索
    }
  },
  //注册 
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/Register.vue'),
    meta: {
      email: true, //邮箱
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue'),
    meta: {
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router