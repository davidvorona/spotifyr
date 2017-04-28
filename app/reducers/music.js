const music = (state = [], action) => {
    switch (action.type) {
    case "DISPLAY_MUSIC_TAB":
        return {
            ...state,
            activeTab: [action.activeTab, action.kind, action.refresh]
        };
    case "FETCH_MUSIC_SUCCEEDED":
        return {
            ...state,
            songs: action.music.songs,
            playlists: action.music.playlists
        };
    case "FETCH_PLAYLIST_SUCCEEDED":
        return {
            ...state,
            currentPlaylist: action.currentPlaylist
        };
    case "FETCH_MUSIC_FAILED":
        return {
            ...state
        };
    case "EMPTY_CURRENT_PLAYLIST":
        return {
            ...state,
            currentPlaylist: []
        };
    case "ADD_TO_QUEUE":
        return {
            ...state,
            queue: [...state.queue, action.song]
        };
    case "REMOVE_FROM_QUEUE":
        state.queue.splice(action.i, 1);
        return {
            ...state,
            queue: state.queue
        };
    default:
        return state;
    }
};

export default music;
