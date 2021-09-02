import http from 'utils/http.js'

//正在热映接口
export const getMovieNow = () => http("get", "/api/ajax/movieOnInfoList", {})
//即将上映接口
export const getMovieComming = (id = 10) => http("get", "/api/movieComingList", { cityId: id })

