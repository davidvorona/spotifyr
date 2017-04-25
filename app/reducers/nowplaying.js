const nowPlaying = (state = [], action) => {
    switch (action.type) {
    case "CHANGE_SONG":
        return {
            ...state,
            [nowPlaying.song]: action.song,
            [nowPlaying.song]: action.artist,
            [nowPlaying.song]: action.album
        };
    default:
        return state;
    }
};

export default nowPlaying;
