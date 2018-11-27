import {addArticle} from '../actions';
import {setArticle} from '../actions';
import { connect } from 'react-redux'
import Articles from '../components/Articles';

const mapStateToProps = state => ({
    article: state.articlesReducer.article,
    articles:state.articlesReducer.articles
});

const mapDispatchToProps = dispatch => ({
    setArticle: article => dispatch(setArticle(article)),
    addArticle: () => dispatch(addArticle())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles)

