/*
import React, { useState } from 'react';
import MenuDisplay from './components/MenuDisplay';
import './styles/App.css';  

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => {
      console.log('Current item price:', item.price); // Log du prix de chaque élément
      return sum + Number(item.price); // S'assurer que c'est un nombre
    }, 0);
    console.log('Calculated total:', total); // Log du total calculé
    return total.toFixed(2); // Retourner le total formaté avec 2 décimales
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
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <h3>Total Price: ${calculateTotalPrice()}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import MenuDisplay from './components/MenuDisplay';

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
       
        {cart.length === 0 ? (
          
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
