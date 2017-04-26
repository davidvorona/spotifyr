/* eslint-disable import/no-extraneous-dependencies */
const pg = require("pg");

const connectionString = "postgres://localhost:5432/spotifyr";

const toPGDate = () => new Date().toISOString().slice(0, 19).replace("T", " ");

const userController = {
    saveUser: (req, res) => {
        const results = [];
        const { spotify_id, access_token, refresh_token } = req.body;
        const date_created = toPGDate();

        pg.connect(connectionString, (err, client, done) => { // eslint-disable-line consistent-return
            if (err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err });
            }

            // SQL Query > Find User
            const query = client.query("INSERT INTO app_user (spotify_id, " +
              "access_token, refresh_token, date_created) " +
              "VALUES ($1, $2, $3, $4) ON CONFLICT (spotify_id) DO UPDATE " +
              "SET access_token = EXCLUDED.access_token, refresh_token = EXCLUDED.refresh_token",
              [spotify_id, access_token, refresh_token, date_created]);

            query.on("error", (error) => {
                done();
                results.push(error);
                return res.status(500).json(results);
            });

            // stream results back one row at a time
            query.on("row", (row) => {
                results.push(row);
            });

            query.on("end", () => {
                done();
                res.redirect("/");
            });
        });
    }
};

module.exports = userController;
