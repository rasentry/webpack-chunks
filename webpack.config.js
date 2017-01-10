const webpack = require('webpack');

module.exports = {
    entry: {
        main: ['./src/Main.js']
    },
    output: {
        filename: "[name].js",
        path: "./build"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            minChunks: 2,
            children: true
        })
    ]
};