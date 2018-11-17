import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            quantity:0
        };

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleQuantityChange = (event) => {
        let quantity = event.target.value;

        this.setState(state => ({
            quantity: quantity
        }))
    };

    handleNameChange = (event) => {
        let name = event.target.value;

        this.setState(state => ({
            name: name
        }))
    };

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    };

    render(){
        return(
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="quantité" value={this.state.quantity} onChange= {this.handleQuantityChange}/>
                    <input type="text" placeholder="article" value={this.state.name} onChange= {this.handleNameChange}/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default Form;