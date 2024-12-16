import React from "react";
import Cart from './components/Cart';

const Cart = ({ cartItems, placeOrder }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
