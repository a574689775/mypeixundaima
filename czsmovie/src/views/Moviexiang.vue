<template>
  <div>
    {{ $route.query.id }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/movie/35051512?ck=&for_mobile=1"
      )
      .then((res) => {
       console.log(res);
      })
      .catch((res) => {});
  },
};
</script>

<style lang="scss" scoped>
</style>