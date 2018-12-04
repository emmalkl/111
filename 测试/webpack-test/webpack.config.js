const path=require('path');
const webpack=require("webpack");
module.exports={
    //入口文件配置
    entry:'./src/index.js',
    //出口文件配置
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    }
}