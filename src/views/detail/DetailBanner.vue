<template>
    <div class="detail-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "DetailBanner",
         props:{
            banner:{
                type: Array,
                default(){
                    return []
                }
            }
        },
    }
</script>

<style scoped>
    .detail-swiper{
        width: 100vw;
    }
    .my-swipe .van-swipe-item{
        width: 100%;
        overflow: hidden;
        height: 300px;
    }
    .my-swipe .van-swipe-item  img{
        width: 100%;
        vertical-align: middle;

  }
</style>