export const addArticle = () => ({
   type: 'ADD_ARTICLE'
});

export const setArticle = article => ({
    type: 'SET_ARTICLE',
    article: article
});

export const toggleEditMode = (id) => ({
    type: 'TOGGLE_EDIT_MODE',
    id: id
});

export const editArticle = article => ({
    type: 'EDIT_ARTICLE',
    article: article
});