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
        case 'SET_ARTICLE':
            return {
                    article: action.article,
                    articles: state.articles};
        case 'TOGGLE_EDIT_MODE':
                return {
                    article: state.article,
                    articles: state.articles
                                    .map(article => 
                                            (article.id === action.id) ?
                                                {...article, isInEditMode: !article.isInEditMode}
                                                : article
                                        )   
                }
        case 'EDIT_ARTICLE':
                return {
                    article: state.article,
                    articles: state.articles
                                    .map(article => 
                                            (article.id === action.article.id) ?
                                                 {
                                                    ...article,
                                                    name: action.article.name,
                                                    quantity:action.article.quantity,
                                                    isInEditMode:action.article.isInEditMode
                                                }
                                                 : article
                                        )
                }
        default:
            return state
    }
};

export {articlesReducer};