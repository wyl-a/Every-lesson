<template>
  <div>
    <van-nav-bar
      title="我的学习卡"
      right-text="学习卡兑换"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="top"></div>
    <div class="xxbox">
      <img src="/shijuan.png" alt="" />
      <p>暂无兑换记录</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.push({
        path: "/dhuanxxka",
      });
    },
  },
};
</script>

<style scoped>
.xxbox{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 0.6rem;
  color: rgb(150, 150, 150);
  text-align: center;
}
.top{
  width: 100%;
  height: 50px;
}
</style>