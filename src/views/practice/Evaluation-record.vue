<template>
    <div class="wpf-evaluation-record">
        <!--                下拉菜单-->
        <div class="wpf-evaluation-record-top-container">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" title="类型不限"/>
                <van-dropdown-item v-model="value2" :options="option2" title="时间"/>
            </van-dropdown-menu>
        </div>

        <!--                图片-->
        <div class="wpf-evaluation-record-mav">
            <img src="shijuan.png" alt="">
            <p>该时段您没有留下测评记录哦！</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Evaluation-record",
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
    .wpf-evaluation-record-mav{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
    .wpf-evaluation-record-mav p{
        font-size: 12px;
        color: darkgrey;
    }
</style>