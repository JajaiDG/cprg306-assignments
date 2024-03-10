"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  
  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black-100 p-4">
      <div className="text-center mt-4">
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700 transition duration-300">
            Back to Assignments
          </div>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center">Shopping List 🛒</h1>
      <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
