<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-row>
      <van-col span="8">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>
      <van-col span="16">span: 8</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
    };
  },
  methods: {},
};
</script>

<style>
</style>