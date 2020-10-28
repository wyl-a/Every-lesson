<template>
  <div>
    <van-row>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item title="分类" ref="item">
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>年级</p>
                <div class="lzh-container">
                  <span>初一</span>
                  <span>初二</span>
                  <span>初三</span>
                  <span>高一</span>
                  <span>高二</span>
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>学科</p>
                <div class="lzh-container">
                  <span>语文</span>
                  <span>数学</span>
                  <span>英语</span>
                  <span>物理</span>
                  <span>化学</span>
                </div>
              </div>
            </div>
            <div class="lzh-butbox">
              <van-button
                type="danger"
                style="background: #fff; color: #000; border: 1px solid #d9d9d9"
                >重置</van-button
              >
              <van-button
                type="danger"
                style="background: #eb6100; color: #fff"
                @click="onConfirm"
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
                  <span>全部</span>
                  <span>大班课</span>
                  <span>小班课</span>
                  <span>公开课</span>
                  <span>点播课</span>
                  <span>面授课</span>
                  <span>音频课</span>
                  <span>系统课</span>
                  <span>图文课</span>
                  <span>会员课</span>
                </div>
              </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
    </van-row>
    <div class="lzh-title-box">
      <div class="lzh-container" v-for="(item, index) in list" :key="index">
        <div class="lzh-teseke">
          <p>{{item.title}}</p>
          <div>
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
      value1: 0,
      option1: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      list: [], //列表数据
    };
  },
  mounted() {
    this.$APP.course().then((res) => {
      console.log(res.data.data.list);
      this.list = res.data.data.list;
;
    });
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
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
  font-size: 0.3rem;
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
.lzh-butbox {
  width: 100%;
}
.lzh-butbox {
  width: 100%;
  padding: 0.5rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.lzh-butbox button {
  width: 6rem;
  height: 1.3rem;
}
.lzh-title-box {
  padding: 0.5rem;
  background: #f0f2f5;
}
.lzh-teseke {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
</style>