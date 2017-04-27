const pg = require("pg");

const connectionString = "postgres://localhost:5432/spotifyr";

const toPGDate = () => new Date().toISOString().slice(0, 19).replace("T", " ");

const communityController = {
    fetchAll: (req, res) => {
        const results = [];

        pg.connect(connectionString, (err, client, done) => { // eslint-disable-line consistent-return
            if (err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err });
            }

            // SQL Query > Find User
            const query = client.query("SELECT comm_name, private, created_by ",
            "FROM community");

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
                res.send(results);
            });
        });
    },

    fetchCommunity: (req, res) => {
        const results = [];
        return results;
    },

    saveCommunity: (req, res) => {
        const results = [];
        const comm_name = req.body.comm_name;
        const comm_access = req.body.access;
        const created_by = "vijuhas"; // fetch from spotify api
        const date_created = toPGDate();

        pg.connect(connectionString, (err, client, done) => { // eslint-disable-line consistent-return
            if (err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err });
            }

            // SQL Query > Find User
            const query = client.query("INSERT INTO community(comm_name, " +
              "private, created_by, date_created) " +
              "VALUES ($1, $2, $3, $4)",
              [comm_name, comm_access, created_by, date_created]);

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
                res.send(results);
            });
        });
    },

    deleteCommunity: (req, res) => {
        const results = [];
        const comm_name = req.body.comm_name;
        const user = "vijuhas"; // again, will get from api

        pg.connect(connectionString, (err, client, done) => { // eslint-disable-line consistent-return
            if (err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err });
            }

            // SQL Query > Find User
            const query = client.query("DELETE FROM community " +
              `WHERE (comm_name = '${comm_name} AND created_by = '${user}')`);

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
                res.send(comm_name);
            });
        });
    }
};

module.exports = communityController;
