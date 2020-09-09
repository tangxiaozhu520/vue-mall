<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CartBottomBar from "./cart/CartBottomBar";
    import CartList from "./cart/CartList";
    export default {
        name: "Cart",
        components:{
            NavBar,
            CartList,
            CartBottomBar
        },
        computed:{
            cartLength(){
                return this.$store.state.carList.length;
            }
        }
    }
</script>

<style scoped>
    .cart{
        position: relative;
    }
    .cart .cart-nav{
        background-color: var(--color-tint);
        font-size: 16px;
        color: #fff;
        font-weight: 700;
    }
</style>