import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="min-h-screen bg-black-100 p-4">
       <div className="text-center mt-4">
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700 transition duration-300">
            Back to Assignments
            </div>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4 ">Shopping List 🛒</h1>
      <ItemList />
    </main>
    
  );
};


export default Page;


