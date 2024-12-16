import React, { useState } from "react";
import MenuItem from "./MenuItem";
import 'C:/Users/Hebba/restaurant-menu/src/styles/App.css';
import 'C:/Users/Hebba/restaurant-menu/src/styles/components.css';








/*

const menuItems = [
  {
    name: "Pizza Margherita",
    description: "Classic pizza with mozzarella and fresh basil.",
    price: 12,
    image: "./images/téléchargement.webp",
  },
  {
    name: "Cheese Sandwich",
    description: "Toasted sandwich with melted cheese.",
    price: 5,
    image: "./images/téléchargement2.jpg",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Pasta with rich beef and tomato sauce.",
    price: 15,
    image: "./images/téléchargement3.jpg",
  },
  {
    name: "BBQ Chicken Pizza",
    description: "A pizza with BBQ chicken, onions, and mozzarella.",
    price: 15.99,
    image: "./images/téléchargement4.jpg",
  },
  {
    name: "Cheese Pizza",
    description: "Classic cheese pizza with a rich tomato sauce.",
    price: 10.99,
    image: "./images/téléchargement5.jpg",
  },
  {
    name: "Hawaiian Pizza",
    description: "Pizza topped with ham, pineapple, and cheese.",
    price: 16.99,
    image: "./images/images6.jpg",
  },
];

function MenuDisplay() {
  const [cart, setCart] = useState([]);
  const [availableItems, setAvailableItems] = useState(menuItems);

  const handleAddToCart = (item) => {
    setCart([...cart, item]); // Add item to the cart
    setAvailableItems(availableItems.filter((menuItem) => menuItem.name !== item.name)); // Remove from available items
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.name !== item.name)); // Remove item from the cart
    setAvailableItems([...availableItems, item]); // Add it back to available items
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0); // Calculate the total price
  };

  return (
    <div className="menu-display">
      <header className="menu-header">
        <h1>Restaurant Menu</h1>
        <p className="header-subtitle">You can navigate to a dish here!!</p>
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      

      <div className="menu-items">
      
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              addToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </div>
      </header>

      <div className="menu-items">
        {availableItems.map((item, index) => (
          <MenuItem key={index} item={item} addToCart={handleAddToCart} />
        ))}
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
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="total-price">
          {cart.length > 0 && (
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuDisplay;*/

const menuItems = [
  {
    name: "Pizza Margherita",
    description: "Classic pizza with mozzarella and fresh basil.",
    price: 12,
    image: "./images/téléchargement.webp",
  },
  {
    name: "Cheese Sandwich",
    description: "Toasted sandwich with melted cheese.",
    price: 5,
    image: "./images/téléchargement2.jpg",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Pasta with rich beef and tomato sauce.",
    price: 15,
    image: "./images/téléchargement3.jpg",
  },
  {
    name: "BBQ Chicken Pizza",
    description: "A pizza with BBQ chicken, onions, and mozzarella.",
    price: 15.99,
    image: "./images/téléchargement4.jpg",
  },
  {
    name: "Cheese Pizza",
    description: "Classic cheese pizza with a rich tomato sauce.",
    price: 10.99,
    image: "./images/téléchargement5.jpg",
  },
  {
    name: "Hawaiian Pizza",
    description: "Pizza topped with ham, pineapple, and cheese.",
    price: 16.99,
    image: "./images/images6.jpg",
  },
];

function MenuDisplay() {
  const [cart, setCart] = useState([]);
  const [availableItems, setAvailableItems] = useState(menuItems);
  const [searchQuery, setSearchQuery] = useState(""); // For the search bar
  const [filteredItems, setFilteredItems] = useState(menuItems); // For filtering menu items

  // Add item to cart and remove it from available items
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setAvailableItems(availableItems.filter((menuItem) => menuItem.name !== item.name));
  };

  // Remove item from cart and add it back to available items
  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.name !== item.name));
    setAvailableItems([...availableItems, item]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Filter items based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredItems(
      availableItems.filter((item) => item.name.toLowerCase().includes(query))
    );
  };

  return (
    <div className="menu-display">
      <header className="menu-header">
        <h1>Restaurant Menu</h1>
        <p className="header-subtitle">You can navigate to a dish here!!</p>

        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={handleSearchChange} // Updated to handle search
          className="search-bar"
        />
      </header>

      {/* Display filtered items based on search query */}
      <div className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <MenuItem key={index} item={item} addToCart={handleAddToCart} />
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </div>

      {/* Cart summary */}
      <div className="cart-summary">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Display total price */}
        <div className="total-price">
          {cart.length > 0 && <p>Total: ${getTotalPrice().toFixed(2)}</p>}
        </div>
      </div>
    </div>
  );
}

export default MenuDisplay;
