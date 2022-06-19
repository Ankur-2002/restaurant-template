import React from 'react';
import Header from '../../component/Header/Header';
import './dashboard.css';
import data from '../../Data/foodData';
import Card from '../../component/Card/Card';
import Setting from '../../assets/settings.svg';
import Orderplate from '../../component/OrderPlate/Orderplate';
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <Header />
        <div className="mini-search"></div>
        <div className="dashboard-card">
          {data.map((item, index) => {
            return <Card {...item} key={index} />;
          })}
        </div>
      </div>
      <div className="dashboard-right">
        <div className="right-header">
          <span className="right-title">Current Order</span>
          <button> Clear All</button>
          <img src={Setting} width={25} height={25} alt="" />
        </div>
        <div className="dashboard-right-items">
          {data.map((items, index) => {
            return <Orderplate {...items} key={index} />;
          })}
        </div>

        <div className="orderTotal">
          <div className="dashboard-order-top">
            <div>
              <span>Subtotal</span>
              <span>$25.25</span>
            </div>
            <div>
              <span>Discount</span>
              <span>-$23.25</span>
            </div>
            <div>
              <span>Subtotal</span>
              <span>$2.00</span>
            </div>
          </div>
          <div className="dashboard-order-bottom">
            <span>Total</span>
            <span>$37.50</span>
          </div>
        </div>

        <div className="dasboard-date-selector">
          <span className="select">C1</span>
          <span>H1</span>
          <span>D1</span>
          <span>F1</span>
          <span>B1</span>
          <span>M1</span>
        </div>

        <div className="button-container">
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
