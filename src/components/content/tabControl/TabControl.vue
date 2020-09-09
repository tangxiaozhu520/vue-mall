<template>
    <div class="tabcontrol" >
        <div class="tab-item" v-for="(item,index) in data" :key="index" @click="tabClick(index)">
            <span class="item-text" :class="{active:currentIndex===index}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabConTrol",
        props:{
            data:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex: 0,

            }
        },
        methods:{
            tabClick(index){
                this.currentIndex=index;
                this.$emit('tabClick',index);
            }
        }
    }
</script>

<style scoped>
    .tabcontrol{
        width: 100vw;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .tab-item{
        flex: 1;
        text-align: center;
        font-size: 15px;
        color: var(--color-text);
    }
    .tab-item .item-text{
        padding: 5px 10px;
        /*border-bottom: 2px solid var(--color-high-text);*/
    }
    .item-text.active{
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    }
</style>