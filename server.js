const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const app = express();
const compiler = webpack(webpackConfig);

const webpackDevMid = require("webpack-dev-middleware");
const webpackHotMid = require("webpack-hot-middleware");

app.use(webpackDevMid(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMid(compiler));

app.use("static/", express.static(path.join(__dirname, "app/")));
console.log(path.join(__dirname, "index.html"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("You're listening at http://localhost:8080.");
});
