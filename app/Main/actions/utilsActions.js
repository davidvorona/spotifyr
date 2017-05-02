// action creators*

export const chooseModalTitleContent = (modalTitle, modalContent) => {
    return {
        type: "CHOOSE_MODAL_TITLE_CONTENT",
        modalTitle,
        modalContent
    };
};

export const isLoading = () => {
    return {
        type: "IS_LOADING"
    };
};

export const stopLoading = () => {
    return {
        type: "STOP_LOADING"
    };
};
