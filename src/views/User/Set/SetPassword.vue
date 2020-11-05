<template>
  <div>
    <div>
      <div class="wyl_retrieve">
        <van-field v-model="sms" center clearable placeholder="请输入手机号">
          <template #button>
            <a
              style="color: red"
              v-show="isShow == false"
              size="small"
              type="primary"
              @click="onClickSend"
              >发送验证码</a
            >
            <a style="color: gray" v-show="isShow == true"
              >获取验证码({{ num }})</a
            >
          </template>
        </van-field>
        <van-cell-group>
          <van-field v-model="sss" placeholder="请输入验证码" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="password" placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <div class="wyl_login_button">
        <button @click="onClickRegister">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      sms: "",
      sss: "",
      password: "",
      isShow: false,
      num: 60,
    };
  },
  methods: {
    onClickSend() {
      this.$APP
        .smsCode({
          mobile: this.sms,
          sms_type: "getPassword",
        })
        .then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.countDown();
            Toast(res.data.msg);
          } else if (res.data.code == 201) {
            Toast(res.data.msg);
          }
        });
    },
    onClickRegister() {
      this.$APP
        .change({
          mobile: this.sms,
          password: this.password,
          sms_code: this.sss,
        })
        .then((res) => {
          if (res.data.data.is_new < 1) {
            this.$router.push("/edit");
          } else {
            this.$router.push("/user");
          }
        });
    },
    //倒计时
    countDown() {
      this.isShow = true;
      setInterval(() => {
        this.num--;
        if (this.num <= 0) {
          this.isShow = false;
          this.num = 60;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.wyl_retrieve {
  width: 100%;
  height: 25vh;
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