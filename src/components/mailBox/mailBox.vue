<template>
  <div class="wyl_mailBox" v-show="this.$route.meta.email" @click="onClick">
    <img src="../../assets/mailBox/youxiang.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$router.push("/email");
    },
  },
};
</script>

<style>
.wyl_mailBox {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: blue;
  position: fixed;
  bottom: 4.5rem;
  right: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>