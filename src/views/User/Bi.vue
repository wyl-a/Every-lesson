<template>
  <div class="wpf-bi">
    <div class="wpf-bi-header">
      <div class="wpf-bi-header-left">
        <span class="wpf-bi-header-yue">我的余额</span>
        <span class="wpf-bi-header-bi"> 0 学习币</span>
      </div>
    </div>
    <!--        中间数据-->
    <div class="wpf-bi-center">
      <div class="wpf-bi-center-mav" v-for="(item, index) in list" :key="index">
        <div>{{ item.title }}</div>
        <div style="color: red">{{ item.sum }}</div>
      </div>
    </div>
    <div class="wpf-bi-bottom">
      <van-button color="linear-gradient(to right, gainsboro, gainsboro)" block
        >立即充值</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "30000.00学习币", sum: "￥30000.00" },
        { title: "20000.00学习币", sum: "￥20000.00" },
        { title: "10000.00学习币", sum: "￥10000.00" },
        { title: "8000.00学习币", sum: "￥8000.00" },
        { title: "5000.00学习币", sum: "￥5000.00" },
        { title: "3000.00学习币", sum: "￥3000.00" },
        { title: "1000.00学习币", sum: "￥1000.00" },
        { title: "500.00学习币", sum: "￥500.00" },
        { title: "100.00学习币", sum: "￥100.00" },
        { title: "1.00学习币", sum: "￥1.00" },
      ],
    };
  },
};
</script>

<style scoped>
.wpf-bi-center-mav:hover {
  box-shadow: 5px 5px 10px #000;
  background-image: linear-gradient(#e66465, #9198e5);
}
/*中间*/
.wpf-bi-center {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.wpf-bi-center-mav {
  width: 95%;
  height: 8vh;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 20px;
}
.wpf-bi-center-mav div {
  font-size: 14px;
}
.wpf-bi {
  width: 100vw;
  height: 85vh;
  background-color: #eee;
  overflow-y: scroll;
}
.wpf-bi-header {
  width: 100%;
  height: 8vh;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
}
.wpf-bi-header-left {
  width: 40%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.wpf-bi-header-yue {
  font-size: 14px;
}
.wpf-bi-header-bi {
  font-size: 14px;
  color: red;
}
.wpf-bi-bottom {
  width: 100%;
  height: 8vh;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>