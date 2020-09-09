<template>
    <div class="goods-list" v-if="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods="item" class="goods-item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
        props:{
            goods:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        components:{
            GoodsListItem
        },

    }
</script>

<style scoped>
    .goods-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .goods-list .goods-item{
        width: 45%;

    }


</style>