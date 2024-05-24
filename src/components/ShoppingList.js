/*import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;*/
// ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const items = [
    { name: 'Item 1', category: 'food' },
    { name: 'Item 2', category: 'clothing' },
    { name: 'Item 3', category: 'electronics' },
    { name: 'Item 4', category: 'food' },
    { name: 'Item 5', category: 'electronics' },
  ];

  const addToCart = (itemName) => {
    if (!cart.includes(itemName)) {
      setCart(prevCart => [...prevCart, itemName]);
    } else {
      setCart(prevCart => prevCart.filter(item => item !== itemName));
    }
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
      </select>
      <ul>
        {filteredItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            category={item.category}
            isInCart={cart.includes(item.name)}
            onToggleCart={() => addToCart(item.name)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

