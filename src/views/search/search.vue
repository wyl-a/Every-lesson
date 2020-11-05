<template>
  <div>
    <div class="search">
      <van-icon @click="up" class="search_up" name="arrow-left" />
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
        @input="oninput"
      />
      <div class="search_qvxiao" @click="onSearch">{{ searchText }}</div>
    </div>
    <div v-show="flag" class="search_list">
      <div class="search_list_box">
        <p>历史搜索记录</p>
        <van-icon name="delete" @click="onDelete" />
      </div>
      <ul>
        <li v-for="(item, index) in searchList" :key="index" @click="onSearchs(item)">{{ item }}</li>
      </ul>
    </div>
    <div v-show="!flag" class="searchData">
      <div
        class="excellent_course"
        v-for="(item, index) in list"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "搜索",
      value: "",
      list: [],
      flag: true,
      searchList: JSON.parse(localStorage.getItem("searchList")) || [],
    };
  },
  methods: {
    //删除
    onDelete() {
      this.searchList = [];
      localStorage.setItem("searchList", JSON.stringify(this.searchList));
    },
    up() {
      this.$router.go(-1);
    },
    //详情页
    courseitem(item) {
      this.$router.push({
        path: "/courseitem",
        query: {
          id: item.id,
        },
      });
    },
    //搜索
    onSearch() {
      this.searchList.push(this.value);
      localStorage.setItem("searchList", JSON.stringify(this.searchList));
      this.$APP.courseSearch(this.value).then((res) => {
        console.log(res.data.data);
        this.list = res.data.data.list;
        if (res.data.data.list.length != 0) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      });
    },
    onSearchs(item){
      this.value=item;
      this.onSearch()
    },
    //
    oninput() {
      if (this.value == "") {
        this.flag = true;
      }
    },
  },
};
</script>

<style>
body {
  background: rgb(243, 243, 243);
}
.search {
  width: 100%;
  display: flex;
  background: white;
  align-items: center;
}
.search_up {
  width: 10%;
  text-align: center;
}
.van-search {
  width: 80%;
}
.search_qvxiao {
  width: 10%;
  font-size: 0.7rem;
}
.search_list {
  width: 100%;
  background: white;
}
.search_list p {
  font-size: 0.6rem;
  font-weight: 600;
}
.search_list ul {
  width: 90%;
  margin: 1rem auto 0;
  display: flex;
}
.search_list ul li {
  font-size: 0.6rem;
  background: lightgray;
  border-radius: 10px;
  padding: 0.2rem;
  margin: 0.2rem;
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
.search_list_box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>