const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: './lesson-2/AntonPugachev',
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./lesson-2/AntonPugachev/index.html"
        })
    ]
}