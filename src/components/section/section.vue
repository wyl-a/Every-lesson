<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    styles: {
      type: Object,
    },
  },
  computed: {
    activeheight: function () {
      var clientHeight = document.documentElement.clientHeight;
      var clientWidth = document.documentElement.clientWidth;
      if (!clientWidth) return;
      var fontSize = 20 * (clientWidth / 320);
      if (this.$route.meta.isShow) {
        clientHeight -= 3.2 * fontSize;
      }
      if (this.$route.meta.isShowTab) {
        clientHeight -= 3.2 * fontSize;
      }
      //返回内容容器组件高度
      return clientHeight / fontSize + "rem";
    },
    style: function () {
      return {
        //如果有navBar设置上边距
        marginTop: this.$route.meta.isShow ? "2rem" : "0px",
        height: this.activeheight,
        overflow: "auto",
        ...this.styles,
      };
    },
  },
};
</script>

<style>
</style>