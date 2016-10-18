var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve("public/"),
        filename: "bundle.js"
    },
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
    }

}
