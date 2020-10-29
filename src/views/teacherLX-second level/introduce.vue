<template>
  <div class="zmb_introduce_box">
      <div class="zmb_age">
          <span>教学年龄</span>
          30年
      </div>
      <div class="zmb_money">
          <span>授课价格</span>
          400学习币
      </div>
      <div class="zmb_teacher_profile">
          <span>老师简介</span>
          {{card.introduction}}
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
    },
    computed: {
        card(){
            return this.$route.query.item;
        }
    },
}
</script>

<style>
.zmb_introduce_box{
    font-size: 0.5rem;
    color: gray;
    padding: 0 1rem;
}
.zmb_introduce_box>div{
    margin: 1rem 0;
}
span{
    display: inline-block;
    margin-right: 0.2rem;
}
</style>