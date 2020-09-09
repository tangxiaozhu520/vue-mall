<template>
    <div class="detail">
        <nav-bar class="detail-nav">
            <div slot="left" class="nav-left" @click="bClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="nav-center">
                <ul>
                    <li :class="{active: currentTopIndex === index}" v-for="(item,index) in navs" :key="index" @click="navClick(index)">{{item}}</li>
                </ul>
            </div>
        </nav-bar>
        <scroll :probeType="3" class="dScroll" @scroll="DScroll" ref="dscroll">
            <div ref="goods">
                <detail-banner :banner="topImages" ></detail-banner>
                <detail-base-info :goods="goods" ></detail-base-info>
                <detail-shop-info :shop="shop" ></detail-shop-info>
                <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
            </div>
            <detail-goods-params :params-info="paramsInfo" ref="params"></detail-goods-params>
            <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
            <detail-goods-list :recommend-list="recommendList" ref="recommend" @imgLoad="imgLoad"></detail-goods-list>

        </scroll>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
        <back-top class="detail-backtop" @click.native="handleBack" v-show="isBack">
            <img src="~assets/img/common/top.png" alt="">
        </back-top>
    </div>
    
</template>

<script>
    import DetailBanner from "./detail/DetailBanner";
    import NavBar from "components/common/navbar/NavBar";
    import DetailBaseInfo from "./detail/DetailBaseInfo";
    import DetailShopInfo from "./detail/DetailShopInfo";
    import DetailGoodsInfo from "./detail/DetailGoodsInfo";
    import DetailGoodsParams from "./detail/DetailGoodsParams";
    import DetailCommentInfo from "./detail/DetailCommentInfo";
    import DetailGoodsList from "./detail/DetailGoodsList";
    import DetailBottomBar from "./detail/DetailBottomBar";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/common/backTop/BackTop";
    import {getDetailDatas,Goods,Shop,getRecommend} from 'network/detail';

    export default {
        name: "Detail",
        data(){
            return{
                currentTopIndex:0,
                navs:['商品','参数','评论','推荐'],
                topImages:[],
                goods:{},
                shop:{},
                detailInfo: {},
                paramsInfo:{},
                commentInfo:{},
                recommendList: [],
                isBack: false

            }
        },
        components:{
            NavBar,
            DetailBanner,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailGoodsParams,
            DetailCommentInfo,
            DetailGoodsList,
            DetailBottomBar,
            Scroll,
            BackTop


        },
        methods:{
            bClick(){
               this.$router.go(-1);
            },
            navClick(index){
                this.currentTopIndex=index;
                switch (index) {
                    case 0:
                        this.$refs.dscroll.scrollTo();
                        break;
                    case 1:
                        this.$refs.dscroll.scroll.scrollToElement(this.$refs.params.$el,300);
                        break;

                    case 2:
                        this.$refs.dscroll.scroll.scrollToElement(this.$refs.comment.$el,300);
                        break;
                    case 3:
                        this.$refs.dscroll.scroll.scrollToElement(this.$refs.recommend.$el,300);
                }
            },
            DScroll(position){
                this.isBack= -position.y >= 2000 ? true :false
                console.log('=====================',this.isBack)
            },
            handleBack(){
                this.$refs.dscroll.scrollTo()
            },
            imgLoad(){
                this.$refs.dscroll.scroll.refresh();
            },
            addToCart(){
                const obj = {}
                // 2.对象信息
                obj.iid = this.$route.query.iid;
                obj.imgURL = this.topImages[0]
                obj.title = this.goods.title
                obj.desc = this.goods.desc;
                obj.newPrice = this.goods.nowPrice;
                // 3.添加到Store中
                this.$store.commit('addCart', obj);
                this.$toast.success({
                    duration: 2000, // 持续展示 toast
                    forbidClick: true,
                    message: '加入购物车成功',
                });
            }
        },
        created() {
            getDetailDatas(this.$route.query.iid).then(res=>{
                console.log(res);
                this.topImages=res.result.itemInfo.topImages;
                this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
                 this.shop = new Shop(res.result.shopInfo);
                 this.detailInfo = res.result.detailInfo;
                 this.paramsInfo=res.result.itemParams;
                 if (res.result.rate.list) {
                    this.commentInfo=res.result.rate.list[0];
                 }

            });
            getRecommend().then(res=>{
                console.log(res)
                this.recommendList=res.data.list;
            })
        }
    }
</script>

<style scoped>
    .detail{

        position: relative;
        height: 100%;
        z-index: 99;
        overflow: auto;
        background-color: #fff;
    }
    .detail-nav{
        font-size: 14px;
        color: var(--color-text);
        background-color: #fff;
        z-index: 999;
        position: relative;
    }
    .nav-left img{
        vertical-align: middle;
    }
    .nav-center ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav-center ul li{
        flex: 1;
    }
    .nav-center li.active{
        color: var(--color-tint);
    }
    .dScroll{
        height: calc(100vh - 44px - 58px);
    }
    .detail-backtop{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    bottom: 60px;
  }
</style>