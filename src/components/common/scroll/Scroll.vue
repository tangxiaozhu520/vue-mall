<template>
    <div ref="wrapper" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "Scroll",
        props:{
            probeType:{
                type: Number,
                default:1
            },
            pullUpLoad:{
                type: Boolean,
                default: false
            }

        },
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            if(this.probeType==2 || this.probeType==3){
                this.scroll.on('scroll',(position)=>{
                    this.$emit('scroll', position)

                })
            }
            if(this.pullUpLoad){
                this.scroll.on('pullingUp',()=>{
                    this.$emit('pullingUp')
                })
            }


        },
        methods:{
            finishPullUp(){
                if(this.scroll){
                    this.scroll.finishPullUp();
                }
            },
            scrollTo(){
                if(this.scroll){
                    this.scroll.scrollTo(0,0,500)
                }

            }
        }
    }
</script>

<style scoped>

</style>