<template>
    <div class="wpf-examination-site">
        <div>
            <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
        </div>
        
        <div class="wpf-examination-site-left-container">
            <ul class="wpf-examination-site-left-wrapper">
                <li v-for="(item,index) in 10" :key="index">
                    {{item}}
                </li>
            </ul>

            <div class="wpf-examination-site-right-container">
                    dasd
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value:'',
            }
        }
    }
</script>

<style scoped>
.wpf-examination-site-left-container{
    width: 100vw;
    height: 80vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
}
    .wpf-examination-site-left-wrapper{
        width: 25%;
        height: 100%;
        background-color: #eee;
    }
.wpf-examination-site-left-wrapper li {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.wpf-examination-site-left-wrapper li:hover{
    background-color: #fff;
    color: red;
}
    .wpf-examination-site-right-container{
        width: 75%;
        height: 100%;
    }
</style>