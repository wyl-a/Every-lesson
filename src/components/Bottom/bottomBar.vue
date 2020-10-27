<template>
  <div>
<<<<<<< HEAD
    <div class="wyl_bottomBar" v-show="isTab">
=======
    <div class="wyl_bottomBar" v-show="this.$route.meta.bottomBar">
>>>>>>> c208ab8025fc5041c2d3e9f7e6a08ab41b10c882
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isTab(){
      return this.$route.meta.isTab;
    }
  },
};
</script>

<style>
.wyl_bottomBar {
  width: 100%;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>