/* eslint-disable arrow-body-style */
import axios from "axios";

const playingApi = {
    fetchNowPlaying: () => {
        return axios.get("/nowplaying")
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    }
};

export default playingApi;
