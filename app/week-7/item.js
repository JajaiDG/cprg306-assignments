import React from 'react';

// Include onSelect prop in the function parameters
function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      className="flex justify-between items-center bg-cyan-500 shadow-md rounded-md p-4 mb-2 cursor-pointer" 
      onClick={() => onSelect(name)} // Add onClick handler that calls onSelect with the item's name
    >
      <div className="text-md font-medium">
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </li>
  );
};

export default Item;
