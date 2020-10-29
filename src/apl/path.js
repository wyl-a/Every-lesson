const apl = {
    METHODS: {
        GET: "get", //get请求
        POST: "post" //post请求
    },
    //接口路径
    URL: {
        //首页列表老师
        GETteacher: '/api/app/recommend/appIndex',
        //课程
        course: '/api/app/teacher/mainCourse',
        //登录
        Login: "/api/app/login",
        //验证码登录
        SmsCode:"/api/app/smsCode"
    }
}
export default apl