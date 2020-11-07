<template>
  <div>
    <div class="booking-tab">
      <van-tabs v-model="active">
        <van-tab title="未使用">
          <img src="/shijuan.png" alt="" />
          <p >暂无优惠券</p>
        </van-tab>
        <van-tab title="已使用">
          <img src="/shijuan.png" alt="" />
          <p>暂无优惠券</p>
        </van-tab>
        <van-tab title="已过期">
          <img src="/shijuan.png" alt="" />
          <p>暂无优惠券</p>
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
.booking-tab img {
  width: 60%;
  margin-left: 20%;
}
.booking-tab p {
  text-align: center;
  font-size: 0.6rem;
  color: rgb(170, 170, 170);
}
.top{
  width: 100%;
  height: 50px;
}
</style>