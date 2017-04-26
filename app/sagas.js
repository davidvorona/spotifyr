import { call, put, takeLatest } from "redux-saga/effects";
import data from "./Main/Communities/actions/communitiesApi";

function* fetchPopular() {
    try {
        const popular = yield call(data.fetchPopular);
        yield put({ type: "FETCH_POPULAR_SUCCEEDED", popular });
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

function* fetchMyCommunities() {
    try {
        const myCommunities = yield call(data.fetchMyCommunities);
        yield put({ type: "FETCH_MY_COMMUNITIES_SUCCEEDED", myCommunities });
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

function* fetchCommunity(action) {
    try {
        const community = yield call(data.fetchCommunity, action.community);
        yield put({ type: "FETCH_COMMUNITY_SUCCEEDED", community });
    } catch (err) {
        yield put({ type: "FETCH_FAILED", message: err.message });
    }
}

// export
function* sagas() {
    yield [
        takeLatest("FETCH_POPULAR", fetchPopular),
        takeLatest("FETCH_MY_COMMUNITIES", fetchMyCommunities),
        takeLatest("FETCH_COMMUNITY", fetchCommunity)
    ];
}

export default sagas;
