// action creators*

export const changeSong = (song, artist, album) => {
    return {
        type: "CHANGE_SONG",
        song,
        artist,
        album
    };
};
