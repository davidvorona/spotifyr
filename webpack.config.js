const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "webpack-hot-middleware/client",
        "./app/index.js"
    ],
    output: {
        path: path.join(__dirname, "dist/"),
        publicPath: "/static/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /bootstrap\/js\//,
                loader: "imports-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader"
            }
        ]
    }
};
