<template>
  <!-- 手机验证登录 -->
  <div>
    <div class="wyl_login_img">
      <img src="../../assets/Login/login.png" alt="" />
    </div>
    <div class="wyl_register">
      <van-field v-model="sms" center clearable placeholder="请输入手机号">
        <template #button>
          <van-button size="small" type="primary" @click="onClickSend">发送验证码</van-button>
        </template>
      </van-field>
      <van-cell-group>
        <van-field v-model="sss" placeholder="请输入验证码" />
      </van-cell-group>
    </div>
    <div class="wyl_register_pass">
      <span>*未注册的手机号将自动注册</span>
      <span @click="onLogin">使用密码登录</span>
    </div>
    <div class="wyl_login_button">
      <button @click="redister">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sms: "",
      sss: "",
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/login");
    },
    onClickSend() {
      this.$APP
        .smsCode({
          mobile: this.sms,
          sms_type: "login",
        })
        .then((res) => {
          console.log(res);
        });
    },
    redister() {
      this.$APP
        .login({
          mobile: this.sms,
          sms_code: this.sss,
          client: 1,
          type: 2,
        })
        .then((res) => {
          console.log(res);
          let token = res.data.data.remember_token;
          window.localStorage.setItem("token", token);
          this.$router.push("/edit");
        });
    },
  },
};
</script>

<style scoped>
.wyl_register {
  width: 100%;
  height: 15vh;
}
.wyl_login_img {
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_login_img img {
  width: 80%;
}

.wyl_login_button {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
}
.wyl_login_button button {
  width: 90%;
  height: 7vh;
  background: orange;
  border-radius: 18px;
  border: none;
}
.wyl_register_pass {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  font-size: 0.6rem;
  color: gray;
}
</style>