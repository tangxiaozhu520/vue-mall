<template>
    <div class="cart-bar">
        <div class="check-icon" :class="{goodsCheck: isSecect}" @click="check" v-model="isAll">
              <img src="~assets/img/cart/tick.svg" alt=""> 全选
        </div>
        <div class="total">
            合计: ￥{{totalPrice}}
        </div>
        <div class="goPay">
            去结算: ({{payLength}})
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartBottomBar",
        data(){
            return{
                // total:0,
                isAll:true
                // carList: []

            }
        },
        methods:{

        },
        computed:{
            totalPrice(){
                var total=0;
                this.$store.state.carList.map(item=>{
                    if(item.checked){
                        total+=item.count*item.newPrice;
                    }

                })
                return total;

            },
            payLength(){
                var length=0;
                this.$store.state.carList.forEach(item=>{
                    if(item.checked==true){
                        length+=1
                    }
                })
                return length;
            },
            isSecect(){
                this.$store.state.carList.forEach(item=>{
                    if(!item.checked){
                        this.isAll=false;
                    }
                })
                return this.isAll;

            }


        },
        filters:{
            formatPrice(price){
                return parseInt(price).toFixed(2)
            },

        },
        methods:{
            check(){
                this.isAll=!this.isAll;
                if(this.isAll){
                    this.$store.state.carList.forEach(item=>{
                        this.$store.commit('checkall',true)
                    })

                }else {
                     this.$store.commit('checkall',false)
                }

            }
        }
    }
</script>

<style scoped>
    .cart-bar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 48px;
        height: 44px;
        line-height: 44px;
        display: flex;
        background-color: #eee;
    }
    .cart-bar .check-icon{
        text-align: center;
        width: 80px;
    }
    .cart-bar .check-icon img{
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
    .goodsCheck img{
        background-color: var(--color-high-text);
    }
    .goPay{
        text-align: center;
        width: 110px;
        background-color: var(--color-high-text);
        color: #fff;
    }
    .total{
        flex: 1;
    }
</style>