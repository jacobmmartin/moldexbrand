module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/bundle.js"
    },
    module:{
        loaders : [
            {
              test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
              test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file"
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
