/*import React from "react";

function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;*/
// Item.js
// Item.js
import React from 'react';

function Item({ name, category, isInCart, onToggleCart }) {
  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {name}{' '}
      <button onClick={onToggleCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;


