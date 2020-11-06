<template>
  <div>
    <van-nav-bar
      v-show="isShow"
      :title="this.$route.meta.title"
      :left-arrow="isShowleft"
      @click-left="up"
      @click-right="search"
      fixed
    >
      <template #right>
        <van-icon name="search" size="18" v-show="isShowright" />
      </template>
    </van-nav-bar>
    <!-- <div class="box"></div> -->
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
    isShowright() {
      return this.$route.meta.isShowright;
    },
  },
};
</script>

<style scoped>
.box{
  width: 100%;
  height: 50px;
}
</style>