'use client'
import React, { useState } from 'react';

const Categories = [
  {
    id: 1,
    name: 'Fruits',
    items: ['Apple', 'Orange', 'Grapes', 'Banana', 'Mango'],
  },
  {
    id: 2,
    name: 'Vegetables',
    items: ['Carrot', 'Tomato', 'Broccoli', 'Spinach', 'Cucumber'],
  },
  {
    id: 3,
    name: 'Pulses',
    items: ['Lentils', 'Chickpeas', 'Black Beans', 'Kidney Beans', 'Green Peas'],
  },
];

const CategoryTabs = ({ activeCategory, onTabClick }) => {
  return (
    <div className="flex">
      {Categories.map((category) => (
        <div
          key={category.id}
          className={`cursor-pointer mr-4 py-2 ${
            activeCategory === category.name ? 'font-bold underline' : ''
          }`}
          onClick={() => onTabClick(category.name)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

const CategoryItems = ({ activeCategory }) => {
  const selectedCategory = Categories.find((category) => category.name === activeCategory);

  return (
    <div className="mt-4">
      {selectedCategory.items.map((item, index) => (
        <div key={index} className="mb-2">
          {item}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState(Categories[0].name);

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <CategoryTabs activeCategory={activeCategory} onTabClick={handleTabClick} />
      <CategoryItems activeCategory={activeCategory} />
    </div>
  );
};

export default App;
