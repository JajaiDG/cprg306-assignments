import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-black-100 p-4">
      <h1 className="text-3xl font-bold text-center mt-4 ">Shopping List 🛒</h1>
      <ItemList />
    </main>
  );
};

export default Page;
