// action creators*

export const changeLeftPanel = (leftPanel) => {
    return {
        type: "CHANGE_LEFT_PANEL",
        leftPanel
    };
};

export const changeRightPanel = (rightPanel) => {
    return {
        type: "CHANGE_RIGHT_PANEL",
        rightPanel
    };
};
