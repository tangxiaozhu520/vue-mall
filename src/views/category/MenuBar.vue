<template>
    <div class="menu-bar">
        <ul>
            <li v-for="(item,index) in menu" :key="index" :class="{active: currentIndex===index}" @click="liClick(index)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuBar",
        props:{
            menu:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            liClick(index){
                this.currentIndex=index;
                this.$emit('liClick',index)
            }
        }
    }
</script>

<style scoped>
    .menu-bar{
        background-color: #F6F6F6;
        width: 100px;
        font-size: 14px;
        color: var(--color-text);
    }
    .menu-bar ul li{
        height: 45px;
        line-height: 45px;
        text-align: center;
    }
    .menu-bar ul li.active{
        border-left: 4px solid var(--color-high-text);
        font-weight: 700;
        color: var(--color-high-text);
        background-color: #fff;
    }
</style>