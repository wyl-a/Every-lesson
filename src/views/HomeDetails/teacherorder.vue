<template>
  <div>
    <div class="zmb_bgd">
      <div class="zmb_bgd_navbar">
        <van-icon name="arrow-left" @click="onback" />
        <p>预约课程</p>
        <span></span>
      </div>
    </div>
    <div class="zmb_teacher">
      <img :src="teacherdata.avatar" alt="" />
      <div class="zmb_txt">
        <p>{{ teacherdata.real_name }}</p>
        <p>男 30年教龄</p>
      </div>
      <div class="zmb_guanzhu">
        <button class="zmb_guanzhu_btn" @click="blanche(teacherdata.id)">
          查看详情
        </button>
      </div>
    </div>
    <p class="FT_title">选择时间<span>（北京时间）</span></p>

    <van-tabs v-model="active" swipeable>
      <van-tab title="11/1"></van-tab>
      <van-tab title="11/2"></van-tab>
      <van-tab title="11/3"></van-tab>
      <van-tab title="11/4"></van-tab>
      <van-tab title="11/5"></van-tab>
      <van-tab title="11/6"></van-tab>
      <van-tab title="11/7"></van-tab>
      <van-tab title="11/8"></van-tab>
      <van-tab title="11/9"></van-tab>
      <van-tab title="11/10"></van-tab>
      <van-tab title="11/11"></van-tab>
      <van-tab title="11/12"></van-tab>
      <van-tab title="11/13"></van-tab>
    </van-tabs>

    <div class="zmb_count">
      <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="" />
      <p>暂无内容</p>
    </div>

    <van-button
      class="zmb_yvyue_btn"
      type="primary"
      color="#EB6100"
      block
      @click="onorder"
      >立即预约</van-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      isShow: 1,
      active: 2,
    };
  },
  methods: {
    //返回
    onback() {
      this.$router.go(-1);
    },
    //进入老师详情
    blanche(uid) {
      this.$router.push({
        path: "/teacherXQ",
        query: { id: uid },
      });
    },
    //立即预约
    onorder() {
      Toast("请选择预约事时间");
    },
  },
  computed: {
    teacherdata() {
      return this.$route.query.teacherdata;
    },
  },
};
</script>

<style>
body {
  background: #f0f2f5;
}
.zmb_bgd {
  width: 100%;
  height: 5rem;
  background: #5590eb;
}
.zmb_bgd_navbar {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.zmb_teacher {
  width: 95%;
  height: 4rem;
  margin: -3rem auto 0;
  font-size: 0.5rem;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}
.zmb_teacher img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.zmb_txt {
  flex: 1;
}
.zmb_guanzhu_btn {
  width: 3rem;
  height: 1rem;
  border: 1px solid #eb6100;
  border-radius: 1rem;
}
.FT_title {
  width: 100%;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #595959;
  padding-left: 0.72rem;
  margin: 0.5rem 0.72rem;
  line-height: 1rem;
  height: 1rem;
  font-size: 0.7rem;
  border-left: 3px solid #eb6100;
}
.zmb_yvyue_btn {
  position: fixed;
  bottom: 0;
  left: 0;
}
.zmb_count {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.zmb_count img {
  width: 40%;
}
.zmb_count p {
  width: 100%;
  font-size: 0.7rem;
  color: gray;
}
</style>