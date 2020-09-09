<template>
    <div class="home-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.image" alt="">
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            banner:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{

            }
        },

    }
</script>

<style scoped>
    .home-swiper{
        width: 100vw;
    }
    .my-swipe .van-swipe-item  img{
        width: 100%;
        height: auto;
        vertical-align: middle;

  }

</style>