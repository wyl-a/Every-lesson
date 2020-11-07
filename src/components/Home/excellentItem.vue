<template>
  <div>
    <div
      class="excellent_course"
      v-for="(item, index) in excellent_course"
      :key="index"
      @click="courseitem(item)"
    >
      <div class="excellent_course_box">
        <div class="excellent_course_box_top">
          <div class="excellent_course_box_top_title">{{ item.title }}</div>
          <div class="excellent_course_box_top_titles">
            <p style="font-size: 0.6rem; color: gray">
              共{{ item.course_type }}课时
            </p>
            <img src="@/assets/baoming.png" alt="" width="25%" />
          </div>
        </div>
        <div class="excellent_course_box_bottom">
          <div class="excellent_course_box_bottom_img">
            <img :src="item.cover_img" alt="" />
          </div>
          <div class="excellent_course_box_bottom_title">
            <div>{{ item.teachers_list[0].teacher_name }}</div>
          </div>
        </div>
        <div class="excellent_course_box_registration">
          <div style="font-size: 0.6rem; color: gray">
            报名人数{{ item.sales_num }}人
          </div>
          <div style="font-size: 0.8rem; color: red">免费</div>
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
    excellent_course: {
      type: Array,
    },
  },
  methods: {
    courseitem(item) {
      if (!localStorage.getItem("token")) {
        this.show = true;
      } else {
        this.$router.push({
          path: "/courseitem",
          query: {
            id: item.id,
          },
        });
      }
    },
     onlogin(){
      this.$router.push({
        path:"/login"
      })
    }
  },
  mounted() {
    console.log(this.excellent_course);
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
.excellent_course {
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
}
.excellent_course_box {
  width: 94%;
  height: 35vh;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}
.excellent_course_box_top {
  width: 100%;
  height: 18vh;
}
.excellent_course_box_top_title {
  width: 90%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: gray;
}
.excellent_course_box_top_titles {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.excellent_course_box_bottom {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
.excellent_course_box_bottom_img {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.excellent_course_box_bottom_img img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.excellent_course_box_bottom_title {
  width: 20%;
  font-size: 0.8rem;
}
.excellent_course_box_registration {
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>