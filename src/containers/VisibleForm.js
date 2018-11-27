import {addArticle} from '../actions';
import {setArticle} from '../actions';
import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => ({
    formTitle: ownProps.formTitle,
    article:state.articlesReducer.article
});

const mapDispatchToProps = dispatch => ({
    addArticle: () => dispatch(addArticle()),
    setArticle: (article) => dispatch(setArticle(article)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)