import Vue from "vue"
import HeaderCom from './header'


//定义了一个全局组件
Vue.component("HeaderCom",HeaderCom)


//定义一个全局过滤器
//处理图片路径替换
//请求过来的img: "http://p0.meituan.net/w.h/movie/d5bc40a51534c26acbafd49c1dc484.jpg"
//原网站img："http://p0.meituan.net/128.180/movie/d5bc40a51534c26acbafd49c1dc484.jpg"
Vue.filter('toImg',(url,params)=>{
    return url.replace(/w\.h/ ,params);
})