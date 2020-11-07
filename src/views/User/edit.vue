<template>
  <div>
    <div class="edit_box">
      <!-- 头像 -->
      <van-cell is-link title="头像" @click="show = true">
        <img :src="avatar" alt="" />
      </van-cell>
      <!-- 昵称 -->
      <van-cell is-link title="姓名" @click="onNickname">
        {{ nickname }}
      </van-cell>
      <!-- 手机号 -->
      <van-cell :closeable="false" title="手机号">{{
        userInfo.mobile
      }}</van-cell>
      <!-- 性别 -->
      <van-cell is-link title="性别" @click="onSex">{{ sex }}</van-cell>
      <!-- 出生日期 -->
      <van-cell is-link title="出生日期" @click="onDate">{{ time }}</van-cell>
      <van-cell is-link title="所在城市" @click="onClickCity">北京</van-cell>
      <van-cell is-link title="学科">全栈</van-cell>
      <van-cell is-link title="年级">高一</van-cell>
      <!-- 头像的动作面板 -->
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @select="sheet"
        @cancel="onCancel"
      />
    </div>
    <input type="file" accept="image/*" @change="fileURL" class="file" />
    <!-- 日期 -->
    <van-popup v-model="showDate" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="conFrom"
      />
    </van-popup>

    <!-- 地区 -->
    <van-popup
      v-model="showSonArea"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-area :area-list="areaList" />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2020, 11, 30),
      currentDate: new Date(),
      time: "",
      userInfo: [],
      show: false,
      showDate: false, //时间
      showSonArea: false, //地区
      actions: [{ name: "拍照" }, { name: "从手机相册选择" }],
      avatar: localStorage.getItem("avatar") || "", //头像
      areaList: {
        province_list: {},
      },
      nickname: JSON.parse(localStorage.getItem("value")) || [], //姓名
      sex: JSON.parse(localStorage.getItem("sex")) || [], //年龄
    };
  },
  mounted() {
    //调用数据
    this.list();
    //省的数据
    let sj = {};
    this.$APP.sonArea().then((res) => {
      res.data.data.forEach((item) => {
        this.$set(sj, item.id, item.area_name);
        this.areaList.province_list = sj;
        this.id = item.id;
      });
    });

    //市的数据
    this.$APP.sonArea(this.id).then((res) => {});
  },
  methods: {
    list() {
      this.$APP.userInfo().then((res) => {
        console.log();
        this.userInfo = res.data.data;
        this.time = res.data.data.birthday;
        console.log(res);
      });
    },
    //修改地区
    onClickCity() {
      this.showSonArea = true;
    },
    //修改性别
    onSex() {
      this.$router.push("/sex");
    },
    //修改用户名
    onNickname() {
      this.$router.push("/nickname");
    },
    //修改日期
    onDate() {
      this.showDate = true;
    },
    conFrom(value) {
      var y = value.getFullYear();
      var m = value.getMonth() + 1;
      var d = value.getDate() > 9 ? value.getDate() : "0" + value.getDate();
      this.time = `${y}-${m}-${d}`;
      this.$APP.user({ birthday: this.time }).then((res) => {
        console.log(res);
      });

      this.showDate = false;
    },
    //头像面板
    sheet(actions) {
      console.log(actions.name);
      if (actions.name == "从手机相册选择") {
        this.$el.querySelector(".file").click();
      }
    },
    fileURL(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = (data) => {
        let res = data.target || data.srcElement;
        this.avatar = res.result;
        localStorage.setItem("avatar", this.avatar);
      };
      reader.readAsDataURL(file);
    },
    //头像面板取消
    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style>
.top {
  width: 100%;
  height: 35px;
}
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
  height: 1.5rem;
  border-radius: 50%;
}
.file {
  display: none;
}
</style>