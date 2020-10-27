<template>
  <div id="app">
    <router-view />
    <BottomBar>
      <BottomBox path="/">
        <img slot="img" src="./assets/Bottom/bottomBar1.png" alt="" />
        <img slot="img_s" src="./assets/Bottom/bottom1.png" alt="" />
        <p slot="title">首页</p>
      </BottomBox>
      <BottomBox path="/course">
        <img slot="img" src="./assets/Bottom/bottomBar2.png" alt="" />
        <img slot="img_s" src="./assets/Bottom/bottom2.png" alt="" />
        <p slot="title">课程</p>
      </BottomBox>
      <BottomBox path="/appointment">
        <img slot="img" src="./assets/Bottom/bottomBar3.png" alt="" />
        <img slot="img_s" src="./assets/Bottom/bottom3.png" alt="" />
        <p slot="title">约课记录</p>
      </BottomBox>
      <BottomBox path="/practice">
        <img slot="img" src="./assets/Bottom/bottomBar4.png" alt="" />
        <img slot="img_s" src="./assets/Bottom/bottom4.png" alt="" />
        <p slot="title">练习</p>
      </BottomBox>
      <BottomBox path="/user">
        <img slot="img" src="./assets/Bottom/bottomBar5.png" alt="" />
        <img slot="img_s" src="./assets/Bottom/bottom5.png" alt="" />
        <p slot="title">我的</p>
      </BottomBox>
    </BottomBar>
  </div>
</template>
<script>
import BottomBar from "./components/Bottom/bottomBar";
import BottomBox from "./components/Bottom/bottomBox";
export default {
  components: {
    BottomBar,
    BottomBox,
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  background: #F0F2F5;
}
</style>
