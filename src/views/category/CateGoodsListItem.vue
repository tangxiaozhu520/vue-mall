<template>
    <div class="cate-goods-list-item">
        <div class="cate-img-wrap">
            <img :src="items.img" alt="">
        </div>
        <div class="cate-des">
            <div class="cate-title">{{items.title}}</div>
            <span class="price">￥{{items.price}}</span>
            <span class="collect"> {{items.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cateGoodsListItem",
        props:{
            items:{
                type:Object,
                default(){
                    return {}
                }
            }
        }

    }
</script>

<style scoped>
    .cate-goods-list-item{
        position: relative;
        padding-bottom: 40px;
    }
    .cate-img-wrap{
        width: 115px;
        height: 172px;
        border-radius: 6px;
        overflow: hidden;
    }
    .cate-img-wrap img{
        width: 100%;
    }
    .cate-des{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        font-size: 12px;
        color: var(--color-text);
    }
    .cate-des .price{
        color: var(--color-tint);
        margin-right: 15px;
    }
    .cate-des .cate-title{
        overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
    }
    .cate-des .collect{
        position: relative;
    }
    .cate-des .collect::before{
        content: '';
        position: absolute;
        left: -10px;
        top: 0px;
        background: url("~assets/img/common/collect.svg") 0 0/12px 12px;
        width: 12px;
        height: 12px;

    }

</style>