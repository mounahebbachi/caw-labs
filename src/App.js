import React, { useState } from 'react';
import MenuDisplay from './components/MenuDisplay';
import 'C:/Users/Hebba/restaurant-menu/src/styles/App.css';

/*function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Restaurant</h1>
        <p>Explore our menu and place your order!</p>
      </header>

      <div className="menu-container">
        <MenuDisplay addToCart={addToCart} />
      </div>

      <div className="cart-summary">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;*/
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast React Pizza Co.</h1>
        <p>Explore our menu and place your order!</p>
      </header>

      <div className="menu-container">
        <MenuDisplay addToCart={addToCart} />
      </div>

      <div className="cart-summary">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;