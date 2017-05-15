const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry:{
        app: './app.js',
    },
    module: {
    rules: [{
        test: /\.css$/,
        use: 'css-loader',
        use: ExtractTextPlugin.extract({
            use: ['css-loader']
        })

    }]},
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};