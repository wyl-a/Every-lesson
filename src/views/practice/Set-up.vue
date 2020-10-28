<template>
    <div class="wpf-set-up">
<!--                下拉菜单-->
        <div>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" title="套卷分类"/>
                <van-dropdown-item v-model="value2" :options="option2" title="套卷状态"/>
            </van-dropdown-menu>
        </div>

<!--                图片-->
        <div class="wpf-set-up-container">
            <img src="shijuan.png" alt="">
            <p>请稍后，套卷正在赶来的路上啦</p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '111', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 },
                ],
                option2: [
                    { text: '全部', value: 'a' },
                    { text: '已做', value: 'b' },
                    { text: '未做', value: 'c' },
                ],
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