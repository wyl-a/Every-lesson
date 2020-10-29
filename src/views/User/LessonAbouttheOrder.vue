<template>
    <div class="wpf-set-up">
        <!--                下拉菜单-->
        <div>
            <van-tabs v-model="active" >
                <van-tab title="全部订单"></van-tab>
                <van-tab title="待支付"></van-tab>
                <van-tab title="已完成"></van-tab>
                <van-tab title="已取消"></van-tab>
            </van-tabs>
        </div>

        <!--                图片-->
        <div class="wpf-set-up-container">
            <img src="shijuan.png" alt="">
            <p>暂无订单</p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:'全部订单',
            };
        },
    }
</script>

<style scoped>
    .wpf-set-up-container{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
    .wpf-set-up-container p{
        font-size: 12px;
        color: darkgrey;
    }
</style>