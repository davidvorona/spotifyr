import { call, put, takeLatest } from "redux-saga/effects";
import communitiesApi from "./Main/Communities/actions/communitiesApi";
import userApi from "./Main/actions/userApi";
import musicApi from "./Main/MyMusic/actions/musicApi";
import playingApi from "./Main/NowPlaying/actions/playingApi";

function* fetchSpotifyUser() {
    try {
        const user = yield call(userApi.fetchSpotifyUser);
        yield put({ type: "FETCH_USER_SUCCEEDED", user });
    } catch (err) {
        yield put({ type: "FETCH_USER_FAILED", message: err.message });
    }
}

function* fetchSpotifyMusic() {
    try {
        const music = yield call(musicApi.fetchSpotifyMusic);
        yield [
            put({ type: "FETCH_MUSIC_SUCCEEDED", music }),
            put({ type: "STOP_LOADING" })
        ];
    } catch (err) {
        yield put({ type: "FETCH_MUSIC_FAILED", message: err.message });
    }
}

function* fetchPlaylist(action) {
    try {
        const currentPlaylist = yield call(musicApi.fetchPlaylist, action.currentPlaylist);
        yield [
            put({ type: "FETCH_PLAYLIST_SUCCEEDED", currentPlaylist }),
            put({ type: "STOP_LOADING" })
        ];
    } catch (err) {
        yield put({ type: "FETCH_MUSIC_FAILED", message: err.message });
    }
}

function* fetchNowPlaying() {
    try {
        const currentSong = yield call(playingApi.fetchNowPlaying);
        yield [
            put({ type: "FETCH_NOW_PLAYING_SUCCEEDED", currentSong }),
            put({ type: "STOP_LOADING" })
        ];
    } catch (err) {
        yield put({ type: "FETCH_NOW_PLAYING_FAILED", message: err.message });
    }
}

// function* fetchAllCommunities(action) {
//     try {
//         const allCommunities = yield call(communitiesApi.fetchAll);
//         yield [
//             put({ type: "FETCH_ALL_COMMUNITIES" }),
//             put({ type: "STOP_LOADING" })
//         ];
//     } catch(err) {
//         yield put({ type: "FETCH_FAILED", message: err.message });
//     }
// }

function* fetchPopular() {
    try {
        const popular = yield call(communitiesApi.fetchPopular);
        yield [
            put({ type: "FETCH_POPULAR_SUCCEEDED", popular }),
            put({ type: "STOP_LOADING" })
        ];
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

function* fetchMyCommunities() {
    try {
        const myCommunities = yield call(communitiesApi.fetchMyCommunities);
        yield [
            put({ type: "FETCH_MY_COMMUNITIES_SUCCEEDED", myCommunities }),
            put({ type: "STOP_LOADING" })
        ];
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

function* fetchCommunity(action) {
    try {
        const community = yield call(communitiesApi.fetchCommunity, action.community);
        yield [
            put({ type: "FETCH_COMMUNITY_SUCCEEDED", community }),
            put({ type: "JOIN_IO_NAMESPACE_SUCCEEDED", isConnected: true })
        ];
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

function* createCommunity(action) {
    try {
        const community = yield call(communitiesApi.createCommunity, action.community);
        yield [
            put({ type: "CREATE_COMMUNITY_SUCCEEDED", community }),
            put({ type: "JOIN_IO_NAMESPACE_SUCCEEDED", isConnected: true })
        ];
    } catch (err) {
        yield put({ type: "CREATE_FAILED", message: err.message });
    }
}

// export
function* sagas() {
    yield [
        takeLatest("FETCH_SPOTIFY_USER", fetchSpotifyUser),
        takeLatest("FETCH_SPOTIFY_MUSIC", fetchSpotifyMusic),
        takeLatest("FETCH_PLAYLIST", fetchPlaylist),
        takeLatest("FETCH_NOW_PLAYING", fetchNowPlaying),
        takeLatest("FETCH_POPULAR", fetchPopular),
        takeLatest("FETCH_MY_COMMUNITIES", fetchMyCommunities),
        takeLatest("FETCH_COMMUNITY", fetchCommunity),
        takeLatest("CREATE_COMMUNITY", createCommunity)
    ];
}

export default sagas;
