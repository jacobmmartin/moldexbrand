var path = require('path');

var I18nPlugin = require("i18n-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require("webpack")

var languages = {
    "en": require("./en.json"),
    "de": require("./de.json")
};
module.exports = Object.keys(languages).map(function (language) {

    return {
        name: language,
        entry:{ 
            app:"./app/app.js",
            vendor: ["jquery", "./app/js/animations/js/animations.min.js","./app/js/animations/js/smoothscroll.js",
            "./app/js/form/jquery.form.min.js", "./app/js/form/jquery.validate.min.js",
            ],
            }
            ,
         output: {
            path: path.join(__dirname, "public"),
            filename: language + ".output.js",
        },

        plugins: [
            new I18nPlugin(
                languages[language]
            ),
            new CopyWebpackPlugin([
               {from: 'images/**/*', to: ''}
            ]),
             new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  
        ],

        watch: true,

        devServer: {
            contentBase: './public'
        },

        module: {
            loaders: [
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
                    test: /\.jsx?$/,
                    loader: 'babel',
                    query: {
                        presets: [
                            'react',
                            'es2015'
                        ]
                    }
                }
            ]
        }
    }
})
