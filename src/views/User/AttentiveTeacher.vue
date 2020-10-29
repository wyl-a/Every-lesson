<template>
    <!--    我的页面--------     关注的老师---->
    <div class="wpf-teacher-container">
        <div class="wpf-teacher-wrapper">
            <div class="wpf-teacher-list-container">
                <div class="wpf-teacher-list-img"><img src="" alt=""></div>
                <div class="wpf-teacher-list-name">
                    <p>杨德胜 <span>M20</span></p>
                </div>

                <div class="wpf-teacher-list-miaoshu">
                    <p>杨老师，特别教室，多次被中国数学...</p>
                </div>
                <div class="wpf-teacher-list-btn">
                    <van-button round type="warning" size="mini">取消关注</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{

            }
        },
    }
</script>

<style scoped>
.wpf-teacher-container{
    width: 100vw;
    height: 90vh;
    background-color: #eee;
}
    .wpf-teacher-wrapper{
        width: 95vw;
        height: 10vh;
        background-color: #fff;
        margin-left: 8px;
        border-radius: 5px;
    }
    .wpf-teacher-list-container{
        width: 100%;
        height: 100%;
        font-size: 12px;
        position: relative;
    }
.wpf-teacher-list-container span {
    color: red;
}
.wpf-teacher-list-img{
    width: 50px;
    height: 100%;
    border: 1px solid red;
    position: absolute;
}
.wpf-teacher-list-name{
    margin-left: 55px;

}
    .wpf-teacher-list-miaoshu{
        margin-top: 10px;
        margin-left: 55px;
        color: lightgray;
    }
    .wpf-teacher-list-btn{
        position: absolute;
        top: 18px;
        right: 0px;
    }
</style>