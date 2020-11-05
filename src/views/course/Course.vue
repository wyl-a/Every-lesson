<template>
  <div>
    <!-- 课程文件 -->
    <van-row>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item title="分类" ref="item">
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>年级</p>
                <div class="lzh-container">
                  <span
                    v-for="(item, index) in grade"
                    :key="index"
                    @click="onGrade(item.id)"
                    >{{ item.name }}</span
                  >
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>学科</p>
                <div class="lzh-container">
                  <span
                    v-for="(item, index) in subject"
                    :key="index"
                    @click="onSubject(item.id)"
                    >{{ item.name }}</span
                  >
                </div>
              </div>
            </div>
            <div class="lzh-butbox">
              <van-button
                type="danger"
                style="
                  background: #fff;
                  color: #000;
                  border: 1px solid #d9d9d9;
                  width: 180px;
                "
                >重置</van-button
              >
              <van-button
                type="danger"
                style="background: #eb6100; color: #fff; width: 180px"
              >
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item title="排序" v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item title="筛选" ref="item">
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <div class="lzh-container">
                  <span
                    v-for="(item, index) in appCourse"
                    :key="index"
                    @click="onAppCourse(item.id)"
                  >
                    {{ item.name }}
                  </span>
                </div>
              </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
    </van-row>
    <div
      class="excellent_course"
      v-for="(item, index) in courseBasis"
      :key="index"
      @click="courseitem(item)"
    >
      <div class="excellent_course_box">
        <div class="excellent_course_box_top">
          <div class="excellent_course_box_top_title">{{ item.title }}</div>
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
    <div style="height: 3rem"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      grade: [
        {
          id: 1,
          name: "初一",
        },
        {
          id: 2,
          name: "初二",
        },
        {
          id: 3,
          name: "初三",
        },
        {
          id: 4,
          name: "高一",
        },
        {
          id: 5,
          name: "高二",
        },
      ],
      subject: [
        {
          id: 7,
          name: "语文",
        },
        {
          id: 8,
          name: "数学",
        },
        {
          id: 9,
          name: "英语",
        },
        {
          id: 12,
          name: "物理",
        },
        {
          id: 13,
          name: "化学",
        },
      ],
      option1: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      appCourse: [],
      courseBasis: [],
    };
  },
  mounted() {
    //特色课下拉数据
    this.$APP.courseClassify().then((res) => {
      console.log(res.data.data.appCourseType);
      this.appCourse = res.data.data.appCourseType;
    });

    //特色课数据
    this.$APP.courseBasis().then((res) => {
      console.log(res.data.data.list);
      this.courseBasis = res.data.data.list;
    });
  },
  methods: {
    onGrade(id) {
      this.$APP
        .courseBasis({
          params: {
            page: 1,
            limit: 10,
            course_type: id,
            classify_id: "",
            order_by: "",
            attr_val_id: "",
            is_vip: 0,
          },
        })
        .then((res) => {
          console.log(res.data.data.list);
          this.courseBasis = res.data.data.list;
        });
    },
    onSubject(id) {
      this.$APP
        .courseBasis({
          params: {
            page: 1,
            limit: 10,
            course_type: id,
            classify_id: "",
            order_by: "",
            attr_val_id: "",
            is_vip: 0,
          },
        })
        .then((res) => {
          console.log(res.data.data.list);
          this.courseBasis = res.data.data.list;
        });
    },
    onAppCourse(id) {
      console.log(id);
      this.$APP
        .courseBasis({
          params: {
            page: 1,
            limit: 10,
            course_type: id,
            classify_id: "",
            order_by: "",
            attr_val_id: "",
            is_vip: 0,
          },
        })
        .then((res) => {
          console.log(res.data.data.list);
          this.courseBasis = res.data.data.list;
        });
    },
    courseitem(item) {
      this.$router.push({
        path: "/courseitem",
        query: {
          id: item.id,
        },
      });
    },
  },
};
</script>

<style>
.van-cell__value {
  display: none;
}
.van-dropdown-item__option {
  text-align: center;
}
.van-dropdown-menu__bar {
  box-shadow: 0 0 0;
}
.lzh-contbox {
  padding-left: 1rem;
  font-size: 0.55rem;
}
.lzh-contai {
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 0.5rem;
}
.lzh-container {
  width: 100%;
  height: 6rem;
  background: #fff;
  border-radius: 5px;
  margin-top: 0.5rem;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
}
.lzh-container span {
  width: 3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: #f5f5f5;
  text-align: center;
  margin-right: 0.7rem;
  margin-bottom: 0.8rem;
}

.lzh-container_s {
  background: chartreuse;
}
.lzh-butbox {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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