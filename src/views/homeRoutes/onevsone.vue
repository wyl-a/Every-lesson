<template>
  <div>
    <!-- 筛选 -->
    <div class="zmb_sx">
      <div
        @click="zmbsx(1)"
        :class="n == 1 ? 'zmb_truesx' : ''"
        clas="zmb_timesxs"
      >
        <span>选择上课时间</span>
        <i></i>
      </div>
      <div
        @click="zmbsx(2)"
        :class="n == 2 ? 'zmb_truesx' : ''"
        class="zmb_teachersx"
      >
        <span>选择老师条件</span>
        <i></i>
      </div>
    </div>
    <ul>
      <li :class="n != 1 ? 'none' : ''" class="zmb_time">
        <div class="zmb_time_calendar">
          <van-calendar
            :poppable="false"
            :show-confirm="false"
            :show-title="false"
            :show-subtitle="false"
            :row-height="'2rem'"
            :style="{ height: '150px' }"
          />
        </div>

        <div class="zmb_time_btns">
            <div class="zmb_time_btns_reset">重置</div>
            <div class="zmb_time_btns_submit">确定</div>
        </div>
      </li>
      <li :class="n != 0 ? 'none' : ''" class="zmb_teacher">
        <div
          class="zmb_teacher_item"
          v-for="(item, index) in teacherList"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <div class="text">
            <p>{{ item.name }}</p>
            <p>
              {{ item.sex }}<span>{{ item.Teaching }}年教龄</span>
            </p>
          </div>
          <button class="zmb_teacher_item_btn">预约</button>
        </div>
      </li>
      <li :class="n != 2 ? 'none' : ''" class="zmb_list">asdfasdfasdf</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherList: [
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          name: "王耀龙",
          sex: "男",
          Teaching: "10",
        },
      ],
      //检测事件
      n: 0,
    };
  },
  methods: {
    zmbsx(i) {
      if (i == this.n) {
        this.n = 0;
      } else {
        this.n = i;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f0f2f5;
}
.zmb_sx {
  width: 100%;
  height: 2rem;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zmb_sx i {
  display: inline-block;
  width: 2.4vw;
  height: 1.33333vw;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAABM8m7ZAAAAAXNSR0IArs4c6QAAAU1JREFUSA3lk71qAkEQx++2zttYBoQ092GVBxFSGBJCFAySIKIpAmnzBqnS3B0EAmlS+jTayG3+/8WBPZU9L3FtHJDZ+fzdzqxBcGoSyoXzPG+XZXkZhuGZ1lpBK8QYV7R5Xvu2bMakBtrkrW3bv1RKvcdx/IZ80zgoiuIc0G8W0elZLtI0/eJNAkA7R4JybC0yDRjGDw3fAs4K4/4kx4Ax9w+cpz7BgGKouhtF0Zycyk6zLJsi2PPxAQB3kyR5ld7mxmIgcI2EmdgH1Fc2lH0rYDo8wHt4xS/sbcsWmMEDwm8AfbaBcq7sWJyi/7NzvN47PNqx9NrUO28sSX+9OaB9F5T9nWAmNIUDOgT0kbUuqQWzeF84/hEjQB9cQIk5dyxJol07B/QJH3gvuXW6EZjNdsEBnQB6Wwez43uN2i7g2LlHwDT8C/wGTaHs9wsfI3k1vlOHEgAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: 100% 100%;
}
.zmb_sx span {
  font-size: 0.5rem;
}
.zmb_truesx {
  color: #eb6100;
}
.zmb_truesx i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAABM8m7ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBDMUJFQTRCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTQ0RDlCOUNCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MEMxQkVBMkI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MEMxQkVBM0I3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prbv5ocAAAD7SURBVHjaYvz//z8DqeBvGGMNkKoEYk4gbmRe9b+RVDMYSbUYaGkHkCpHE+4FWl5CijlMJFraisVSECgGyvXQxGKgwU1AqgqPEpIsZyLS0nogVUuEUqItJxjHQIOqgVQLiWmHYJwzEbC0ggxLifI5Ex5LS4FUOwP5AK/lWIMaqKEQSPUxUAdgDXYmLJbmUdFSnD5nQrM0G0hNZKA+wLCcCcnSdCA1mYF2AGR5N0ocAwUMgOwzQMzMQHvgB4zzzTAfO9PJUhCwQA7qs3SyFJSFtqFkJ2BwJwGpYGhVBxL8B8XI7H945AixvwDxemAwHyKrWqQWYGIYIAAQYADdQHEe2IBzhgAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: 100% 100%;
}
.none {
  display: none;
}
.zmb_time {
  width: 100%;
}
.zmb_teacher {
  width: 100%;
}
.zmb_teacher_item {
  width: 95%;
  background: white;
  margin: 0.3rem auto;
  display: flex;
  justify-content: space-around;
  font-size: 0.5rem;
  align-content: space-around;
  align-items: center;
  padding: 0.3rem;
  box-sizing: border-box;
}
.zmb_teacher_item img {
  width: 2rem;
  height: 2rem;
}
.zmb_teacher_item .text {
  flex: 1;
  margin-left: 1rem;
}
.zmb_teacher_item_btn {
  width: 3rem;
  height: 1rem;
  border-radius: 20px;
  border: 1px solid rgb(209, 50, 50);
  color: rgb(209, 50, 50);
  background: white;
}
.zmb_list {
  width: 100%;
  height: 100px;
  background: darkgreen;
}
.zmb_time_calendar{
    width: 95%;
    height: 150px;
    margin: 0.5rem auto;
}
.zmb_time_btns{
    width: 100%;
    height: 2rem;
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0;
}
.zmb_time_btns div{
    width: 50%;
    height: 100%;
    line-height: 2rem;
    text-align: center;
    font-size: 0.85rem;
}
.zmb_time_btns .zmb_time_btns_reset{
    background: #EB6100;
    color: white;
}
.zmb_time_btns .zmb_time_btns_submit{
    color: #EB6100;
    background: white;
}
</style>