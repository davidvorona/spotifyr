const nowPlaying = (state = [], action) => {
    switch (action.type) {
    case "CHANGE_SONG":
        return {
            ...state
        };
    case "FETCH_NOW_PLAYING_SUCCEEDED":
        return {
            ...state,
            currentSong: action.currentSong
        };
    case "FETCH_NOW_PLAYING_FAILED":
        return {
            ...state
        };
    default:
        return state;
    }
};

export default nowPlaying;
