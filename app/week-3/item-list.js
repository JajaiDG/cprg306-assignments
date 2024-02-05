// item-list.js
import React from 'react';
import Item from './item'; // Ensure this path is correct

const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};

const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};

const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};

const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};

const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};

const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};

const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};

const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};

const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};

const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};

const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};

const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

const ItemList = () => {
  return (
    <div className="container mx-auto max-w-lg p-10">
      <ul className="shopping-list">
        <Item key="item1" {...item1} />
        <Item key="item2" {...item2} />
        <Item key="item3" {...item3} />
        <Item key="item4" {...item4} />
        <Item key="item5" {...item5} />
        <Item key="item6" {...item6} />
        <Item key="item7" {...item7} />
        <Item key="item8" {...item8} />
        <Item key="item9" {...item9} />
        <Item key="item10" {...item10} />
        <Item key="item11" {...item11} />
        <Item key="item12" {...item12} />
      </ul>
    </div>
  );
};

export default ItemList;
