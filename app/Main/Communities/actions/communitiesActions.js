// community action creators*

// community tab
export const displayCommunityTab = (activeTab, kind, refresh) => {
    return {
        type: "DISPLAY_COMMUNITY_TAB",
        activeTab,
        kind,
        refresh
    };
};

// community async
export const fetchPopular = () => {
    return {
        type: "FETCH_POPULAR"
    };
};

export const fetchMyCommunities = () => {
    return {
        type: "FETCH_MY_COMMUNITIES"
    };
};

// when sockets/rooms are set up, this should be joinCommunity
export const fetchCommunity = (community) => {
    return {
        type: "FETCH_COMMUNITY",
        community
    };
};

export const createCommunity = (community) => {
    return {
        type: "CREATE_COMMUNITY",
        community
    };
};
