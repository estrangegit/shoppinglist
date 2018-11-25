import {addArticle} from '../actions';
import {setName} from '../actions';
import {setQuantity} from '../actions';
import { connect } from 'react-redux'
import Articles from '../components/Articles';

const mapStateToProps = state => ({
    article: state.articlesReducer.article,
    articles:state.articlesReducer.articles
});

const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(setName(name)),
    setQuantity: quantity => dispatch(setQuantity(quantity)),
    addArticle: () => dispatch(addArticle())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles)

