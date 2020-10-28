<template>
    <div class="wpf-exercise-collection">
        <!--                下拉菜单-->
        <div class="wpf-exercise-collection-top">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" title="题目类型"/>
            </van-dropdown-menu>
        </div>

        <!--                图片-->
        <div class="wpf-exercise-collection-mav">
            <img src="shijuan.png" alt="">
            <p>暂无收藏记录！</p>
        </div>
    </div>
</template>

<script>
    export default {
data(){
    return{
        value1:0,
        option1:[
            { text: '全部', value: 'a' },
            { text: '已做', value: 'b' },
            { text: '未做', value: 'c' },
        ]
    }
}
    }
</script>

<style scoped>
    .wpf-exercise-collection-mav{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
    .wpf-exercise-collection-mav p{
        font-size: 12px;
        color: darkgrey;
    }
</style>