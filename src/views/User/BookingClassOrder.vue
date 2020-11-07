<template>
  <div>
    <div class="booking-tab">
      <van-tabs v-model="active">
        <van-tab title="全部订单">
          <img src="/shijuan.png" alt="" />
          <p >暂无订单</p>
        </van-tab>
        <van-tab title="待支付">
          <img src="/shijuan.png" alt="" />
          <p>暂无订单</p>
        </van-tab>
        <van-tab title="已完成">
          <img src="/shijuan.png" alt="" />
          <p>暂无订单</p>
        </van-tab>
        <van-tab title="已取消">
          <img src="/shijuan.png" alt="" />
          <p>暂无订单</p>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style scoped>
.top{
  width: 100%;
  height: 50px;
}
.booking-tab img {
  width: 60%;
  margin-left: 20%;
}
.booking-tab p {
  text-align: center;
  font-size: 0.6rem;
  color: rgb(170, 170, 170);
}
</style>