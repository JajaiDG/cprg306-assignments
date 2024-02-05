import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center bg-cyan-300 shadow-md rounded-md p-4 mb-2">
      <div className="text-md font-medium">
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </li>
  );
};

export default Item;
