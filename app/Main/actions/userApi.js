/* eslint-disable arrow-body-style */
import axios from "axios";

const userApi = {
    fetchSpotifyUser: () => {
        return axios.get("/user")
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    }
};

export default userApi;
