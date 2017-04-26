/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const cookieParser = require("cookie-parser");
const webpackConfig = require("./webpack.config");

const spotifyController = require("./controllers/spotify/spotifyController");
const userController = require("./controllers/users/userController");

const app = express();

// webpack middleware
const compiler = webpack(webpackConfig);

const webpackDevMid = require("webpack-dev-middleware");
const webpackHotMid = require("webpack-hot-middleware");

app.use(webpackDevMid(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMid(compiler));

// spotify auth routes and middleware
app.use(cookieParser());

app.use("static/", express.static(path.join(__dirname, "app/")));

app.get("/login", spotifyController.requestAuthToAccessData);

app.get("/callback",
  spotifyController.requestAccessAndRefreshTokens,
  spotifyController.fetchSpotifyUser,
  userController.saveUser
);

// have to figure out when exactly I'll use this
app.get("/refresh_token", spotifyController.refreshToken, userController.saveUser);

// app and api routes
app.get("/", (req, res) => {
    if (!req.cookies.access_token) return res.redirect("/login");
    return res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("You're listening at http://localhost:8080.");
});

module.exports = app;
