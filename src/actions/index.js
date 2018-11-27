export const addArticle = () => ({
   type: 'ADD_ARTICLE'
});

export const setName = name => ({
    type: 'SET_NAME',
    name: name
});

export const setQuantity = quantity => ({
    type: 'SET_QUANTITY',
    quantity: quantity
});

export const toggleEditMode = (id) => ({
    type: 'TOGGLE_MODE',
    id: id
});

export const editName = (id, name) => ({
    type: 'EDIT_NAME',
    id: id,
    name: name
});

export const editQuantity = (id, quantity) => ({
    type: 'EDIT_QUANTITY',
    id: id,
    quantity: quantity
})