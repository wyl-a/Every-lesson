<template>
  <div>
    <div class="wyl_bottomBar" v-show="this.$route.meta.bottomBar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wyl_bottomBar {
  width: 100%;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #e6e6e6;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>