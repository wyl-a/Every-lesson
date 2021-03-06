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
      title: "特色课",
      isShow: true,
      isShowleft: false,
      isShowright: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/courseitem',
    name: 'Courseitem',
    component: () => import('../views/course/courseitem.vue'),
    meta: {
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
      isShow: false,
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
      isShowright: true
    }
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/mailBox/email.vue'),
    meta: {}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: {}
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: () => import('../views/login/RetrievePass.vue'),
    meta: {

    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/Register.vue'),
    meta: {}
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue'),
    meta: {}
  },
  { //考点专练
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
  { //学习日历
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
  { //套卷练习
    path: '/set-up',
    name: 'Set-up',
    component: () => import('../views/practice/Set-up.vue'),
    meta: {
      title: "套卷练习",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
      isShowright: true //顶部搜索
    }
  },
  { //仿真模考
    path: '/simulation-test',
    name: 'Simulation-test',
    component: () => import('../views/practice/Simulation-test.vue'),
    meta: {
      title: "仿真模考",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright: true //顶部搜索
    }
  },
  { //错题练习
    path: '/wrong-question-practice',
    name: 'Wrong-question-practice',
    component: () => import('../views/practice/Wrong-question-practice.vue'),
    meta: {
      title: "错题练习",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright: true //顶部搜索
    }
  },
  { //测评记录
    path: '/evaluation-record',
    name: 'Evaluation-record',
    component: () => import('../views/practice/Evaluation-record.vue'),
    meta: {
      title: "测评记录",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright: true //顶部搜索
    }
  },
  { //习题收藏
    path: '/exercise-collection',
    name: 'Exercise-collection',
    component: () => import('../views/practice/Exercise-collection.vue'),
    meta: {
      title: "习题收藏",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
      isShowright: true //顶部搜索
    }
  },
  {
    path: '/attentiveTeacher',
    name: 'AttentiveTeacher',
    component: () => import('../views/User/AttentiveTeacher.vue'),
    meta: {
      title: "关注的老师",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/myFavorite',
    name: 'MyFavorite',
    component: () => import('../views/User/MyFavorite.vue'),
    meta: {
      title: "我的收藏",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/bookingClassOrder',
    name: 'BookingClassOrder',
    component: () => import('../views/User/BookingClassOrder.vue'),
    meta: {
      title: "课程订单",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/memberOftheOrder',
    name: 'MemberOftheOrder',
    component: () => import('../views/User/MemberOftheOrder.vue'),
    meta: {
      title: "会员订单",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/lessonAbouttheOrder',
    name: 'LessonAbouttheOrder',
    component: () => import('../views/User/LessonAbouttheOrder.vue'),
    meta: {
      title: "约课订单",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/preferentialPrice',
    name: 'PreferentialPrice',
    component: () => import('../views/User/PreferentialPrice.vue'),
    meta: {
      title: "优惠券",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/learningCard',
    name: 'LearningCard',
    component: () => import('../views/User/LearningCard.vue'),
    meta: {
      title: "学习卡",
      email: true,
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/User/Member.vue'),
    meta: {
      title: "会员",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/myMessage',
    name: 'MyMessage',
    component: () => import('../views/User/MyMessage.vue'),
    meta: {
      title: "我的消息",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/User/Feedback.vue'),
    meta: {
      title: "意见反馈",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/set',
    name: 'Set',
    component: () => import('../views/User/Set.vue'),
    meta: {
      title: "设置",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  //老师详情路由
  {
    path: '/teacherDetails',
    name: 'TeacherDetails',
    component: () => import('../views/HomeDetails/teacherDetails.vue'),
    meta: {
      email: true,
    },
  },
  //设置密码
  {
    path: '/setpassword',
    name: 'SetPassword',
    component: () => import('../views/User/Set/SetPassword.vue'),
    meta: {
      title: "设置密码",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  //编辑个人信息路由
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/User/edit.vue'),
    meta: {
      title: "个人信息",
      isShow: true,
      isShowleft: true,
      isTab: false,
      email: true,
    }
  },
  //学习详情
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/course/Study.vue'),
    meta: {
      email: true,
    }
  },
  {
    path: '/sex',
    name: 'Sex',
    component: () => import('../views/User/Edit/sex.vue'),
    meta: {
      email: true,
    }
  },
  {
    path: '/nickname',
    name: 'Nickname',
    component: () => import('../views/User/Edit/nickname.vue'),
    meta: {
      email: true,
    }
  },
  //预约
  {
    path: '/teacherorder',
    name: 'Teacherorder',
    component: () => import('../views/HomeDetails/teacherorder.vue'),
    meta: {
      email: true,
    }
  },
  {
    path: '/dhuanxxka',
    name: 'dhuanxxka',
    component: () => import('../views/User/dhuanxxka.vue'),
    meta: {
      title: "学习卡兑换",
      isShow: true,
      isShowleft: true,
      isTab: true,
      email: true,
    }
  },
  {
    path: '/bi',
    name: 'Bi',
    component: () => import('../views/User/Bi.vue'),
    meta: {
      title: '我的学习币',
      isShow: true,
      isShowleft: true,
      email: true,
      isShowright: false //顶部搜索
    }
  },
  {
      path: '/teseke',
      name: 'teseke',
      component: () => import('../views/User/teseke.vue'),
      meta: {
        title: "我的学习",
        isShow: false,
        isShowleft: true,
        isTab: true,
        email: true,
      }
    },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, feom, next) => {
    document.title = to.meta.title
    next()
  })

export default router