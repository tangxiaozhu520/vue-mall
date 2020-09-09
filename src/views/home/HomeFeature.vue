<template>
    <div class="feature">
        <div class="feature-item" v-for="(item,index) in features" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFeature",
        props:{
            features:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .feature{
        display: flex;
        font-size: 14px;
        color: var(--color-text)

    }
    .feature-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .feature-item a{
        text-align: center;
    }
    .feature-item img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
</style>