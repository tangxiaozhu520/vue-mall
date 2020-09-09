<template>
  <div id="app">
    <router-view class="view"/>
    <main-tab-bar ></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";
  export default {
      name: "App",
    components:{
        MainTabBar
    }

  }
</script>

<style>
 @import "assets/css/base.css";
  #app {
    height: 100vh;
    position: relative;
  }
  /*#app .view{*/
  /*  height: calc(100% - 49px);*/
  /*}*/
</style>
