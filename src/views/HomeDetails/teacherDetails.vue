<template>
  <div>
    <!-- 讲师详情页面-->
    <div class="zmb_bgd">
      <div class="zmb_back" @click="back">
        <van-icon name="arrow-left" />
      </div>
      <div class="zmb_title">讲师详情</div>
    </div>
    <div class="zmb_card">
      <img :src="item.avatar" alt="" />
      <div class="zmb_txt">
        <p>{{ item.real_name }}</p>
        <p>男</p>
        <p>{{ item.introduction }}</p>
      </div>
      <div class="zmb_guanzhu">
        <button class="zmb_guanzhu_btn" v-show="!isShow" @click="attentionOK">
          关注
        </button>
        <button class="zmb_guanzhu_btn" v-show="isShow" @click="attentionNO">
          已关注
        </button>
      </div>
    </div>
    <div class="zmb_introduce">
      <van-tabs>
        <van-tab title="讲师介绍">
          <div class="title_a">
            <div class="title_a1">教学年龄</div>
            <div class="title_a2">44年</div>
          </div>
          <div class="title_b">
            <div class="title_b1">授课价格</div>
            <div class="title_b2">400学习币</div>
          </div>
          <div class="title_c">
            <div class="title_c1">老师简介</div>
            <div class="title_c2">
              杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。
              长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，
              数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
            </div>
          </div>
        </van-tab>
        <van-tab title="主讲课程">
          <div
            class="excellent_course"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="excellent_course_box">
              <div class="excellent_course_box_top">
                <div class="excellent_course_box_top_title">
                  {{ item.title }}
                </div>
                <div class="excellent_course_box_top_titles">
                  <p style="font-size: 0.6rem; color: gray">
                    共{{ item.course_type }}课时
                  </p>
                  <img src="@/assets/baoming.png" alt="" width="25%" />
                </div>
              </div>
              <div class="excellent_course_box_bottom">
                <div class="excellent_course_box_bottom_img">
                  <img :src="item.cover_img" alt="" />
                </div>
                <div class="excellent_course_box_bottom_title">
                  <div>{{ item.teachers_list[0].teacher_name }}</div>
                </div>
              </div>
              <div class="excellent_course_box_registration">
                <div style="font-size: 0.6rem; color: gray">
                  报名人数{{ item.sales_num }}人
                </div>
                <div style="font-size: 0.8rem; color: red">免费</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="学员评价">
          <div class="Student">
            <img src="../../assets/details.png" alt="" width="40%" />
          </div>
          <div class="Students">
            <p>暂无信息</p>
          </div>
        </van-tab>
      </van-tabs>
      <router-view></router-view>
      <van-button class="zmb_yvyue_btn" type="primary" color="#EB6100" block
        >立即预约</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
      list: [],
      isShow: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    attentionOK() {
      this.isShow = true;
      this.$APP.teaCollect(this.$route.query.id).then((res) => {
        console.log(res);
      });
    },
    attentionNO() {
      this.isShow = false;
      this.$APP.teaCollect(this.$route.query.id).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.$APP.teacher(this.$route.query.id).then((res) => {
      this.item = res.data.data.teacher;
      console.log(res.data.data.flag);
      if(res.data.data.flag==1){
        this.isShow=true
      }else{
        this.isShow=false
      }
    }),
      this.$APP.course().then((res) => {
        console.log(res.data.data.list);
        this.list = res.data.data.list;
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #e6e6e6;
}
.zmb_bgd {
  width: 100%;
  height: 3rem;
  background: #5facf9;
  display: flex;
  padding: 0.5rem 0;
  color: white;
}
.zmb_back {
  width: 12%;
  display: flex;
  justify-content: center;
}
.zmb_title {
  width: 78%;
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
}
.zmb_card {
  font-size: 0.5rem;
  width: 95%;
  height: 4rem;
  margin: -1.8rem auto 0;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}
.zmb_card img {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
}
.zmb_txt {
  flex: 1;
}
.zmb_guanzhu_btn {
  width: 3rem;
  height: 1rem;
  border: 1px solid #eb6100;
  border-radius: 1rem;
}
.zmb_introduce {
  margin-top: 0.5rem;
  width: 100%;
  background: white;
  font-size: 0.8rem;
}
.zmb_yvyue_btn {
  position: fixed;
  bottom: 0;
  left: 0;
}
.title_a {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 0.5rem;
}
.title_a1 {
  width: 25%;
  display: flex;
  justify-content: center;
}
.title_a2 {
  width: 75%;
  display: flex;
  justify-content: flex-start;
}

.title_b {
  width: 100%;
  height: 7vh;
  display: flex;
  color: gray;
  font-size: 0.5rem;
}
.title_b1 {
  width: 25%;
  display: flex;
  justify-content: center;
}
.title_b2 {
  width: 75%;
  display: flex;
  justify-content: flex-start;
}

.title_c {
  width: 100%;
  height: 35vh;
  display: flex;
  color: gray;
  font-size: 0.5rem;
}
.title_c1 {
  width: 25%;
  display: flex;
  justify-content: center;
}
.title_c2 {
  width: 70%;
  display: flex;
  justify-content: flex-start;
}

.Student {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Students {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: gray;
}
.excellent_course {
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
}
.excellent_course_box {
  width: 94%;
  height: 35vh;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}
.excellent_course_box_top {
  width: 100%;
  height: 18vh;
}
.excellent_course_box_top_title {
  width: 90%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: gray;
}
.excellent_course_box_top_titles {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.excellent_course_box_bottom {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
.excellent_course_box_bottom_img {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.excellent_course_box_bottom_img img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.excellent_course_box_bottom_title {
  width: 20%;
  font-size: 0.8rem;
}
.excellent_course_box_registration {
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>