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
        course: '/api/app/courseBasis?page=1&limit=10&',
        //登录
        Login: "/api/app/login",
    }
}
export default apl