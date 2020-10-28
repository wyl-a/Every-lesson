<template>
    <div class="wpf-wrong-question-practice">
        <!--                下拉菜单-->
        <div class="wpf-simulation-test-top">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" title="类型不限"/>
                <van-dropdown-item disabled title="巩固全部错题"/>
                <van-dropdown-item disabled title="移出错题"/>
            </van-dropdown-menu>
        </div>

        <!--                图片-->
        <div class="wpf-simulation-test-container">
            <img src="shijuan.png" alt="">
            <p>暂无错题记录</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Wrong-question-practice",
        data() {
            return {
                value1: 0,
                option1: [
                    { text: '111', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 },
                ],
            };
        },
    }
</script>

<style scoped>
    .wpf-simulation-test-container{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
    .wpf-simulation-test-container p{
        font-size: 12px;
        color: darkgrey;
    }
</style>