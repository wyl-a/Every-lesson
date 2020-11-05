<template>
  <div class="courseitem">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <div @click="share" class="classDetails_box_header_img">
          <van-icon name="share-o" />
        </div>
      </template>
    </van-nav-bar>

    <!-- 二维码 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <p>分享</p>
          <div class="imrUrl">
            <img :src="imrUrl" />
          </div>
        </div>
      </div>
    </van-overlay>

    <!--  课程详情 -->
    <div class="lzh-courseitembox">
      <div class="lzh-itemtitle">
        <div class="lzh-itemtitleleft">{{ list.title }}</div>
        <div class="lzh-itemtitleright">
          <van-icon name="star-o" @click="onCollectOK" v-show="!isShow" />
          <van-icon
            name="star"
            @click="onCollectNO"
            v-show="isShow"
            color="red"
          />
        </div>
      </div>
      <div class="lzh-mf">{{ list.price }}</div>
      <div class="lzh-leshi">
        共{{ list.total_periods }}课时 | {{ list.sales_num }}人报名
      </div>
      <div class="lzh-leshi">开课时间：2020.03.16 18:30 - 2020.03.20 15:30</div>
    </div>
    <hr class="lzh-spx" />
    <div class="lzh-jiaoxue">
      <div>教学团队</div>
      <div class="lzh-jiaoxueimg" @click="onTeacher(teacher.teacher_id)">
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          :src="teacher.teacher_avatar"
        />
        <p>{{ teacher.teacher_name }}</p>
      </div>
    </div>
    <hr class="lzh-spx" />
    <div class="lzh-kecheng">
      <p>课程介绍</p>
      <p v-html="list.course_details" style="font-size: 0.6rem"></p>
    </div>
    <hr class="lzh-spx" />
    <div class="lzh-kechengdagang">
      课程大纲
      <div
        style="font-size: 0.6rem; margin-top: 0.5rem"
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
            :src="teacher.teacher_avatar"
          />
        </div>
        <div class="lzh-pinglhezi-right">
          <div>
            13545688745
            <img src="/xzxingxing.png" alt="" />
            <img src="/xzxingxing.png" alt="" />
            <img src="/xzxingxing.png" alt="" />
            <img src="/xzxingxing.png" alt="" />
            2020.03.25 16:45
          </div>
          <div>dskhafdifh</div>
        </div>
      </div>
    </div>
    <div style="height: 2rem"></div>
    <div class="lzh-lijiboaming" v-show="list.is_buy == 1">
      <van-button type="warning" @click="onStudy">立即学习</van-button>
    </div>
    <div class="lzh-lijiboaming" v-show="list.is_buy == 0">
      <van-button type="warning" @click="onApply">立即报名</van-button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false, //判断是否让遮罩层出现
      imrUrl: "", // 图片的地址
      list: [],
      teacher: [],
      isShow: false,
      id: "",
    };
  },
  mounted() {
    this.$APP.courseInfo(this.$route.query.id).then((res) => {
      console.log(res.data.data.teachers);
      this.list = res.data.data.info;
      this.id = res.data.data.info.id;
      this.teacher = res.data.data.teachers[0];
      if (res.data.data.info.is_collect == 1) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  methods: {
    //跳转到老师详情
    onTeacher(id) {
      console.log(id);
      this.$router.push({
        path: "/teacherDetails",
        query: {
          id: id,
        },
      });
    },
    //立即报名
    onApply() {
      this.$APP
        .downOrder({
          shop_id: this.id,
          type: 5,
        })
        .then((res) => {
          console.log(res);
        });
    },
    onStudy() {
      this.$router.push("/study");
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击分享
    share() {
      this.show = true;
      let url = location.href;
      console.log(url);
      QRCode.toDataURL(url)
        //在这里拿到地址，把它赋值给data里面定义的值imrUrl
        .then((tpian) => {
          console.log(tpian);
          this.imrUrl = tpian;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    //收藏
    onCollectOK() {
      let { data } = this.$APP.collectOK({
        course_basis_id: this.$route.query.id,
        type: 1,
      });
      this.isShow = true;
    },
    //取消收藏
    onCollectNO() {
      this.isShow = false;
      this.$APP.collectNO(this.list.collect_id).then((res) => {});
    },
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
  font-size: 0.55rem;
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
  width: 3rem;
  margin-top: 0.5rem;
}
.lzh-kecheng {
  height: 100%;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  align-items: center;
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
.lzh-pinglhezi-left {
  width: 12%;
}
.lzh-pinglhezi-right img {
  width: 0.5rem;
}
.lzh-pinglhezi-right {
  width: 88%;
}
.imrUrl {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>