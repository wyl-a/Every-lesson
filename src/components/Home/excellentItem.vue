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
            <p style="font-size: 0.6rem; color: gray">共1课时</p>
            <img :src="item.icon" alt="" />
          </div>
        </div>
        <div class="excellent_course_box_bottom">
          <div class="excellent_course_box_bottom_img">
            <img :src="item.cover_img" alt="" />
          </div>
          <div class="excellent_course_box_bottom_title">
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div class="excellent_course_box_registration">
          <div style="font-size: 0.6rem; color: gray">
            报名人数{{ item.apply }}
          </div>
          <div style="font-size: 0.8rem; color: red">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    excellent_course: {
      type: Array,
    },
  },
  methods:{
     courseitem(item) {
      this.$router.push({
        path: "/courseitem",
        query: {
          item,
        },
      });
    },
  }
};
</script>

<style>
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