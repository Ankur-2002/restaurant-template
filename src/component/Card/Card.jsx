import React from 'react';
import './Card.css';
const Card = props => {
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="card-title">{props.title}</span>
        <span className="card-weight">{props.weight}</span>
      </div>
      <div className="card-bottom">
        <span className="card-price">${props.price}</span>
        <img width={60} height={60} alt="food" src={props.url} />
      </div>
    </div>
  );
};

export default Card;
