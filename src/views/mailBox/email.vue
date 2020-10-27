<template>
  <div class="wyl_email">
    <div class="wyl_email_box">
      <div class="wyl_email_left">给我们留言</div>
      <div class="wyl_email_right" @click="onReturn">
        <van-icon name="arrow-down" />
      </div>
    </div>

    <div class="wyl_email_title">
      <div class="wyl_email_title_box">
        <p>您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，</p>
        <p>我们将尽快联系并解决您的问题</p>
      </div>

      <div class="wyl_email_phone">
        <p>手机</p>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入" />
        </van-cell-group>
      </div>

      <div>
        <p>留言内容</p>
        <van-field
          v-model="message"
          rows="2"
          :autosize="{ maxHeight: 200, minHeight: 100 }"
          maxHeight="100"
          minHeight="50"
          type="textarea"
          placeholder="请输入"
        />
      </div>
      <div class="wyl_email_button">
        <button>提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message: "",
    };
  },
  methods:{
      onReturn(){
          this.$router.go(-1)
      }
  }
};
</script>

<style>
.wyl_email {
  width: 100%;
  height: 100vh;
  background: #e6e6e6;
}
.wyl_email_box {
  width: 100%;
  height: 3rem;
  background: blue;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.6rem;
}
.wyl_email_left {
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_email_right {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_email_title {
  width: 100%;
  height: 3rem;
  font-size: 0.5rem;
  padding-top: 20px;
}
.wyl_email_title_box {
  width: 100%;
  height: 2rem;
}
.wyl_email_phone {
  width: 100%;
  height: 80px;
}
.wyl_email_button {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_email_button button {
  width: 85%;
  height: 45px;
  background: blue;
  border: none;
  color: white;
}
</style>