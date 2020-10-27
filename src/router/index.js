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
      email:true,  //邮箱显示隐藏
      bottomBar:true, //底部导航显示隐藏
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course/Course.vue'),
    meta: {
      title: "课程",
      email:true,
      bottomBar:true,
    }
  },
   {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../views/Appointment.vue'),
    meta: {
      title: "约课记录",
      email:true,
      bottomBar:true,
    }
  }, 
  {
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue'),
    meta: {
      title: "练习",
      email:true,
      bottomBar:true,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      title: "我的",
      email:true,
      bottomBar:true,
    }
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/mailBox/email.vue'),
    meta: {
      title: "邮箱",
      email:false,
      bottomBar:false,
    }
  },
  //一对一课程
  {
    path: '/onevsone',
    name: 'onevsone',
    component: () => import('../views/homeRoutes/onevsone.vue'),
    meta: {
      title: "一对一课程"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router