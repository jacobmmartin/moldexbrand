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
              test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
              loader: "url-loader?limit=10000&names=images/[name].[ext]"
            },
            {
              test : /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
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
