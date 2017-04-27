/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const webpackConfig = require("./webpack.config");

const spotifyController = require("./controllers/spotify/spotifyController");
const userController = require("./controllers/users/userController");
const communityController = require("./controllers/communities/communityController");

const app = express();
const server = require("http").createServer(app);

// websockets setup and hideous clientsCount func
const io = require("socket.io")(server);

const clientsCount = comm_name => Object.keys(io.nsps[`/${comm_name}`].adapter.nsp.connected).length + 1;

io.on("connection", () => {
    console.log("Connected to sockets.");
});

// webpack middleware
const compiler = webpack(webpackConfig);

const webpackDevMid = require("webpack-dev-middleware");
const webpackHotMid = require("webpack-hot-middleware");

app.use(webpackDevMid(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMid(compiler));

app.use("static/", express.static(path.join(__dirname, "app/")));
app.use(bodyParser.json());

// spotify auth routes and middleware
app.use(cookieParser());

app.get("/login", spotifyController.requestAuthToAccessData);

app.get("/callback",
  spotifyController.requestAccessAndRefreshTokens,
  spotifyController.fetchSpotifyUser,
  userController.saveUser
);

// have to figure out when exactly I'll use this
app.get("/refresh_token", spotifyController.refreshToken, userController.saveUser);

// app and api routes
app.get("/community", communityController.fetchCommunity, (req, res) => {
    const nsp = io.of(`/${req.query.comm_name}`);
    nsp.on("connection", (socket) => {
        console.log("Someone connected to nsp.");
        socket.on("USER_JOINED", data => console.log(data.message));
    });
    res.send([req.query.comm_name, "Love Me", "Lil Wayne", clientsCount(req.query.comm_name)]);
});

app.post("/community", communityController.saveCommunity, (req, res) => {
    const nsp = io.of(`/${req.body.comm_name}`);
    nsp.on("connection", (socket) => {
        console.log("Someone connected to nsp.");
        socket.on("USER_JOINED", data => console.log(data.message));
    });
    res.send([req.body.comm_name, "Love Me", "Lil Wayne", clientsCount(req.body.comm_name)]);
});

app.get("/", (req, res) => {
    if (!req.cookies.access_token) return res.redirect("/login");
    return res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("You're listening at http://localhost:8080.");
});

module.exports = app;
