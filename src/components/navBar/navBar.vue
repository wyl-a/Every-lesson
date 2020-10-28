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
        <van-icon name="search" size="18" v-show="isShowright" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  methods: { 
=======
  methods: {
>>>>>>> 467b20a320661c6e5da88661a2d79d8b250afd70
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
<<<<<<< HEAD
=======
    isShowright() {
      return this.$route.meta.isShowright;
    },
>>>>>>> 467b20a320661c6e5da88661a2d79d8b250afd70
  },
};
</script>

<style>
</style>