<template>
  <div>
    <div>
      <van-tabs v-model="active" color="red" title-active-color="red">
        <van-tab name="待上课" title="待上课"></van-tab>
        <van-tab name="已上课" title="已上课"></van-tab>
        <van-tab name="已取消" title="已取消"></van-tab>
      </van-tabs>
    </div>

    <div class="tab_mav_container">
      <div class="tab_mav_wrapper">
        <img src="xiaoren1.png" />
        <p>请登录后查看相关内容</p>
        <van-button type="warning" @click="onLogin">{{btnTitle}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "待上课",
      btn_tit:'登录/注册',
    };
  },
  methods: {
    onLogin() {
      if (localStorage.getItem('token')) {
        this.$router.push("/onevsone");
      }else{
        this.$router.push("/login");
      }
      
    },
  },
  computed: {
    btnTitle(){
      if (localStorage.getItem('token')) {
        return '立即约课'
      }else{
        return '登录/注册'
      }
    }
  },
};
</script>

<style scoped>
.tab_mav_container {
  width: 100vw;
  height: 75vh;
  background-color: #f0f2f5;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.tab_mav_wrapper {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.tab_mav_wrapper img {
  width: 50%;
}
.tab_mav_wrapper p {
  font-size: 12px;
  color: #333;
}
.van-button {
  margin-top: 0.5rem;
}
</style>