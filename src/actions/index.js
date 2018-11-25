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
