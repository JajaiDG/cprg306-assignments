"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [groupedByCategory, setGroupedByCategory] = useState(false);

  let sortedItems = itemsData.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  if (groupedByCategory) {
    sortedItems = sortedItems.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }

  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <button onClick={() => { setSortBy('name'); setGroupedByCategory(false); }} className={`px-4 py-2 rounded-lg mr-2 ${sortBy === 'name' && !groupedByCategory ? 'bg-blue-500 text-white' : 'bg-blue-500'}`}>Sort by Name</button>
        <button onClick={() => { setSortBy('category'); setGroupedByCategory(false); }} className={`px-4 py-2 rounded-lg mr-2 ${sortBy === 'category' && !groupedByCategory ? 'bg-green-500 text-white' : 'bg-green-500'}`}>Sort by Category</button>
        <button onClick={() => setGroupedByCategory(true)} className={`px-4 py-2 rounded-lg ${groupedByCategory ? 'bg-red-500 text-white' : 'bg-red-500'}`}>Group by Category</button>
      </div>
      <ul className="list-none w-full text-left">
        {groupedByCategory ? (
          Object.entries(sortedItems).map(([category, items]) => (
            <li key={category} className="mb-4">
              <h3 className="capitalize font-bold text-lg mb-2">{category}</h3>
              <ul>
                {items.map(item => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
              </ul>
            </li>
          ))
        ) : (
          sortedItems.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemList;
