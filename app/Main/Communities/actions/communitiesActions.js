// community action creators*

// community tab
export const displayCommunityTab = (active, kind, refresh) => {
    return {
        type: "DISPLAY_COMMUNITY_TAB",
        active,
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

export const fetchCommunity = (community) => {
    return {
        type: "FETCH_COMMUNITY",
        community
    };
};
