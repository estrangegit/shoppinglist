import React from 'react';

const ItemList = (props) => {

  const articles = props.articles;

  return(
      <div>
          <h4 className="text-center">{props.itemListTitle}</h4>
          <div>
              {articles.map((article) =>
                  <div className="card" key={article.id}>
                      <div className="card-body text-center">
                          {article.quantity} x {article.name}
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};

export default ItemList;