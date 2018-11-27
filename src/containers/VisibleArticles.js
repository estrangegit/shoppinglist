import { connect } from 'react-redux'
import Articles from '../components/Articles';

const mapStateToProps = state => ({
    articles:state.articlesReducer.articles
});

export default connect(
    mapStateToProps,
)(Articles)

