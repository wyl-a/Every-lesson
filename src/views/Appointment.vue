<template>
  <div>
    <div>
      <van-tabs
        v-model="active"
        color="red"
        @click="none"
        title-active-color="red"
      >
        <van-tab name="待上课" title="待上课"></van-tab>
        <van-tab name="已上课" title="已上课"></van-tab>
        <van-tab name="已取消" title="已取消"></van-tab>
      </van-tabs>
    </div>

    <div :class="flag != '待上课' ? 'none' : ''" class="tab_mav_container">
      <div class="tab_mav_wrapper">
        <img src="xiaoren1.png" />
        <p>还没有待上记录哦</p>
        <van-button type="warning" @click="onLogin">{{ btnTitle }}</van-button>
      </div>
    </div>
    <div :class="flag != '已上课' ? 'none' : ''" class="tab_mav_container">
      <div class="tab_mav_wrapper">
        <img src="xiaoren1.png" />
        <p>还没有上课记录哦</p>
        <van-button type="warning" @click="onLogin">{{ btnTitle }}</van-button>
      </div>
    </div>
    <div :class="flag != '已取消' ? 'none' : ''" class="tab_mav_container">
      <div class="tab_mav_wrapper">
        <img src="xiaoren1.png" />
        <p>还没有取消上课记录哦</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "待上课",
      btn_tit: "登录/注册",
      flag: "待上课",
    };
  },
  methods: {
    onLogin() {
      if (localStorage.getItem("token")) {
        this.$router.push("/onevsone");
      } else {
        this.$router.push("/login");
      }
    },
    none(name) {
      this.flag = name;
    },
  },
  computed: {
    btnTitle() {
      if (localStorage.getItem("token")) {
        return "立即约课";
      } else {
        return "登录/注册";
      }
    },
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
.none {
  display: none;
}
</style>