import React from "react";

const Order = ({ orderSummary }) => {
  return (
    <div className="Order">
      <h2>Order Summary</h2>
      {orderSummary.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Thank you for your order!</h3>
    </div>
  );
};

export default Order;
