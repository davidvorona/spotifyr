// action creators*

export const fetchSpotifyMusic = () => {
    return {
        type: "FETCH_SPOTIFY_MUSIC"
    };
};

export const displayMusicTab = (activeTab, kind, refresh) => {
    return {
        type: "DISPLAY_MUSIC_TAB",
        activeTab,
        kind,
        refresh
    };
};

export const fetchPlaylist = (currentPlaylist) => {
    return {
        type: "FETCH_PLAYLIST",
        currentPlaylist
    };
};

export const emptyCurrentPlaylist = () => {
    return {
        type: "EMPTY_CURRENT_PLAYLIST"
    };
};

export const addToQueue = (song) => {
    return {
        type: "ADD_TO_QUEUE",
        song
    };
};

export const removeFromQueue = (song, i) => {
    return {
        type: "REMOVE_FROM_QUEUE",
        song,
        i
    };
};
