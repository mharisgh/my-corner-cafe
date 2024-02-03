// components/CategoryTabs.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoryTabs = ({ categories }) => {
  const router = useRouter();
  const { categoryName } = router.query;

  return (
    <div className="flex">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.name}`}>
          <a
            className={`cursor-pointer mr-4 py-2 ${
              categoryName === category.name ? 'font-bold underline' : ''
            }`}
          >
            {category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTabs;
