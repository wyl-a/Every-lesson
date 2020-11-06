const apl = {
    METHODS: {
        GET: "get", //get请求
        POST: "post", //post请求
        PUT: "put" //put请求
    },
    //接口路径
    URL: {
        //课程
        course: '/api/app/teacher/mainCourse',
        //登录
        Login: "/api/app/login",
        //验证码登录
        SmsCode: "/api/app/smsCode",
        //修改密码
        Change: "/api/app/password",
        //首页
        Home: "/api/app/recommend/appIndex",
        //讲师详情
        Teacher: "api/app/teacher/",
        //老师主讲课程
        MasterCourse: "/api/app/teacher/mainCourse",
        //课程详情
        CourseInfo: "/api/app/courseInfo/basis_id=",
        //课程收藏
        CollectOK: "/api/app/collect",
        //我的收藏
        Collect: "/api/app/collect?page=1&limit=10&type=1&",
        //关注与取消关注老师
        TeaCollect: "/api/app/teacher/collect/",
        //我的关注
        Collects: "/api/app/collect?page=1&limit=10&type=2&",
        //课程报名
        DownOrder: "/api/app/order/downOrder",
        //立即学习
        Learn_now: "/api/app/myStudy/course/",
        //特色课
        CourseClassify: "/api/app/courseClassify",
        //特色课数据
        CourseBasis: "/api/app/courseBasis",
        //搜索
        CourseSearch: "/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=",
        //个人信息
        UserInfo: "/api/app/userInfo",
        //修改个人信息
        User: "/api/app/user",
        //城市接口
        SonArea: "/api/app/sonArea/",
    }
}
export default apl