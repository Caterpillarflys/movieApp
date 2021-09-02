<template>
  <div>
    <HeaderCom />
    <div class="content">
      <div v-for="(item, index) in movieList" :key="index" class="list">
        <img class="img" :src="item.img.replace('w.h', '90.120')" alt="" />
        <div class="message">
          <div>电影名称：{{ item.nm }}</div>
          <div>主演：{{ item.star }}</div>
          <div>上映时间：{{ item.rt }}</div>
          <div>评分：{{ item.sc }}</div>
          <div>热度：{{ item.showInfo }}</div>
          <div>人气：{{ item.wish }}</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { getMovieNow } from "@/api/movie.js";
export default {
  name: "movie",
  data() {
    return {
      movieList: [],
    };
  },
  async mounted() {
    let data = await getMovieNow();
    this.movieList = data.movieList;
  },
};
</script>



<style scoped>
.content {
  padding: 32px 10px;
}
.list {
  display: flex;
  padding: 10px 0;
}
.message {
  margin-left: 10px;
}
</style>