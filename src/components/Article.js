import React from 'react';

class Article extends React.Component {

    constructor(props){
        super(props);

        this.handleQuantityEdit = this.handleQuantityEdit.bind(this);
        this.handleNameEdit = this.handleNameEdit.bind(this);
    }

    handleQuantityEdit = (event) => {
        let newQuantity = event.target.value;
        let newArticle = { ...this.props.article, quantity:newQuantity }

        this.props.editArticle(newArticle);
    };

    handleNameEdit = (event) => {
        let newName = event.target.value;
        let newArticle = { ...this.props.article, name:newName }

        this.props.editArticle(newArticle);
    };

    render(){

        let articleContent;

        if(!this.props.article.isInEditMode){
            articleContent = <div className="col-lg-8">
                                <div className="row">
                                    <div className="offset-lg-2 col-lg-2">
                                        {this.props.article.quantity}
                                    </div>
                                    <div className="offset-lg-1 col-lg-1">
                                        x
                                    </div>                                
                                    <div className="col-lg-2">
                                        {this.props.article.name}
                                    </div>
                                </div>
                            </div>


        }else{
            articleContent = <div className="col-lg-8">
                                <div className="row">
                                    <div className="offset-lg-2 col-lg-2">
                                        <input type="number" value={this.props.article.quantity} onChange= {this.handleQuantityEdit}/>
                                    </div>
                                    <div className="offset-lg-1 col-lg-1">
                                        <span>x</span>
                                    </div>                                
                                    <div className="col-lg-2">
                                        <input type="text" value={this.props.article.name} onChange= {this.handleNameEdit}/>
                                    </div>
                                </div>
                            </div>
        }


        return(
            <div className="card-body text-center">
                <div className="row">
                    {articleContent}
                    <div className="col-lg-2">
                        <button className="btn btn-warning btn-sm" onClick={() => this.props.toggleEditMode(this.props.article.id)}>Modifier</button>                                
                    </div>                
                </div>
            </div>
        );
    }
}

export default Article;