const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'js/[name].[contenthash:10].js',
        publicPath: './'
    },
    
    module:{
        rules: [
            {
                oneOf:[
                    {
                        test: /\.js$/,
                        exclude: /node_modules/, 
                        loader:'babel-loader',
                        options:{
                            cacheDirectory:true
                        }
                    },
                    {
                        test: /\.html$/,
                        use:[
                            {
                                loader: "html-loader",
                            }
                        ]
                    },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use:[
                            'file-loader?name=img/[name].[hash:6].[ext]',
                        ],
                        // loader:"url-loader",
                        // options:{
                        //     limit: 20 * 1024,
                        //     outputPath: './style/img'
                        // },
                    },
                    {
                        test:/\.scss$/,
                        use:[
                            // 'style-loader',
                            //Replace style-loader, seperate css file from bundle.js
                            
                            MiniCssExtractPlugin.loader,
                            {
                                loader:'css-loader',
                            },
                            // browserlist parameters
                            /* 
                            "browserslist":{
                                "development" : [
                                  "last 1 chrome version",
                                  "last 1 firefox version",
                                  "last 1 safari version"
                                ],
                                "production" : [
                                  ">0.2%",
                                  "not dead",
                                  "not op_mini all"
                                ]
                              }
                            */
                            {
                                loader:'postcss-loader',
                            },
                            {
                                loader:'sass-loader',
                            },
                        ]
                    },
                ]
            }
        ]
    },
    externals:{
        'jquery' : 'jQuery',
        'gsap' : 'gsap'
    },
    plugins: [
        new HtmlWebPackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          minify:{
              //remove whitespace
              collapseWhitespace: true,
              removeComments:true
          }
        }),
        new MiniCssExtractPlugin({
            filename:"[name].[contenthash:10].css",
            chunkFilename: "[id].css"
        })
      ],
    mode: 'development',
    // devServer:{
    //     contentBase:path.resolve(__dirname, "public"),
    //     watchContentBase: true,
    //     compress:true,
    //     port:3000,
    //     hot:true,
    //     inline:true,
    // },
    devtool : 'source-map'
}