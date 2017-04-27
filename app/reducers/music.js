const music = (state = [], action) => {
    switch (action.type) {
    case "FETCH_MUSIC_SUCCEEDED":
        return {
            ...state,
            songs: action.music.songs,
            playlists: action.music.playlists
        };
    case "FETCH_MUSIC_FAILED":
        return {
            ...state
        };
    default:
        return state;
    }
};

export default music;
