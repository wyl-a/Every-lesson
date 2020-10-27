import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "首页",
<<<<<<< HEAD
      isShow:false,
      isTab:true,
      email:true,
=======
      isShow: false,
      isTab: true,
      email: true
>>>>>>> bc84e8a2f642dd084fefcef3cc43365c2687364f
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course/Course.vue'),
    meta: {
      title: "课程",
<<<<<<< HEAD
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
=======
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true
>>>>>>> bc84e8a2f642dd084fefcef3cc43365c2687364f
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/Appointment.vue'),
    meta: {
      title: "约课记录",
<<<<<<< HEAD
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
=======
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true
>>>>>>> bc84e8a2f642dd084fefcef3cc43365c2687364f
    }
  },
  {
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue'),
    meta: {
      title: "练习",
<<<<<<< HEAD
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
=======
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true
>>>>>>> bc84e8a2f642dd084fefcef3cc43365c2687364f
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      title: "我的",
<<<<<<< HEAD
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
=======
      isShow: true,
      isShowleft: false,
      isTab: true,
      email: true
>>>>>>> bc84e8a2f642dd084fefcef3cc43365c2687364f
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
      email: true
    }
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/mailBox/email.vue'),
    meta: {
      isTab: false,
      email: false
    }
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/mailBox/email.vue'),
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