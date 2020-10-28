const apl = {
    METHODS: {
        GET:"get", //get请求
        POST: "post" //post请求
    },
    //接口路径
    URL: {
        //轮播图路径
        Banner: '/banner',
        //首页列表老师
        GETteacher: '/api/app/recommend/appIndex',
        //登录
        Login:"/api/app/login",
        //课程
        course:'/api/app/courseBasis?page=1&limit=10&',
    }
}
export default apl