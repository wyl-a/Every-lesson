<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    onClickRight() {
      if (this.value.length!=0) {
        localStorage.setItem("value", JSON.stringify(this.value));
      }
      this.$router.push("/edit");
    },
  },
};
</script>

<style scoped>
</style>