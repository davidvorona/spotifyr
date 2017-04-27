const user = (state = [], action) => {
    switch (action.type) {
    case "FETCH_USER_SUCCEEDED":
        return {
            ...action.user
        };
    case "FETCH_USER_FAILED":
        return {
            ...state
        };
    default:
        return state;
    }
};

export default user;
