<template>
  <div>
    <div class="edit_box">
      <!-- 头像 -->
      <van-cell is-link title="头像" @click="show = true">
        <img src="../../assets/User/user.jpg" alt="" />
      </van-cell>
      <!-- 昵称 -->
      <van-cell is-link title="昵称">{{ name }}</van-cell>
      <!-- 手机号 -->
      <van-cell :closeable="false" title="手机号">{{ phone }}</van-cell>
      <!-- 性别 -->
      <van-cell is-link title="性别">{{ sex }}</van-cell>
      <!-- 出生日期 -->
      <van-cell is-link title="出生日期">2002-01-14</van-cell>
      <van-cell is-link title="所在城市">北京</van-cell>
      <van-cell is-link title="学科">全栈</van-cell>
      <!-- 头像的动作面板 -->
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "杨狗蛋",
      phone: "15810195203",
      show: false,
      sex: "男",
      actions: [{ name: "拍照" }, { name: "从手机相册选择" }],
    };
  },
  methods: {
    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style>
body {
  background: rgb(240, 240, 240);
}
.edit_box {
  width: 100%;
  background: white;
  margin-top: 0.5rem;
}
.edit_box img {
  width: 1.5rem;
  border-radius: 50%;
}
</style>