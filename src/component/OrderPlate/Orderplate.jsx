import React from 'react';
import './Orderplate.css';
import AddIcon from '../../assets/addIcon.svg';
const Orderplate = props => {
  return (
    <div className="order-container">
      <div className="order-start">
        <img src={props.url} alt="" width={40} height={40} />
        <span>{props.title.split(' ')[0]}</span>
      </div>
      <div className="order-mid">
        <div>-</div>
        <span>1</span>
        <div>+</div>
      </div>
      <div className="order-last">${props.price}</div>
    </div>
  );
};

export default Orderplate;
