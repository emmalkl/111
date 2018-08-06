const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports={
    entry:'./src/index.js',
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
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
}