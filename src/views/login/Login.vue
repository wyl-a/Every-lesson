<template>
  <!-- 密码登录 -->
  <div class="wyl_login">
    <div class="wyl_login_img">
      <img src="../../assets/Login/login.png" alt="" />
    </div>
    <div>
      <van-form>
        <van-field
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-form>
    </div>
    <div class="wyl_login_register">
      <span @click="retrieve">找回密码</span>
      <div>
        <span @click="onRegister">注册/验证码登录</span>
      </div>
    </div>
    <div class="wyl_login_button">
      <button @click="onClickLogin">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    retrieve() {
      this.$router.push("/retrieve");
    },
    onRegister() {
      this.$router.push("/register");
    },
    //登录
    onClickLogin() {
      this.$APP
        .login({
          mobile: this.username,
          password: this.password,
          type: 1,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.data.remember_token);
          let token =res.data.data.remember_token
          window.localStorage.setItem("token",token)
          this.$router.push('/user')
        });
    },
  },
};
</script>

<style scoped>
.wyl_login {
  width: 100%;
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
.wyl_login_register {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.6rem;
  color: gray;
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
</style>