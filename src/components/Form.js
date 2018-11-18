import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleQuantityChange = (event) => {
        let quantity = event.target.value;
        this.props.onQuantityChange(quantity);
    };

    handleNameChange = (event) => {
        let name = event.target.value;
        this.props.onNameChange(name);
    };

    handleSubmit = (event) => {
        this.props.addArticle();
        event.preventDefault();
    };

    render(){
        return(
            <div>
                <h3 className="text-center">{this.props.formTitle}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-3, offset-lg-4">
                            <input type="number" placeholder="quantité" value={this.props.quantity} onChange= {this.handleQuantityChange}/>
                        </div>
                        <div className="col-lg-3">
                            <input type="text" placeholder="article" value={this.props.name} onChange= {this.handleNameChange}/>
                        </div>
                        <div>
                            <button className="btn btn-light" type="submit">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;