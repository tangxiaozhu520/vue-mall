<template>
    <div class="goods-list-item" @click="iClick(goods.iid)">
        <div class="img-wrap">
            <img v-lazy="goods.image" alt="" @load="imgLoad" v-if="goods.image">
            <img v-lazy="goods.show.img " alt="" @load="imgLoad" v-else>

        </div>
        <div class="goods-desc">
            <div class="title">
                {{goods.title}}
            </div>
            <div class="wrap">
                <span class="price">￥{{goods.price}}</span>
                <span class="collect">{{goods.cfav}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goods:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            imgLoad(){
                this.$bus.$emit('goodsImgLoad')
            },
            iClick(iid){
                this.$router.push({path:"/detail",query:{iid}})
            }
        }
    }
</script>

<style scoped>
    .goods-list-item{
        position: relative;
        padding-bottom: 50px;
        font-size: 12px;
    }
    .goods-list-item .img-wrap{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;

    }
    .goods-list-item .img-wrap img{
        display: block;
        width: 100%;
        height: auto;

    }
    .goods-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 12px;
    }
    .goods-list-item .title{
        width: 100%;
        overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
        padding-top: 5px;
    }
    .goods-list-item .wrap{
        padding-top: 5px;
        text-align: center;
    }
    .wrap .collect{
        position: relative;
        margin-left: 22px;
    }
    .wrap .price{
        color: var(--color-high-text);
    }
    .wrap .collect::before{
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;


    }

</style>