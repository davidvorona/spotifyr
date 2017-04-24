const communities = (state = [], action) => {
    switch (action.type) {
    case "DISPLAY_MY_COMMUNITIES":
        return {
            ...state,
            active: action.active
        };
    case "DISPLAY_POPULAR":
        return {
            ...state,
            active: action.active
        };
    case "DISPLAY_CURRENT":
        return {
            ...state,
            active: action.active
        };
    default:
        return state;
    }
};

export default communities;
