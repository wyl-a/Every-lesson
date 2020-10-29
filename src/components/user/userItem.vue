<template>
  <div class="user">
    <div
      class="userItem"
      v-for="(item, index) in list"
      :key="index"
      @click="onClickRouter(item.path)"
    >
      <div class="userItem_img">
        <img :src="item.icon" alt="" />
      </div>
      <div class="userItem_name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onClickRouter(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.user {
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.userItem {
  width: 25%;
  height: 10vh;
}
.userItem_img {
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userItem_img img {
  width: 28%;
}
.userItem_name {
  width: 100%;
  height: 4vh;
  font-size: 0.5rem;
  color: gray;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>