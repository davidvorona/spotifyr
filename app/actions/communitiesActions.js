// action creators*

export const displayMyCommunities = (active) => {
    return {
        type: "DISPLAY_MY_COMMUNITIES",
        active
    };
};

export const displayPopular = (active) => {
    return {
        type: "DISPLAY_POPULAR",
        active
    };
};

export const displayCurrent = (active) => {
    return {
        type: "DISPLAY_CURRENT",
        active
    };
};
