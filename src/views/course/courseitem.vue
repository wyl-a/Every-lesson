<template>
  <div class="courseitem">
    <!--  课程详情 -->
    <div class="lzh-courseitembox">
      <div class="lzh-itemtitle">
        <div class="lzh-itemtitleleft">
          {{ courseitem.title }}
        </div>
        <div class="lzh-itemtitleright">
          <img src="/xingxing.png" alt="" />
        </div>
      </div>
      <div class="lzh-mf">免费</div>
      <div class="lzh-leshi">共8课时 | 132人报名</div>
      <div class="lzh-leshi">开课时间：2020.03.16 18:30 - 2020.03.20 15:30</div>
    </div>
    <hr class="lzh-spx" />
    <div class="lzh-jiaoxue">
      <div>教学团队</div>
      <div class="lzh-jiaoxueimg">
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          :src="courseitem.cover_img"
        />李青
      </div>
    </div>
    <hr class="lzh-spx" />
    <div class="lzh-kecheng">课程介绍</div>
    <hr class="lzh-spx" />
    <div class="lzh-kechengdagang">
      课程大纲
      <div
        style="font-size: 0.3rem; margin-left: 1rem; margin-top: 0.5rem"
        v-for="i in 5"
        :key="i"
      >
        <p>
          <van-tag type="warning" style="margin-right: 0.3rem">回放</van-tag
          >第一讲第一课时
        </p>
        <p>李青 2020.03.16 18:30-19:30</p>
      </div>
    </div>
    <hr class="lzh-spx" style="margin-top: 1rem" />
    <div class="lzh-pinglu">
      课程评论
      <div class="lzh-pinglhezi" v-for="i in 5" :key="i">
        <div class="lzh-pinglhezi-left">
          <van-image
            round
            width="1.5rem"
            height="1.5rem"
            :src="courseitem.cover_img"
          />
        </div>
        <div class="lzh-pinglhezi-right">
          <div>
               13545688745 
               <img src="/xzxingxing.png" alt="">
               <img src="/xzxingxing.png" alt="">
               <img src="/xzxingxing.png" alt="">
               <img src="/xzxingxing.png" alt="">
               2020.03.25 16:45
          </div>
          <div>dskhafdifh</div>
        </div>
      </div>
    </div>
    <div style="height:3rem"></div>
    <div class="lzh-lijiboaming">
      <van-button type="warning">立即报名</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseitem: [],
    };
  },
  mounted() {
    this.courseitem = this.$route.query.item;
    console.log(this.courseitem);
  },
};
</script>

<style scoped>
.courseitem {
  font-size: 0.7rem;
}
.lzh-courseitembox {
  width: 100%;
}
.lzh-itemtitle {
  width: 100%;
  margin-top: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.lzh-itemtitleleft {
  width: 90%;
  margin-left: 1rem;
}
.lzh-itemtitleright {
  width: 10%;
}
.lzh-itemtitleright img {
  width: 1rem;
}
.lzh-mf {
  color: orange;
  margin-left: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.lzh-leshi {
  color: rgb(150, 150, 150);
  margin-left: 1rem;
  margin-bottom: 0.3rem;
}
.lzh-spx {
  width: 99%;
  height: 0.5rem;
  background: rgb(187, 187, 187);
}
.lzh-jiaoxue {
  padding-left: 1rem;
  padding-top: 0.5rem;
  height: 5rem;
}
.lzh-jiaoxueimg {
  width: 1.5rem;
  margin-top: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.lzh-kecheng {
  padding-left: 1rem;
  padding-top: 0.5rem;
  height: 2rem;
}
.lzh-kechengdagang {
  padding-left: 1rem;
  padding-top: 0.5rem;
}

.lzh-lijiboaming button {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.lzh-pinglu {
  padding-left: 1rem;
  padding-top: 0.5rem;
}
.lzh-pinglhezi {
  width: 100%;
  height: 3rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.lzh-pinglhezi-left{
 width: 15%;
}
.lzh-pinglhezi-right img{
    width: 0.5rem;
}
.lzh-pinglhezi-right{
  width: 85%;
}
</style>