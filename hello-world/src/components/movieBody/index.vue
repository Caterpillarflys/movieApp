<template>
    <div class="wrap">
        <div class="list" v-for="(item,index) in movieList" :key="index">
            <div class="img">
                <img :src="item.img | toImg('128.180')" alt="正在加载">
            </div>
            <div class="message">
                <div class="message-list">
                    <h2 class="longLimit">{{item.nm}}</h2>
                    <p class="longLimit" v-if="item.globalReleased">
                       <span class="text-color">观众评</span>
                       <span style="color:#faaf00;font-size:30px;margin-left:6px">{{item.sc}}</span>
                    </p>
                    <p class="longLimit" v-else>
                        <span style="color:#faaf00;font-size:30px;margin-right:6px">{{item.wish}}</span>
                       <span class="text-color">人想看</span>
                    </p>
                    <p class="text-color longLimit">主演：{{item.star}}</p>
                    <p class="p-last text-color longLimit">
                        {{item.showInfo}}
                    </p>
                </div>
                <div :class="item.globalReleased?'buy':'sell'">
                    {{item.globalReleased?"购票":"预售"}}
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { getMovieNow } from 'api/movie'
export default {
    name:"moviebody",
    async created(){
        let data = await getMovieNow()
        // console.log(data.data.movieList)
        this.movieList = data.data.movieList
    },
    data(){
        return {
            //初始化
            movieList:[]
        }
    }
    
}
</script>


<style  scoped>
.wrap{background-color: #fff;width: 100%;height: 100%;
padding:10px 30px 26px 14px;overflow: scroll}
.list{width: 100%;height: 220px;display: flex;}
.img{width: 128px;height: 180px;background:#fff}
.message{display: flex;justify-content: space-between;flex:1;height: 180px;
padding: 12px 0;align-items: center}
.message-list{display: flex;flex-direction: column;
justify-content: space-between;padding-left: 20px}
.sell{width: 94px;height: 54px;border-radius: 4px;background: #3c9fe6;
font-size: 24px;line-height: 54px;white-space: nowrap;text-align: center
;color:#fff}
.buy{width: 94px;height: 54px;border-radius: 4px;background: #f03d37;
font-size: 24px;line-height: 54px;white-space: nowrap;text-align: center
;color:#fff}
.message-list>h2{font-size: 35px;font-weight: bold;margin-bottom: 8px;color: #777}
.message-list>p{margin-bottom: 8px}
.message-list>.p-last{margin: 0}
.text-color{color: #666}
/* 单行文本溢出省略 */
.longLimit{width: 290px;overflow:hidden; white-space: nowrap;text-overflow: ellipsis;}
</style>