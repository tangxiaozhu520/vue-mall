<template>
    <div class="cate-goods">
        <div class="goods-item" v-for="(item,index) in cates" :key="index">
            <a :href="item.link">
                <div class="img-wrap">
                    <img :src="item.image" alt="">
                </div>
                <div class="item-title">
                    {{item.title}}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CateGoods",
        props:{
            cates:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .cate-goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        font-size: 12px;
        color: var(--color-text);
    }
    .cate-goods .goods-item{
        width: 33%;
        text-align: center;
        margin-bottom: 15px;
    }
    .goods-item .img-wrap img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>