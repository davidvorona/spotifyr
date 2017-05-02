// action creators*

// for now, just fetch what I'm playing
// TODO: fetch what community is playing
export const fetchNowPlaying = () => {
    return {
        type: "FETCH_NOW_PLAYING"
    };
};

export const changeSong = () => {
    return {
        type: "CHANGE_SONG"
    };
};
