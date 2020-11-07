<template>
  <!-- 密码登录 -->
  <div>
    <div class="wyl_login_img">
      <img src="../../assets/Login/login.png" alt="" />
    </div>
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="用户名" />
      <van-field v-model="password" label="密码" placeholder="密码" />
    </van-cell-group>
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
      this.$router.push({
       path: "/register",
       name:'register'
      });
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
          var token = res.data.data.remember_token;
          window.localStorage.setItem("token", token);
          console.log(res.data.data.is_new);
          if (res.data.data.is_new < 1) {
            this.$router.push("/edit");
          } else {
            this.$router.push("/user");
          }
        });
    },
  },
};
</script>

<style scoped>
.wyl_login {
  width: 100%;
  height: 100vh;
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