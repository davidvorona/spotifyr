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
        const access_token = req.cookies.access_token;
        const href = req.query.href;
        const options = {
            url: href,
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            req.body.currentPlaylist = body;
            return next();
        });
    },

    formatMusic: (req, res, next) => {
        const songs = [];
        const playlists = [];
        req.body.songs.items.forEach((el) => {
            const temp = [];
            temp.push(el.track.name);
            const tempArtists = [];
            el.track.artists.forEach((i) => {
                tempArtists.push(i.name);
            });
            temp.push(tempArtists);
            temp.push(el.track.album.name);
            temp.push(el.track.external_urls.spotify);
            songs.push(temp);
        });

        req.body.playlists.items.forEach((el) => {
            const temp = [];
            temp.push(el.name);
            temp.push(el.tracks.total);
            temp.push(el.tracks.href);
            playlists.push(temp);
        });
        req.body.songs = songs;
        req.body.playlists = playlists;
        return next();
    },

    formatPlaylist: (req, res, next) => {
        const currentPlaylist = [];
        req.body.currentPlaylist.items.forEach((el) => {
            if (el.track.external_urls.spotify !== undefined) {  // is undefined if song is from local machine
                const temp = [];
                temp.push(el.track.name);
                const tempArtists = [];
                el.track.artists.forEach((i) => {
                    tempArtists.push(i.name);
                });
                temp.push(tempArtists);
                temp.push(el.track.album.name);
                temp.push(el.track.external_urls.spotify);
                currentPlaylist.push(temp);
            }
        });
        req.body.currentPlaylist = currentPlaylist;
        return next();
    },

    fetchNowPlaying: (req, res, next) => {
        const nowPlaying = [];
        const access_token = req.cookies.access_token;
        const options = {
            url: "https://api.spotify.com/v1/me/player",
            // url: "https://api.spotify.com/v1/me/player/currently-playing",
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            nowPlaying.push(body.item.name);
            const tempArtists = [];
            body.item.artists.forEach((el) => {
                tempArtists.push(el.name);
            });
            nowPlaying.push(tempArtists);
            nowPlaying.push(body.item.album.name);
            nowPlaying.push(body.item.album.images[0].url);
            req.body.nowPlaying = nowPlaying;
            return next();
        });
    }
};

module.exports = spotifyMusicController;
