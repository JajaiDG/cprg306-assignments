"use client";

import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  
  useEffect(() => {
    if (!user) {
      window.location.href = "/week-8"; 
    }
  }, [user]);

  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/[\u{1F300}-\u{1FAD6}]/gu, '').split(',')[0].trim();
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
