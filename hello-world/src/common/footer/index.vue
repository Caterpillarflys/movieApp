<template>
    <div id="footer">
        <ul>
            <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path" >
                {{item.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"tabbar",
    data(){
        return {
             tabbar:[
                {
                    title:"电影",
                    path:"/movie",
                },
                {
                    title:"影院",
                    path:"/cinema",
                },
                {
                    title:"我的",
                    path:"/mine",
                }
            ]
        }
    }
}
</script>

<style scoped>
#footer{
    position: absolute;left: 0;bottom: 0;background: #ccc;
    width: 100%;height: 1rem;
}
ul{display: flex;justify-content: space-around;line-height: 49px};

</style>