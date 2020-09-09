<template>
    <div class="cate-goods-list">
        <cate-goods-list-item v-for="(item,index) in tabGoods" :key="index" :items="item" class="list-item"></cate-goods-list-item>
    </div>
</template>

<script>
    import CateGoodsListItem from "./CateGoodsListItem";
    export default {
        name: "cateGoodsList",
        components:{
            CateGoodsListItem
        },
        props:{
            tabGoods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .cate-goods-list{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .cate-goods-list .list-item{
        width: 45%;
    }
</style>