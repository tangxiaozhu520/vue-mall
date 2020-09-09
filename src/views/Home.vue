<template>
  <div class="home">
    <nav-bar class="top-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :data="['流行','新款','精选']" @tabClick="tabclick" v-show="isTabShow" ref="tab"  class="fixed"></tab-control>
    <scroll class="home-content" ref="scroll" @pullingUp="goodsLoadMore" :probeType="3" :pullUpLoad="true" @scroll="homeScroll">
        <home-swiper :banner="banner"></home-swiper>
        <home-feature :features="features" class="home-features"></home-feature>
        <recommend></recommend>
        <tab-control :data="['流行','新款','精选']" @tabClick="tabclick" ref="tab" ></tab-control>
        <goods-list :goods="this.datas[currentType].list" :key="this.currentType" ></goods-list>
    </scroll>
    <back-top class="home-backtop" @click.native="handleBack" v-show="isBack">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./home/HomeSwiper";
import HomeFeature from "./home/HomeFeature";
import Recommend from "./home/Recommend";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "./home/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";
import {getHomemultiData ,getData} from "network/home"
export default {
  name: 'Home',
    data(){
      return{
        banner:[],
        features:[],
        datas:{
          'pop':{
            page:0,
            list:[]
          },
          'new':{
            page:0,
            list:[]
          },
          'sell':{
            page:0,
            list:[]
          }
        },
        currentType:'pop',
        timer:null,
        isShow:false,
        isTabShow:false,
        tabOffsetTop:0,
        isBack:false
      }
    },
  components: {
    NavBar,
    HomeSwiper,
    HomeFeature,
    Recommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

  },
    created() {
      getHomemultiData().then(res=>{
        // console.log(res)
        this.banner=res.data.banner.list;
        this.features=res.data.recommend.list;

      });
      this.getHomeDatas('pop',0);
      this.getHomeDatas('new',0);
      this.getHomeDatas('sell',0);

    },
  methods:{
    getHomeDatas(type,page){
        var page=page+1;
        getData(type,page).then(res=>{
          // console.log(res)
          this.datas[type].page++;
          this.datas[type].list.push(...res.data.list);
          this.$refs.scroll.finishPullUp();
        })
    },
    tabclick(index){
      switch (index) {
        case 0:
          this.currentType='pop';
          break;
        case 1:
          this.currentType='new';

          break;
        case 2:
          this.currentType='sell';

          break;
      }
    },
    goodsLoadMore(){
      this.getHomeDatas(this.currentType,this.datas[this.currentType].page);
    },
    handleBack(){
      this.$refs.scroll.scrollTo();
    },
    homeScroll(position){

      this.isTabShow=position.y < -this.tabOffsetTop;
      this.isBack=position.y < -2000;
    }
  },
  mounted() {
    this.$bus.$on('goodsImgLoad',()=>{
      clearTimeout(this.timer);
      this.timer=setTimeout(()=>{
          this.$refs.scroll.scroll.refresh();
          console.log('---------------------------')
      },100)


    });

  },
  updated() {
    this.tabOffsetTop=this.$refs.tab.$el.offsetTop;
    console.log(this.tabOffsetTop);
  }
}
</script>
<style scoped>
  .home{
    position: relative;
    height: calc(100vh - 49px);
    overflow-y:hidden;
  }
  .top-nav{
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    z-index: 99;
  }
  .home-features{
    margin-top: 10px;
  }
  .home-content{
    height: calc(100vh - 40px - 49px);

  }
  .home-backtop{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    bottom: 60px;
  }
  .fixed{
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    top: 40px;
    z-index: 2;

  }


</style>