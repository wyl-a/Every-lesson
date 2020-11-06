<template>
  <div>
    <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div @click="nan" class="nan">
      <span>{{ nans }}</span>
      <van-icon name="success" color="red" v-show="!isShow" />
    </div>
    <div @click="nv" class="nv">
      <span>{{ nvs }}</span>
      <van-icon name="success" color="red" v-show="isShow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      nans: "男",
      nvs: "女",
    };
  },
  methods: {
    nan() {
      this.isShow = false;
      localStorage.setItem("sex", JSON.stringify(this.nans));
    },
    nv() {
      this.isShow = !this.isShow;
      localStorage.setItem("sex", JSON.stringify(this.nvs));
    },
    onClickLeft() {
      this.$router.go("-1");
    },
    onClickRight() {
      this.$router.push("/edit");
    },
  },
};
</script>

<style scoped>
.van-cell {
  border: 1px solid gray;
  background: #e6e6e6;
}
.nan {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  background: #e6e6e6;
}
.nv {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  background: #e6e6e6;
  margin-top: 10px;
}
</style>