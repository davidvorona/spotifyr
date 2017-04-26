const nowPlaying = (state = [], action) => {
    switch (action.type) {
    case "CHANGE_SONG":
        return {
            ...state,
            [nowPlaying.song]: action.song,
            [nowPlaying.artist]: action.artist,
            [nowPlaying.album]: action.album
        };
    default:
        return state;
    }
};

export default nowPlaying;
