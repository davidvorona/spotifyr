/* eslint-disable import/no-extraneous-dependencies */
const request = require("request");

const spotifyUserController = {
    fetchSpotifyUser: (req, res, next) => {
        console.log("Fetching user...");
        const access_token = req.body.access_token || req.cookies.access_token;
        const options = {
            url: "https://api.spotify.com/v1/me",
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            req.body.spotifyId = body.id;
            req.body.spotifyName = body.display_name;
            req.body.imageUrl = body.images[0].url;
            return next();
        });
    }
};

module.exports = spotifyUserController;
