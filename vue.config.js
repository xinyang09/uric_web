const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
     devServer: {
         allowedHosts: "all",
         host:"127.0.0.1",
         port: "8080",
     },
})