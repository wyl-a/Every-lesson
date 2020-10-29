<template>
  <div>
    <div
      class="lecturerItem"
      v-for="(item, index) in lecturer"
      :key="index"
      @click="teacherDetails(item)"
    >
      <div class="lecturerItem_box">
        <div class="lecturerItem_box_left">
          <img :src="item.img" alt="" />
        </div>
        <div class="lecturerItem_box_right">
          <p>{{ item.name }}</p>
          <div class="van-ellipsis">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lecturer: {
      type: Array,
    },
  },
  methods: {
    teacherDetails(item) {
      this.$router.push({
        path: "/teacherXQ/introduce",
        query: { item: item },
      });
    },
  },
};
</script>

<style scoped>
.lecturerItem {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
}
.lecturerItem_box {
  width: 94%;
  height: 10vh;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.lecturerItem_box_left {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lecturerItem_box_left img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.lecturerItem_box_right {
  width: 80%;
}
.lecturerItem_box_right p {
  font-size: 0.7rem;
  color: gray;
}
.lecturerItem_box_right div {
  margin-top: 0.2rem;
  font-size: 0.55rem;
  color: gray;
}
</style>