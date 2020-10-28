<template>
  <div>
    <van-nav-bar
      v-show="isShow"
      :title="this.$route.meta.title"
      :left-arrow="isShowleft"
      @click-left="up"
      @click-right="search"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: { 
    up() {
      this.$router.go(-1);
    },
    search() {
      this.$router.push("/search");
    },
  },
  computed: {
    isShow() {
      return this.$route.meta.isShow;
    },
    isShowleft() {
      return this.$route.meta.isShowleft;
    },
  },
};
</script>

<style>
</style>