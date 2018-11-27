import {toggleEditMode} from '../actions';
import {editArticle} from '../actions';
import { connect } from 'react-redux';
import Article from '../components/Article';

const mapStateToProps = (state, ownProps) => ({
    article:state.articlesReducer.articles.find((article) => article.id === ownProps.id)
});

const mapDispatchToProps = dispatch => ({
    toggleEditMode: id => dispatch(toggleEditMode(id)),
    editArticle: (article) => dispatch(editArticle(article)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)