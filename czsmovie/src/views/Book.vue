<template>
  <div>
    <div id="bookBox">
      <!-- <ul> -->
        <transition-group tag="ul" name="fade" class="book-ul">
        <li v-show="isShow == index"  v-for="(obj, index) in bookList" :key="index" class="book-li">
          <img :src="obj" alt="" />
        </li>
        </transition-group>
      <!-- </ul> -->

      <ul id="num-ul">
        <li
          :class="{ numbox: index != isShow, numboxac: index == isShow }"
          v-for="(obj, index) in bookList"
          :key="index"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: [
        "https://img1.doubanio.com/view/subject/s/bpulic/s33715749.jpg",
        "https://img3.doubanio.com/view/subject/s/public/s33711301.jpg",
        "https://img1.doubanio.com/view/subject/s/public/s33702347.jpg",
        "https://img3.doubanio.com/view/subject/s/public/s33736992.jpg",
      ],
      isShow: 0,
    };
  },
  created() {
    setInterval(() => {
      this.isShow++;
      if (this.isShow == this.bookList.length) {
        this.isShow = 0;
      }
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>

#num-ul {
  display: flex;
  justify-content: center;
  .numboxac {
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border: 1px solid black;
    border-radius: 50%;
    margin: -0.6rem 0.1rem 0;
  }
  .numbox {
    width: 0.2rem;
    height: 0.2rem;
    background: #ccc;
    border: 1px solid black;
    border-radius: 50%;
    margin: -0.5rem 0.1rem 0;
  }
}

#bookBox {
  margin-top: 1rem;
  width: 100%;
}
// 
.book-li img {
  width:100%;
  height: 9.5rem;
}
// .fade-enter{
//     transform: translate(100%);
// }
// .fade-enter-active{
//     transition: transform 1s linear;
// }
// .fade-enter-to{
//     transform: translate(0%);
// }
// .fade-leave{
//     transform: translate(0%);
// }
// .fade-leave-active{
//     transition: transform 1s linear;
// }
// .fade-leave-to{
//     transform: translate(-100%);
// }
</style>