<template>
  <div>
    <div class="search">
      <div @click="up" class="search_up">&lt;</div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
      </form>
    </div>
    <div class="search_list">
        <p>历史搜索记录</p>
        <ul>
            <li>马兴龙老师</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {},
    up(){
        this.$router.go(-1);
    }
  },
};
</script>

<style>
.search{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
    align-items: center;
}
.search_up{
    width: 2rem;
    text-align: center;
}
.van-search{
    flex: 1;
}
.search_list{
    width: 100%;
    background: white;

}
.search_list p{
    font-size: 0.9rem;
    font-weight: 600;
}
.search_list ul{
    width: 90%;
    margin: 1rem auto 0;
}
.search_list ul li{
    font-size: 0.6rem;
    color: gray;
}
</style>