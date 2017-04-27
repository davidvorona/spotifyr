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
    case "CREATE_COMMUNITY":
        return {
            ...state,
            current: action.community,
            active: ["current", "content", false]
        };
    case "FETCH_FAILED":
        console.log("Fetch failed.");
        return state;
    case "CREATE_FAILED":
        console.log("Create failed.");
        return state;
    default:
        return state;
    }
};

export default communities;
