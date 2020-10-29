<template>
<!--    我的页面--------剩余学习币-->
    <div class="wpf-Learning-currency">
        
        <div class="wpf-Learning-currency-container">
            <div  class="wpf-Learning-currency-wrapper">
                <p>我的余额</p>
                <p>0 <span>学习币</span></p>
            </div>
        </div>

        <div class="wpf-Learning-currency-mav">
            <p>充值说明</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Learning-currency"
    }
</script>

<style scoped>
    .wpf-Learning-currency{
        width: 100vw;
        height: 90vh;
        background-color: #eee;
        font-size: 12px;
    }
.wpf-Learning-currency-container{
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
}
    .wpf-Learning-currency-wrapper{
        width: 35%;
        height: 10vh;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .wpf-Learning-currency-wrapper span {
        color: red;
    }
    .wpf-Learning-currency-mav{
        width: 100vw;
        height: 75vh;
        margin-top: 20px;
        background-color: #fff;
    }
    .wpf-Learning-currency-mav p {
        font-size: 16px;
    }
</style>