var webpack = require('webpack');
var path = require('path');
module.exports={
    devtool:"eval-source-map",
    entry:{     //入口配置
        one:'./js/one.js',
        two:'./js/two.js',
        three:'./js/three.js',
        four:"./js/four.js",
        fiew:"./js/fiew.js",
        six:"./js/six.js",
        seven:"./js/seven.js",
        dialog:"./js/dialog.js"
    },
    output:{    //入口文件输出配置
        path:'dist',   //文件目录
        filename:'js/[name].js'  //文件名

    },
    devServer:{
        contentBase:"./html",  //本地服务器所加载的页面所在的目录
        colors:true,   //终端中输出结果为彩色
        inline:true
    },
    module:{  //相对应的配置
        loaders:[  //加速器的配置
            {test:/\.css$/, loader:'style!css'},    //css
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},  //scss
            {test:/\.(png|jpg|gif)$/, loader:'url-loader?limit=8192&name=../img/[name].[ext]'},  //图片
            {test: /\.js$/, loader: 'babel', exclude: 'node_modules/'}    //js
        ]
    },
    plugins:[    //插件
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]
};