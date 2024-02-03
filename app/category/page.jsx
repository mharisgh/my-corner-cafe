'use client'
import React, { useState } from 'react'
import { menu } from '../constant/data'
import Link from 'next/link'


const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
  };

  return (
    <div className='max-w-2xl text-center mx-auto'>
      <p className='h-[100px] flex justify-center items-center text-white text-2xl bg-primary-500'>What are you in the mood for?</p>
      <div className='slide-up flex flex-col gap-4 my-4 uppercase text-2xl font-medium'>
        {menu.map((data)=>(
        <Link
        onClick={()=> handleCategoryClick(data.categoryName)}
        key={data.id}
        href='category/items' className='hover:bg-gray-100 py-4'>{data.categoryName}</Link>
        ))}
      </div>
    </div>
  )
}

export default page