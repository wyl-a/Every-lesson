<template>
  <div>
    <van-nav-bar
      title="我的学习"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="sign" />
      </template>
    </van-nav-bar>
    <div style="height: 2rem"></div>
    <van-tabs v-model="active">
      <van-tab title="直播课(0)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="点播课(0)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="音频课(O)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="图文课(0)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="面授课(0)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
      <van-tab title="会员课(0)">
        <div class="body">
          <img src="/shijuan.png" alt="" />
          <p>还没有课程，快去选择课程学习吧</p>
          <van-button type="warning" @click="onClick">选择课程</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClick() {
      this.$router.push({
        path: "/course",
      });
    },
    onClickRight() {
        this.$router.push({
            path:'/kechengrili'
        })
    },
  },
};
</script>

<style scoped>
.body{
  text-align: center;
  font-size: 0.6rem;
}
.body button{
    margin-top: 3rem;
}
</style>