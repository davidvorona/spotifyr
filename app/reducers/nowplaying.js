const nowplaying = (state = [], action) => {
    switch (action.type) {
    case "CHANGE_SONG":
        return {
            ...state,
            [nowplaying.song]: action.song,
            [nowplaying.song]: action.artist,
            [nowplaying.song]: action.album
        };
    default:
        return state;
    }
};

export default nowplaying;
