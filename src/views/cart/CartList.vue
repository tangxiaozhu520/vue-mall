<template>
    <div class="cart-list">
        <ul>
            <li v-for="(item,index) in $store.state.carList" :key="index">
                <div class="check-icon" :class="{goodsCheck: item.checked}" @click="checkItem(index)">
                    <img src="~assets/img/cart/tick.svg" alt="">
                </div>
                <div class="img-wrap">
                    <img :src="item.imgURL" alt="">
                </div>
                <div class="desc-wrap">
                    <div class="goods-title">{{item.title}}</div>
                    <div class="goods-desc">商品描述: {{item.desc}}</div>
                    <div class="price-wrap">
                        <div class="goods-price">￥ {{item.newPrice}}</div>
                        <div class="goods-count">x {{item.count}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CartList",
        methods:{
            checkItem(index){
                this.$store.commit('checkItem',index)
            }
        }
    }
</script>

<style scoped>
    .cart-list{
        padding-top: 10px;
        width: 100vw;
        overflow-x: hidden;
    }
    .cart-list li{
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #eee;
        color: var(--color-text);

    }
    .check-icon{
        width: 30px;
        text-align: center;
    }
    .check-icon img{
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
    .cart-list li .img-wrap{
        width: 100px;
        text-align: center;
        vertical-align: middle;
    }
    .cart-list li .img-wrap img{
        width: 80px;
        border-radius: 8px;
    }
    .cart-list li .desc-wrap{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        font-size: 17px;
        padding: 0 10px;

        overflow: hidden;

    }
     .goods-desc,.goods-title{
        overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
        color: #333;
         margin: 5px 0;
    }

    .desc-wrap .price-wrap{
        display: flex;
        justify-content: space-between;

    }
    .goods-price{
        color: var(--color-high-text);
        font-weight: 700;
    }
    .goods-desc{
        font-size: 14px;
        color: var(--color-text);
    }
    .goodsCheck img{
        background-color: var(--color-high-text);

    }

</style>