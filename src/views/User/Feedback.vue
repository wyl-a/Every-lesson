<template>
  <div>
    <div class="top"></div>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="500"
      placeholder="请输入留言"
      show-word-limit
      size="large"
    />
    <van-button type="warning" block style="width:80%;margin-left:10%">提交</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:''
    }
  }
};
</script>

<style scoped>
.top{
  width: 100%;
  height: 50px;
}
</style>