<template>
    <div class="tabbar-item" @click="itemClick">
        <div class="item-icon" v-show="!isActive">
            <slot name="icon"></slot>
        </div>
        <div class="item-active-icon" v-show="isActive" >
            <slot name="active-icon"></slot>
        </div>
        <div class="item-text" :style="activeStyle">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        data(){
            return {

            }
        },
        props:{
            link:{
                type:String,
                required:true
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.link) !== -1
            },
            activeStyle(){
                return this.isActive ? {color: "#FF5777"} : ""
            }
        },
        methods:{
            itemClick(){
                this.$router.replace(this.link);
            }
        }

    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: var(--color-text);



    }
    .item-active-icon img,.item-icon img{
        width: 24px;
        height: 24px;
        vertical-align: middle;

    }
    .item-text{
        font-weight: 700;
    }

</style>