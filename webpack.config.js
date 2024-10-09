const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = require('webpack-dev-server');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'js', 'index.js'),
    plugins: [
        new HtmlWebpackPlugin( {template: path.resolve(__dirname, 'public', 'index.html')} ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',  
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',  
            },
        ]
    },
    devServer: {
        port: 5000,
        open: true,
    }
}