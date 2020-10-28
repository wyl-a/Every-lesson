<template>
    <div class="wpf-simulation-test">
        <!--                下拉菜单-->
        <div class="wpf-simulation-test-top">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" title="考试类型"/>
                <van-dropdown-item v-model="value2" :options="option2" title="考试状态"/>
                <van-dropdown-item v-model="value3" :options="option2" title="参考状态"/>
            </van-dropdown-menu>
        </div>

        <!--                图片-->
        <div class="wpf-simulation-test-container">
            <img src="shijuan.png" alt="">
            <p>请稍后，套卷正在赶来的路上啦</p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: 'a',
                value2: 'b',
                value2: 'c',
                option1: [
                    { text: '全部', value: 'a' },
                    { text: '模拟考试', value: 'a1' },
                    { text: '正式考试', value: 'a2' },
                ],
                option2: [
                    { text: '全部', value: 'b' },
                    { text: '未开始', value: 'b1' },
                    { text: '进行中', value: 'b2' },
                    { text: '已结束', value: 'b3' },
                ],
                option3: [
                    { text: '全部', value: 'c1' },
                    { text: '已做', value: 'c2' },
                    { text: '未做', value: 'c3' },
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