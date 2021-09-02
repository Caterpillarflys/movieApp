const path = require("path")

module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/api":{
                // target:"http://39.97.33.178",
                target:"https://m.maoyan.com",
                changOrigin:true,
                pathRewrite:{'^/api':''}
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias: {
                "@":path.resolve(__dirname,"./src/"),
                "common":path.resolve(__dirname,"./src/common/"),
                "components":path.resolve(__dirname,"./src/components/"),
                "api":path.resolve(__dirname,"./src/api/"),
                "views":path.resolve(__dirname,"./src/views/"),
                "utils":path.resolve(__dirname,"./src/utils/"),
                "router":path.resolve(__dirname,"./src/router/"),
                "store":path.resolve(__dirname,"./src/store/"),
            }
        }
    }
}