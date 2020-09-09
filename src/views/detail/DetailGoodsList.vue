<template>
    <div class="detail-goods-list">
        <goods-list-item v-for="(item,index) in recommendList" :key="index" :goods="item" class="goods-item" @goodsImgLoad="imgLoad"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "../home/GoodsListItem";
    export default {
        name: "DetailGoodsList",
        props:{
            recommendList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                count:0
            }
        },
        components:{
            GoodsListItem
        },
        methods:{
            imgLoad(){
                this.count++;
                if(this.recommendList && this.recommendList.length===this.count){
                    this.$emit('imgLoad')
                }
            }
        }
    }
</script>

<style scoped>
    .detail-goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .detail-goods-list .goods-item{
        width: 45%;
    }
</style>