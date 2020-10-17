<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <span>||</span>
    <router-link to="/question">提问</router-link>
    <span>||</span>
    <router-link to="/help">帮助</router-link>
    <span>||</span>
    <router-link to="/other">其他</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import MyTest from "./components/MyTest";
export default {
  components: {
    MyTest
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
