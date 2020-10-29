<template>
  <div>
    <!-- 讲师详情页面======================================================================= -->
    <div class="zmb_bgd">
      <div class="zmb_back" @click="back">&lt;</div>
      <div class="zmb_title">讲师详情</div>
    </div>
    <div class="zmb_card">
      <img :src="card.img" alt="" />
      <div class="zmb_txt">
        <p>{{ card.name }}</p>
        <p>男 30年教龄</p>
      </div>
      <div class="zmb_guanzhu">
        <button class="zmb_guanzhu_btn">关注</button>
      </div>
    </div>
    <div class="zmb_introduce">
      <van-tabs v-model="activeName" @click="onClick">
        <van-tab title="讲师介绍" name="/teacherXQ/introduce"></van-tab>
        <van-tab title="主讲课程" name="/teacherXQ/course"></van-tab>
        <van-tab title="学员评价" name="/teacherXQ/trainee"></van-tab>
      </van-tabs>
      <router-view></router-view>
      <van-button class="zmb_yvyue_btn" type="primary" color="#EB6100" block>立即预约</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  },
  mounted() {},
  methods: {
    onClick(name) {
      this.$router.push({
        path: name,
        query: { item: this.card },
      });
    },
    back(){
        this.$router.go(-1);
    }
  },
  computed: {
    card() {
      return this.$route.query.item;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: rgb(245, 245, 245);
}
.zmb_bgd {
  width: 100%;
  height: 3rem;
  background: #5facf9;
  display: flex;
  padding: 0.5rem 0;
  color: white;
}
.zmb_back {
  width: 1rem;
  margin-left: 1rem;
}
.zmb_title {
  flex: 1;
  text-align: center;
}
.zmb_card {
  font-size: 0.5rem;
  width: 95%;
  height: 4rem;
  margin: -1.8rem auto 0;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}
.zmb_card img {
  width: 2.5rem;
  height: 2.5rem;
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
.zmb_introduce {
  margin-top: 0.5rem;
  width: 100%;
  background: white;
  font-size: 0.8rem;
}
.zmb_yvyue_btn{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>