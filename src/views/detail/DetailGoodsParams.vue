<template>
    <div class="detail-params" v-if="paramsInfo">
        <div class="top-params">
            <table>
                <tr v-for="(item,index) in paramsInfo.rule.tables[0]" :key="index">
                    <td v-for="(item1,index1) in item" :key="index1">
                        {{item1}}
                    </td>
                </tr>
            </table>
        </div>
        <div class="bottom-params">
            <table>
                <tr v-for="(item,index) in paramsInfo.info.set" :key="index">
                    <td>{{item.key}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsParams",
        props:{
            paramsInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }

    }
</script>

<style scoped>
    .detail-params{
        padding: 10px;
    }
    .top-params table{
        width: 100%;
        font-size: 14px;
        color: var(--color-text);
    }
    .top-params table tr{
        height: 42px;
        line-height: 42px;
        text-align: left;
    }
    .top-params table tr td{
        border-bottom: 1px solid #eee;
    }
    .bottom-params table{
        width: 100%;
        font-size: 14px;
        color: var(--color-text);
        border-collapse: collapse;
    }
    .bottom-params tr {
        /*height: 45px;*/
        /*line-height: 45px;*/
        text-align: left;
        display: flex;
        align-items: center;
        /*border: 1px solid red;*/
        border-bottom: 1px solid #eee;
    }
    .bottom-params tr td{
        padding: 15px;
        /*border-bottom: 1px solid #eee;*/
    }
    .bottom-params tr td:nth-child(1){
        flex: 1;
    }
    .bottom-params tr td:nth-child(2){
        flex: 3;
        color: var(--color-high-text);
        font-weight: 500;
    }

</style>