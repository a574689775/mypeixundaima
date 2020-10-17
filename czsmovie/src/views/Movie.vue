<template>
  <div id="zong">
    <ul>
      <li v-for="(obj,index) in movieList" @click="xiangqing(obj.id)" :key=index>
        <div id="box">
          <img
            :src="obj.cover.url"
            alt=""
          >
          <div id="font">
            <span id="s1">{{obj.title}}</span>
            <span class="s2">导演：{{obj.directors[0]}}</span>
            <span class="s2">主演：<div id="heng" v-for="(actors,index) in obj.actors" :key="index">{{actors}}  </div></span>
            <span class="s2" v-if="obj.rating">评分：{{obj.rating.value}}</span>
            <span class="s2 sb">{{obj.card_subtitle}}</span>
          </div>
        </div>
      </li>
    </ul>
    <img src="../assets/imgs/loding.gif" alt="" id="loding" v-if="isShow">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movieList: [],
      isShow:true
    };
  },
  methods:{
      xiangqing(id){
          this.$router.push({path:'/moviexiang',query:{id}})
      }
  },
  created() {
    axios.get(
        "https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      )
      .then((res) => {
        
        this.movieList=res.data.subject_collection_items;
        this.isShow=false;
       
      })
      .catch((res) => {});
  },
};
</script>

<style lang="scss" scoped>
#loding{
  width: 1rem;
  position: fixed;
  top: 5.5rem;
  left: 2.8rem;
  }
.sb{
    overflow: hidden;
    text-overflow: ellipsis;
 
    white-space: nowrap;
    width: 3.2rem;
}
#heng{
    display: inline;
}
span {
  display: block;
}
#zong {
  margin: 1.2rem 0;
}
li {
  height: 3rem;
  margin: 0.2rem 0.2rem;
}
li img {
  height: 3rem;
  width: 2rem;
}
#box {
  display: flex;
}
#font {
  display: block;
  margin-left: 0.2rem;
}
#s1 {
  font-size: 30px;
}
.s2 {
  margin-top: 0.1rem;
}
</style>