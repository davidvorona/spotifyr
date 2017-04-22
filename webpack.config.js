module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/app/webpack",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./app",
        port: 8080
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader",
                query: { presets: ["es2015", "react"] }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "css-loader"
            }
        ]
    }
};
