import {toggleEditMode} from '../actions';
import {editName} from '../actions';
import {editQuantity} from '../actions';
import { connect } from 'react-redux';
import Article from '../components/Article';

const mapStateToProps = (state, ownProps) => ({
    article:state.articlesReducer.articles.find((article) => article.id === ownProps.id)
});

const mapDispatchToProps = dispatch => ({
    toggleEditMode: id => dispatch(toggleEditMode(id)),
    editName: (id, name) => dispatch(editName(id, name)),
    editQuantity: (id, quantity) => dispatch(editQuantity(id, quantity))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)