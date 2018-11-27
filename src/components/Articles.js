import React from 'react';
import Form from './Form'
import ItemList from "./ItemList";

class Articles extends React.Component {

    render(){

        return(
            <div>
                <div className="col-lg-12, jumbotron">
                    <h3 className="text-center">Réalisez votre liste de courses</h3>
                </div>

                <Form
                    formTitle="Ajouter un article"
                    article={this.props.article}
                    addArticle={this.props.addArticle}
                    onArticleChange={this.props.setArticle}
                />

                <ItemList
                    itemListTitle="Liste de courses"
                    articles={this.props.articles}
                />
            </div>
        );
    }
}

export default Articles;