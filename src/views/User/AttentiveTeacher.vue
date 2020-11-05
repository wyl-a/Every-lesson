<template>
  <div>
    <div class="wyl_famousItem" v-for="(item, index) in list" :key="index">
      <div class="wyl_famousItem_box">
        <div class="wyl_famousItem_box_left">
          <img :src="item.avatar" alt="" />
        </div>
        <div class="wyl_famousItem_box_right">
          <p>{{ item.teacher_name }}</p>
          <div class="van-ellipsis">{{ item.introduction }}</div>
        </div>
        <button class="zmb_guanzhu_btn" @click="attentionNO(item.teacher_id)">
          已关注
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.collect();
  },
  methods: {
    attentionNO(id) {
      this.$APP.teaCollect(id).then((res) => {
        console.log(res);
        this.collect();
      });
    },
    collect() {
      this.$APP.collects().then((res) => {
        console.log(res.data.data.list);
        this.list = res.data.data.list;
      });
    },
  },
};
</script>

<style>
.wyl_famousItem {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
}
.wyl_famousItem_box {
  width: 94%;
  height: 10vh;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.wyl_famousItem_box_left {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_famousItem_box_left img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.wyl_famousItem_box_right {
  width: 80%;
}
.wyl_famousItem_box_right p {
  font-size: 0.7rem;
  color: gray;
}
.wyl_famousItem_box_right div {
  margin-top: 0.2rem;
  font-size: 0.55rem;
  color: gray;
}
.zmb_guanzhu_btn {
  width: 3rem;
  height: 1.2rem;
  background: #e6e6e6;
  border: 1px solid white;
  border-radius: 1rem;
  font-size: 0.5rem;
}
</style>