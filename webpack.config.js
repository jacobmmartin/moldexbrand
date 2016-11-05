var path = require('path');
var webpack = require("webpack")
module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve("public/"),
        filename: "bundle.js"
    },
    watch: true,
     plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module:{
        loaders : [
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader'
            },
            {
              test: /vendor\/.+\.(jsx|js)$/,
              loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            },
            {
              test : /\.jsx?$/,
              loader: 'babel',
              query:{
                  presets: [
                      'react',
                      'es2015'
                  ]
              }
            }
        ]
    },
    devServer: {
      contentBase: './public'
    }
}
