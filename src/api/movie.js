import http from 'utils/http.js'

//正在热映接口
export const getMovieNow = (id=10)=>http("get","/api/movieOnInfoList",{cityId:id})
//即将上映接口
export const getMovieComming = (id=10)=>http("get","/api/movieComingList",{cityId:id})













// 请求地址   http://39.97.33.178/api/searchList


// 功能:电影列表一正在热映
// 请求方式: GET
// 路径：/api/movieOnInfoList
// 参数: cityId

// 功能:电影列表一即将上映
// 请求方式: GET
// 路径：/api/movieComingList
// 参数: cityId

// 功能:影院
// 请求方式: GET
// 路径：/api/cinemaList
// 参数: cityId

// 功能:搜索
// 请求方式: GET
// 路径：/api/searchList
// 参数: cityId kw=a

// 功能:电影详情
// 请求方式: GET
// 路径：/api/detailmovie
// 参数:movieId

// 功能:城市
// 请求方式: GET
// 路径：/api/cityList
// 参数:无

// 功能:城市定位
// 请求方式: GET
// 路径：/api/getLocation
// 参数:无