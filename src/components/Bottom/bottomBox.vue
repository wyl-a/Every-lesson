<template>
  <div>
    <div class="wyl_bottomBox" @click="onClick">
      <div v-if="isBottom" class="wyl_img_s">
        <slot name="img_s"></slot>
      </div>
      <div v-else class="wyl_img">
        <slot name="img"></slot>
      </div>
      <div :class="isBottom?'wyl_title_s':'wyl_title'">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    isBottom: function () {
      return this.path === this.$route.path;
    },
  },
  methods: {
    onClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.wyl_bottomBox {
  width: 100%;
}
.wyl_img_s {
  width: 100%;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_img_s img {
  width: 1rem;
  height: 1rem;
}
.wyl_img {
  width: 100%;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_img img {
  width: 1rem;
  height: 1rem;
}
.wyl_title{
  width: 100%;
  height: 1rem;
  font-size: 0.6rem;
  color: gray;
}
.wyl_title_s{
  width: 100%;
  height: 1rem;
  font-size: 0.6rem;
  color: red;
}
</style>