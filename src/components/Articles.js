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
                    name={this.props.article.name}
                    quantity={this.props.article.quantity}
                    addArticle={this.props.addArticle}
                    onQuantityChange={this.props.setQuantity}
                    onNameChange={this.props.setName}
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