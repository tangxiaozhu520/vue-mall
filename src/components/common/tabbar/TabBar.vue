<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "TabBar",

    }
</script>

<style scoped>
.tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100vw;
    height: 49px;
    background-color: #F6F6F6;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,0.08);
    display: flex;
    text-align: center;

}
</style>