/* eslint-disable arrow-body-style */
import axios from "axios";

const musicApi = {
    fetchSpotifyMusic: () => {
        return axios.get("/music")
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    },

    fetchPlaylist: (currentPlaylist) => {
        return axios.get("/playlist", {
            params: {
                href: currentPlaylist
            }
        })
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    }
};

export default musicApi;
