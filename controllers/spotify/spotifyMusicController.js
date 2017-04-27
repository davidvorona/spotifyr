/* eslint-disable import/no-extraneous-dependencies */
const request = require("request");

const spotifyMusicController = {
    fetchSpotifySongs: (req, res, next) => {
        const access_token = req.cookies.access_token;
        const options = {
            url: "https://api.spotify.com/v1/me/tracks",
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            req.body.songs = body;
            return next();
        });
    },

    fetchSpotifyPlaylists: (req, res, next) => {
        const access_token = req.cookies.access_token;
        const options = {
            url: "https://api.spotify.com/v1/me/playlists",
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            req.body.playlists = body;
            return next();
        });
    },

    fetchPlaylistTracks: (req, res, next) => {
        const access_token = req.ccokies.access_token;
        const playlist_id = req.query.playlistId; // this depends on playlist object
    },

    formatMusic: (req, res, next) => {
        const songs = [];
        const playlists = [];
        req.body.songs.items.forEach((el) => {
            const temp = {};
            temp.album = el.track.album.name;
            temp.artists = [];
            el.track.artists.forEach(i => temp.artists.push(i.name));
            temp.name = el.track.name;
            temp.href = el.track.external_urls.spotify;
            songs.push(temp);
        });

        req.body.playlists.items.forEach((el) => {
            const temp = {};
            temp.name = el.name;
            temp.tracks = el.tracks;
            playlists.push(temp);
        });
        req.body.songs = songs;
        req.body.playlists = playlists;
        return next();
    }
};

module.exports = spotifyMusicController;
