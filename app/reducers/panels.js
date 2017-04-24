const panels = (state = [], action) => {
    switch (action.type) {
    case "CHANGE_LEFT_PANEL":
        return {
            ...state,
            [panels.leftPanel]: action.leftPanel
        };
    case "CHANGE_RIGHT_PANEL":
        return {
            ...state,
            [panels.rightPanel]: action.rightPanel
        };
    default:
        return state;
    }
};

export default panels;
