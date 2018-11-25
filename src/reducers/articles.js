import uuidv1 from "uuid/v1";

const articlesReducer = (state = {article:{id:'', name:'', quantity:0}, articles:[]}, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':

            let id = uuidv1();

            let emptyArticle = {
                id:'',
                name:'',
                quantity:0
            };

            return {
                article: emptyArticle,
                articles: [...state.articles, {id:id, name:state.article.name, quantity:state.article.quantity}]
            };
        case 'SET_NAME':

            return {
                    article:{
                        name:action.name,
                        quantity: state.article.quantity},
                    articles: state.articles};
        case 'SET_QUANTITY':

            return {
                    article:{
                        name: state.article.name,
                        quantity: action.quantity},
                    articles: state.articles};
        default:
            return state
    }
};

export {articlesReducer};