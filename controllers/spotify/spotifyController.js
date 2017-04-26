/* eslint-disable import/no-extraneous-dependencies */
const querystring = require("querystring");
const request = require("request");

const { client_id, client_secret, redirect_uri } = require("../../secret");

const generateRandomString = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = "spotif_auth_state";

const spotifyController = {
    requestAuthToAccessData: (req, res) => {
        const state = generateRandomString(16);
        res.cookie(stateKey, state);

        // client gets account info, playlists, streaming(?) music library, and modify privileges
        const scope = "user-read-private user-read-email playlist-read-private streaming " +
              "user-library-read playlist-modify-private";
        const queryString = querystring.stringify({
            response_type: "code",
            client_id,
            scope,
            redirect_uri,
            state,
            show_dialog: true // show spotify login page every time
        });
        return res.redirect(`https://accounts.spotify.com/authorize?${queryString}`);
    },

    requestAccessAndRefreshTokens: (req, res, next) => {
        const code = req.query.code || null;
        const state = req.query.state || null;
        const storedState = req.cookies ? req.cookies[stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect(`/#${querystring.stringify({ error: "state_mismatch" })}`);
        } else {
            res.clearCookie(stateKey);
            const authOptions = {
                url: "https://accounts.spotify.com/api/token",
                form: {
                    code,
                    redirect_uri,
                    grant_type: "authorization_code"
                },
                headers: {
                    "Authorization": "Basic " + (new Buffer(client_id + ":" + client_secret).toString("base64"))
                },
                json: true
            };
            request.post(authOptions, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const access_token = body.access_token;
                    const refresh_token = body.refresh_token;
                    // expose tokens to client
                    res.cookie("access_token", access_token);
                    res.cookie("refresh_token", refresh_token);
                    req.body = {};
                    // store tokens in DB
                    req.body.access_token = access_token;
                    req.body.refresh_token = refresh_token;
                    return next();
                }
                return res.redirect(`/#${querystring.stringify({ error: "invalid_token" })}`);
            });
        }
    },

    refreshToken: (req, res, next) => {
        const refresh_token = req.cookies.refresh_token;
        const authOptions = {
            url: "https://accounts.spotify.com/api/token",
            headers: { "Authorization": "Basic " + (new Buffer(client_id + ":" + client_secret).toString("base64")) },
            form: {
                grant_type: "refresh_token",
                refresh_token
            },
            json: true
        };

        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                res.body.access_token = access_token;
                res.body.refresh_token = refresh_token;
                return next();
            }
        });
    },

    fetchSpotifyUser: (req, res, next) => {
        const access_token = req.body.access_token;
        const options = {
            url: "https://api.spotify.com/v1/me",
            headers: { "Authorization": `Bearer ${access_token}` },
            json: true
        };
        request.get(options, (error, response, body) => {
            if (error) return res.redirect("/error");
            req.body.spotify_id = body.id;
            return next();
        });
    }
};

module.exports = spotifyController;
