<template>
  <div>
<<<<<<< HEAD
    <van-nav-bar
      v-show="isShow"
      :title="this.$route.meta.title"
      :left-arrow="isShowleft"
      @click-left="up"
    >
=======
    <van-nav-bar v-show="isShow" :title="this.$route.meta.title" :left-arrow="isShowleft" @click-left="up" @click-right="search">
>>>>>>> c4ee85dcbe970dd960731708c56063063aa9c6c9
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
    up() {
      this.$router.go(-1);
=======
    methods:{
        up(){
            this.$router.go(-1);
        },
        search(){
          this.$router.push('/search');
        }
>>>>>>> c4ee85dcbe970dd960731708c56063063aa9c6c9
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

<style>
</style>