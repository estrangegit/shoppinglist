import uuidv1 from "uuid/v1";

const articlesReducer = (state = {article:{id:'', name:'', quantity:0, isInEditMode: false}, articles:[]}, action) => {    
    switch (action.type) {
        case 'ADD_ARTICLE':

            let id = uuidv1();

            let emptyArticle = {
                id:'',
                name:'',
                quantity:0,
                isInEditMode: false
            };

            return {
                article: emptyArticle,
                articles: [...state.articles, {id:id, name:state.article.name, quantity:state.article.quantity, isInEditMode: false}]
            };
        case 'SET_NAME':

            return {
                    article:{
                        id:'',
                        name: action.name,
                        quantity: state.article.quantity,
                        isInEditMode: state.article.isInEditMode
                    },
                    articles: state.articles};
        case 'SET_QUANTITY':

            return {
                    article:{
                        id:'',
                        name: state.article.name,
                        quantity: action.quantity,
                        isInEditMode: state.article.isInEditMode
                    },
                    articles: state.articles};

        case 'TOGGLE_MODE':
                return {
                    article: state.article,
                    articles: state.articles
                                    .map(article => 
                                            (article.id === action.id) ?
                                                {...article, isInEditMode: !article.isInEditMode}
                                                : article
                                        )   
                }
        case 'EDIT_NAME':
                return {
                    article: state.article,
                    articles: state.articles
                                    .map(article => 
                                            (article.id === action.id) ?
                                                 {...article, name: action.name}
                                                 : article
                                        )
                }                
        case 'EDIT_QUANTITY':
                return {
                    article: state.article,
                    articles: state.articles
                                    .map(article => 
                                            (article.id === action.id) ?
                                                {...article, quantity: action.quantity}
                                                : article
                                        )
                }

        default:
            return state
    }
};

export {articlesReducer};