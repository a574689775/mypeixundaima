<template>
    <div class="footer" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" 
        :key="index" :to="obj.path"
        @click.native="$store.commit('change',obj)"
        >{{obj.title}}</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/movie',
                        color:'orange'
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'lightgreen'
                    },
                    {
                        title:'图书',
                        path:'/book',
                        color:'lightblue'
                    },
                    {
                        title:'图片',
                        path:'/picture',
                        color:'pink'
                    }
                ]
            }
        },
        created(){
            this.menu.forEach((obj,index) => {
                if(obj.path==this.$route.path){
                    this.$store.commit('change',obj);
                }
            });
        }
        
    }
</script>

<style lang="scss" scoped>
.footer{
    height: 1rem;
    background-color: #f00;
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 1rem;
    display: flex;
    font-size: 15px;
    a{
        flex: 1;
        color: black;
    }
    .router-link-active{
        color: white;
        text-decoration: none;
    }
}
</style>