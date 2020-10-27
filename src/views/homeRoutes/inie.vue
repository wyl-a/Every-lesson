<template>
  <div>
    <van-row>
      <van-col span="12">
        <van-dropdown-menu>
          <van-dropdown-item title="选择上课时间" ref="item">
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              :poppable="false"
              :show-confirm="false"
              :style="{ height: '500px' }"
            />
            <div class="lzh-butbox">
              <van-button
                type="danger"
                style="background: #fff; color: #000; border: 1px solid #d9d9d9"
                >重置</van-button
              >
              <van-button
                type="danger"
                style="background: #eb6100; color: #fff"
              >
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
      <van-col span="12">
        <van-dropdown-menu>
          <van-dropdown-item title="选择老师条件" ref="item">
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>老师类型</p>
                <div class="lzh-containera">
                  <span>M1</span>
                  <span>M2</span>
                  <span>M3</span>
                  <span>M4</span>
                  <span>M5</span>
                  <span>M6</span>
                  <span>M7</span>
                  <span>M8</span>
                  <span>M9</span>
                  <span>M10</span>
                  <span>M11</span>
                  <span>M12</span>
                  <span>M13</span>
                  <span>M14</span>
                  <span>M15</span>
                  <span>M16</span>
                  <span>M17</span>
                  <span>M18</span>
                  <span>M19</span>
                  <span>M20</span>
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>只看</p>
                <div class="lzh-containera">
                  <van-checkbox v-model="checked">已关注</van-checkbox>
                  <van-checkbox v-model="checkedr">上过课</van-checkbox>
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>性别</p>
                <div class="lzh-containera">
                  <span>男</span>
                  <span>女</span>
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>年级</p>
                <div class="lzh-containera">
                  <span>小学一年级</span>
                  <span>小学二年级</span>
                  <span>小学三年级</span>
                  <span>小学四年级</span>
                  <span>小学五年级</span>
                  <span>小学六年级</span>
                  <span>初一</span>
                  <span>初二</span>
                  <span>初三</span>
                  <span>高一</span>
                  <span>高二</span>
                  <span>高三</span>
                </div>
              </div>
            </div>
            <div class="lzh-contbox">
              <div class="lzh-contai">
                <p>学科</p>
                <div class="lzh-containera">
                  <span>语文</span>
                  <span>数学</span>
                  <span>英语</span>
                  <span>物理</span>
                  <span>化学</span>
                  <span>生物</span>
                  <span>信息技术</span>
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

              >
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkedr: true,
      minDate: new Date(2020, 9, 20),
      maxDate: new Date(2020, 9, 31),
    };
  },
};
</script>

<style>
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
.lzh-containera {
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
}
.lzh-containera span {
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
</style>