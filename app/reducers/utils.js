const utils = (state = [], action) => {
    switch (action.type) {
    case "CHOOSE_MODAL_TITLE_CONTENT":
        return {
            ...state,
            modalTitle: action.modalTitle,
            modalContent: action.modalContent
        };
    case "JOIN_IO_NAMESPACE_SUCCEEDED":
        return {
            ...state,
            isConnected: action.isConnected
        };
    case "IS_LOADING":
        return {
            ...state,
            isLoading: true
        };
    case "STOP_LOADING":
        return {
            ...state,
            isLoading: false
        };
    default:
        return state;
    }
};

export default utils;
