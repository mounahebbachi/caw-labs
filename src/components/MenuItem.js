import React from 'react';





/*
function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MenuItem;
*/


function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MenuItem;
