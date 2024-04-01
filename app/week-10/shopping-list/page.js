"use client";

import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';


function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  
  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
  
    if (user) {
      loadItems();
    } else {
      window.location.href = "/week-10";
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemWithId = await addItem(user.uid, newItem);
      setItems(currentItems => [...currentItems, { ...newItem, id: newItemWithId }]);
    }
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
