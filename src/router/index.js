import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "首页",
      isShow:false,
      isTab:true,
      email:true,
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course/Course.vue'),
    meta: {
      title: "课程",
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
    }
  },
   {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/Appointment.vue'),
    meta: {
      title: "约课记录",
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
    }
  }, 
  {
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue'),
    meta: {
      title: "练习",
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      title: "我的",
      isShow:true,
      isShowleft:false,
      isTab:true,
      email:true,
    }
  },
  //一对一课程
  {
    path: '/onevsone',
    name: 'onevsone',
    component: () => import('../views/homeRoutes/onevsone.vue'),
    meta: {
      title: "一对一课程",
      isShow:true,
      isShowleft:true,
      isTab:false,
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