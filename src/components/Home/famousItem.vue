<template>
  <div>
    <div
      class="wyl_famousItem"
      v-for="(item, index) in famous"
      :key="index"
      @click="onFamous(item)"
    >
      <div class="wyl_famousItem_box">
        <div class="wyl_famousItem_box_left">
          <img :src="item.teacher_avatar" alt="" />
        </div>
        <div class="wyl_famousItem_box_right">
          <p>{{ item.teacher_name }}</p>
          <div class="van-ellipsis">{{ item.introduction }}</div>
        </div>
      </div>
    </div>
    <van-popup
      v-model="show"
      :style="{ height: '48%', width: '80%' }"
      closeable
    >
      <div class="popup">
        <img src="../../assets/popup.png" alt="" width="100%" />
        <p style="font-size: 0.6rem; text-align: center">赶紧登陆一下吧</p>
        <p style="color: gray; font-size: 0.5rem; text-align: center">
          立即预约一对一辅导，浏览更多视频课程~
        </p>
        <van-button
          type="warning"
          block
          round
          style="width: 50%; margin-left: 25%;margin-top: 5%"
          @click="onlogin"
          >立即登陆</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    famous: {
      type: Array,
    },
  },
  methods: {
    onFamous(item) {
      if (!localStorage.getItem("token")) {
        this.show = true;
      } else {
        this.$router.push({
          path: "/teacherDetails",
          query: { id: item.teacher_id },
        });
      }
    },
    onlogin() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<style scoped>
.van-popup {
  border-radius: 0.5rem;
}
.popup {
  width: 100%;
  height: 100%;
}
.wyl_famousItem {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
}
.wyl_famousItem_box {
  width: 94%;
  height: 10vh;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.wyl_famousItem_box_left {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_famousItem_box_left img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.wyl_famousItem_box_right {
  width: 80%;
}
.wyl_famousItem_box_right p {
  font-size: 0.7rem;
  color: gray;
}
.wyl_famousItem_box_right div {
  margin-top: 0.2rem;
  font-size: 0.55rem;
  color: gray;
}
</style>