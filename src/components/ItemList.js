import React from 'react';
import VisibleArticle from '../containers/VisibleArticle'

const ItemList = (props) => {

  return(
      <div>
          <h4 className="text-center">{props.itemListTitle}</h4>
          <div>
              
              {props.articles.map((article) =>
                <div className="card" key={article.id}>
                    <div className="card-body text-center">
                        <VisibleArticle id={article.id} />              
                    </div>
                </div>
              )}
          </div>
      </div>
  );
};

export default ItemList;