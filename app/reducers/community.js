const community = (state = [], action) => {
    switch (action.type) {
    case "DISPLAY_COMMUNITY":
        return {
            ...state,
            community: action.community
        };
    default:
        return state;
    }
};

export default community;
