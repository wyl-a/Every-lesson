<template>
  <div class="wyl_user">
    <!-- 背景图 -->
    <div class="wyl_user_topImg">
      <!-- 背景图里面的盒子 -->
      <div class="wyl_user_personage">
        <div class="wyl_user_personage_box">
          <div class="wyl_user_personage_box_top">
            <div class="wyl_user_personage_box_top_img">
              <img src="../assets/User/user.jpg" alt="" />
            </div>
            <div class="wyl_user_personage_box_top_title">
              <div class="wyl_user_personage_box_top_name">
                <div>杨狗蛋</div>
                <van-icon name="edit" />
              </div>
              <div class="wyl_user_personage_box_top_button">去约课</div>
            </div>
          </div>

          <div class="wyl_user_personage_box_bottom">
            <div>
              <p style="color: orange; font-size: 1.2rem; font-weight: 600">
                3
              </p>
              <p style="font-size: 0.7rem">我的特色课</p>
              <p style="font-size: 0.4rem; color: gray">已购特色课程的学习</p>
            </div>
            <div style="border-left: 1px solid #e6e6e6">
              <p style="color: orange; font-size: 1.2rem; font-weight: 600">
                0
              </p>
              <p style="font-size: 0.7rem">一对一辅导</p>
              <p style="font-size: 0.4rem; color: gray">我的一对一老师辅导</p>
            </div>
            <div style="border-left: 1px solid #e6e6e6">
              <p style="color: orange; font-size: 1.2rem; font-weight: 600">
                0.00
              </p>
              <p style="font-size: 0.7rem">剩余学习币</p>
              <p style="font-size: 0.4rem; color: gray">查看剩余学习币</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box"></div>
    <!--邀请 -->
    <div class="wyl_user_invite">
      <div class="wyl_user_invite_box">
        <div>
          <van-icon name="envelop-o" />
        </div>
        <div class="wyl_user_invite_box_title">
          <p style="font-size:0.6rem">邀请好友注册APP，享多重好礼</p>
          <p style="font-size:0.5rem">限时特惠，多邀多得</p>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  width: 100%;
  height: 4.5rem;
}
.wyl_user {
  width: 100%;
  height: 100vh;
  background: #e6e6e6;
}
.wyl_user_topImg {
  width: 100%;
  height: 6rem;
  background: #fc5500;
  border-radius: 0 0 40% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wyl_user_personage {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.2rem;
}
.wyl_user_personage_box {
  width: 92%;
  height: 7.8rem;
  background: white;
  border-radius: 5px;
}
.wyl_user_personage_box_top {
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
}
.wyl_user_personage_box_top_img {
  width: 25%;
  height: 4.4rem;
  margin-left: 15px;
  margin-top: 15px;
}
.wyl_user_personage_box_top_img img {
  width: 80%;
  border-radius: 50%;
}
.wyl_user_personage_box_top_title {
  width: 75%;
  height: 4.4rem;
  display: flex;
  align-items: center;
}
.wyl_user_personage_box_top_name {
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: gray;
}
.wyl_user_personage_box_top_button {
  width: 90px;
  height: 25px;
  font-size: 0.6rem;
  color: white;
  background: orangered;
  border-radius: 10px 0px 0px 10px;
  text-align: center;
  line-height: 25px;
}
.wyl_user_personage_box_bottom {
  width: 100%;
  height: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_user_personage_box_bottom div {
  width: 33%;
  height: 3.4rem;
  text-align: center;
}
.wyl_user_invite {
  width: 100%;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wyl_user_invite_box {
  width: 94%;
  height: 2rem;
  background: #ef863c;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}
.wyl_user_invite_box_title {
  width: 70%;
}
</style>