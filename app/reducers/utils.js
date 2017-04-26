const utils = (state = [], action) => {
    switch (action.type) {
    case "CHOOSE_MODAL_TITLE_CONTENT":
        return {
            ...state,
            modalTitle: action.modalTitle,
            modalContent: action.modalContent
        };
    default:
        return state;
    }
};

export default utils;
