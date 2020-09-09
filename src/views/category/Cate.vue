<template>
    <div class="cate">
        <cate-goods :cates="cates"></cate-goods>
        <tab-control :data="['综合','新品','销量']" class="cate-tab" @tabClick="tabClick"></tab-control>
        <cate-goods-list :tabGoods="tabGoods" :key="tabGoods"></cate-goods-list>

    </div>
</template>

<script>
    import TabControl from "components/content/tabControl/TabControl";
    import CateGoods from "./CateGoods";
    import CateGoodsList from "./CateGoodsList";
    export default {
        name: "Cate",
        components:{
            CateGoods,
            TabControl,
            CateGoodsList
        },
        props:{
            cates:{
                type:Array,
                default(){
                    return []
                }
            },
            tabGoods:{
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods:{
            tabClick(index){
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
.cate-tab{
    width: 100%;
    height: 40px;
}
</style>