<template>
  <div>
    <div class="updataPass" @click="onClickPassword">修改密码</div>
    <van-button
      @click="logOut"
      class="zmb_out_btn"
      type="primary"
      color="#EB6100"
      block
      >退出登录</van-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    //退出账号
    logOut() {
      this.$router.push("/");
      localStorage.removeItem("token");
    },
    //进入修改密码页面
    onClickPassword(){
      this.$router.push("/setpassword")
    }
  },
};
</script>

<style>
.updataPass {
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  background: white;
  color: gray;
  padding: 0.5rem;
}
.zmb_out_btn {
  width: 95%;
  height: 2rem;
  margin: 0 auto;
  border-radius: 0.4rem;
}
</style>