import React from 'react';
import Form from './Form'
import ItemList from "./ItemList";
import uuidv1 from "uuid/v1";

class App extends React.Component {

    state = {
        article:{
            id:'',
            name:'',
            quantity:0
        },
        articles: []
    };

    addArticle = () => {
        let id = uuidv1();

        let emptyArticle = {
          id:'',
          name:'',
          quantity:0
        };

        this.setState((state) => ({
            article: emptyArticle,
            articles: [...state.articles, {id:id, name:state.article.name, quantity:state.article.quantity}]}));
    };

    onNameChange = (name) => {
      this.setState((state) => ({article:{
            name:name,
            quantity: state.article.quantity
          }, articles: state.articles}))
    };

    onQuantityChange = (quantity) => {
        this.setState((state) => ({article:{
                name: state.article.name,
                quantity: quantity
            }, articles: state.articles}))
    };

    render(){

        let name = this.state.article.name;
        let quantity = this.state.article.quantity;

        return(
            <div>
                <h3>Liste de courses</h3>
                <Form
                    formTitle="Ajouter un article"
                    name={name}
                    quantity={quantity}
                    addArticle={this.addArticle}
                    onQuantityChange={this.onQuantityChange}
                    onNameChange={this.onNameChange}
                />
                <ItemList/>
            </div>
        );
    }
}

export default App;