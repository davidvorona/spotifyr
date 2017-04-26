// action creators*

export const chooseModalTitleContent = (modalTitle, modalContent) => {
    return {
        type: "CHOOSE_MODAL_TITLE_CONTENT",
        modalTitle,
        modalContent
    };
};
