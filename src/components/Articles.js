import React from 'react';
import VisibleForm from '../containers/VisibleForm'
import ItemList from "./ItemList";

class Articles extends React.Component {

    render(){

        return(
            <div>
                <div className="col-lg-12, jumbotron">
                    <h3 className="text-center">Réalisez votre liste de courses</h3>
                </div>

                <VisibleForm
                    formTitle="Ajouter un article"
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