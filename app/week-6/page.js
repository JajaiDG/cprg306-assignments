"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);
  
  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
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
      <h1 className="text-3xl font-bold text-center mt-4">Shopping List 🛒</h1>
      <ItemList />
      <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </div>
    </main>
  );
}

export default Page;
