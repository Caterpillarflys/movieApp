<template>
    <div>
        <HeaderCom />
       <div id="content">
            <div class="movie_menu">
                <router-link class="movie_menu_city" to="/city" tag="div">
                    <span>城市</span>
                </router-link>
                <ul class="movie_menu_switch">
                    <router-link class="movie_menu_active menu" to="/movie/movieBody" tag="div">正在热映</router-link>
                    <router-link  class="movie_menu_deactive menu" to="/movie/movieComming" tag="div">即将上映</router-link>
                </ul>
                <router-link class="movie_meun_search" to="/search" tag="div">
                   搜索
                </router-link>
            </div>
            <!-- 展示热映上映子路由 -->
            <router-view />
            <!-- <moviebody />
            <moviecomming /> -->
           
  
       </div>
    </div>
</template>



<script>
// import moviebody from '../../components/movieBody/index.vue'
// import moviecomming from '../../components/movieComming/index.vue'
// import City from '../../components/city/index'
// import Search from '../../components/search/index'

export default {
    name:'movie',
    // components :{
    //     moviebody,
    //     // moviecomming,
    //     // City,
    //     // Search
    // }
}
</script>



<style scoped>
#content{width: 100%;position: fixed;left: 0;top: 1rem;bottom: 1rem;}
.movie_menu{display: flex;justify-content: space-around;width: 100%;height: 44px;font-size: 25px;
line-height: 44px;text-align: center;border-bottom: 1px solid #666}
.movie_menu_switch{display: flex;justify-content: space-between;width: 40%}
.menu{padding:0 12px}
.movie_menu_city{width: 30%;height: 100%;}
.movie_meun_search{width: 30%;height: 100%;}
.movie_menu div:hover{color: #ef4238;border-bottom:2px solid #ef4238;z-index: 1000}
</style>