const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack=require("webpack");
const entry=require('./webpack_config/webpack_entry.js');
const CopyWebpackPlugin=require('copy-webpack-plugin');

module.exports={
    entry:entry,
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:[{
                            loader:"css-loader",
                            options:{importantLoaders:1}
                        },'postcss-loader'],
                        publicPath:'../'
                    })
            },{
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        limit:500,
                        outputPath:'img/'
                    }
                }]
            },{
                test:/\.(html|htm)$/,
                loader:'html-withimg-loader'
            },{
                test:/\.scss$/,
                // use:['style-loader',"css-loader",'sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader",'sass-loader']
                })
            },{
                test:/\.js$/,
                use:{
                  loader:"babel-loader",
                  options:{presets:'env'}
                }   
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("./css/main.css"),
        new HtmlWebpackPlugin({
            title:"fellow23",
            minify:{
                removeAttributeQuotes:true
            },
            has:true,
            template:'./src/index.html'
        }),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin("唯创网讯"),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname+'/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
}