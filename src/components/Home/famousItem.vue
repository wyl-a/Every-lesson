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
  </div>
</template>

<script>
export default {
  props: {
    famous: {
      type: Array,
    },
  },
  methods: {
    onFamous(item) {
      this.$router.push({
        path: "/teacherDetails",
        query: { id:item.teacher_id},
      });
    },
  },
};
</script>

<style scoped>
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