const communities = (state = [], action) => {
    switch (action.type) {
    case "DISPLAY_COMMUNITY_TAB":
        return {
            ...state,
            active: [action.active, action.kind, action.refresh]
        };
    case "FETCH_POPULAR_SUCCEEDED":
        return {
            ...state,
            popular: action.popular
        };
    case "FETCH_MY_COMMUNITIES_SUCCEEDED":
        return {
            ...state,
            myCommunities: action.myCommunities
        };
    case "FETCH_COMMUNITY_SUCCEEDED":
        return {
            ...state,
            current: action.community,
            active: ["current", "content", false]
        };
    case "FETCH_FAILED":
        console.log("Fetch failed.");
        return state;
    default:
        return state;
    }
};

// next step, tune in button should bring up details (like current page) of fetched community
// currently changes "selected" state, should this switch to "current"?
// realization i came to: we don't need reducers for async browser actions...
// ...action creators hit sagas, which run and fire off their own dispatches...
// ... with fetched data for reducers (e.g.) FETCH_COMMUNITY_SUCCEEDED

export default communities;
