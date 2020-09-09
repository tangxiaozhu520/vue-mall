<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="main">
      <scroll ref="leftScroll" class="left-scroll">
        <menu-bar :menu="menu" @liClick="menuClick"></menu-bar>
      </scroll>
      <scroll ref="rightScroll" class="right-scroll">
        <cate :cates="cates" class="cate" :tabGoods="tabGoods[currentType]" @tabClick="tabClick"></cate>
      </scroll>

    </div>

  </div>
</template>
<script>
  import {getMenu,getCateGoods,goodsDetail} from "../network/category";
  import MenuBar from "./category/MenuBar";
  import NavBar from "components/common/navbar/NavBar";
  import Cate from "./category/Cate";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name:"Category",
    data(){
      return{
        menu:[],
        currentIndex:0,
        cates:[],
        currentType:'pop',
        tabGoods:{
          'pop':[],
          'new':[],
          'sell':[]
        }
      }
    },
    created() {
      getMenu().then(res=>{
        // console.log(res);
        this.menu=res.data.category.list;
        console.log(this.menu);
        this.$nextTick(()=>{
          getCateGoods(this.menu[0].maitKey).then(res=>{
            console.log(res);
            this.cates=res.data.list;
            // console.log(this.cates);
        })
          goodsDetail(this.menu[0].miniWallkey,this.currentType).then(res=>{
            console.log('------------',res);
            this.tabGoods[this.currentType].push(...res);
          })
        })
      })

    },
    components:{
      MenuBar,
      NavBar,
      Cate,
      Scroll
    },
    methods:{
      menuClick(index){
        this.currentIndex=index;
         getCateGoods(this.menu[this.currentIndex].maitKey).then(res=>{
            console.log(res);
            this.cates=res.data.list;
            // console.log(this.cates);
        })

      },
      tabClick(index){
        this.tabGoods[this.currentType]=[];
        switch (index) {

          case 0:
              this.currentType='pop';
              goodsDetail(this.menu[this.currentIndex].miniWallkey,this.currentType).then(res=>{
              console.log('------------',res);
              this.tabGoods[this.currentType].push(...res);
            })
              break;
          case 1:
              this.currentType='new';
              goodsDetail(this.menu[this.currentIndex].miniWallkey,this.currentType).then(res=>{
              console.log('------------',res);
              this.tabGoods[this.currentType].push(...res);
            })
              break;
          case 2:
            this.currentType='sell';
            goodsDetail(this.menu[this.currentIndex].miniWallkey,this.currentType).then(res=>{
              console.log('------------',res);
              this.tabGoods[this.currentType].push(...res);
            })
            break;
        }
      }
    }

  }
</script>
<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .main{
    display: flex;
    height: calc(100vh - 40px - 49px);
    overflow: hidden;
  }
  .cate{
    flex: 1;
    padding: 20px 10px;
  }
  .left-scroll{
    height: 100%;
  }

</style>