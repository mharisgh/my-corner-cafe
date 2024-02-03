'use client'
import React, { useEffect, useState } from 'react';
import { menu } from '@/app/constant/data'
import Link from 'next/link'
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: '300',
  subsets: ['latin']
})

const CategoryTabs = ({ activeCategory, onTabClick }) => {

  return (
    // <div className="flex">
    //   {menu.map((category) => (
    //     <div
    //       key={category.id}
    //       className={`cursor-pointer mr-4 py-2 ${activeCategory === category.categoryName ? 'font-bold underline' : ''
    //         }`}
    //       onClick={() => onTabClick(category.categoryName)}
    //     >
    //       {category.categoryName}
    //     </div>
    //   ))}

    // </div>

    <div className='max-w-2xl fixed z-[10] bg-[#3e2f25] w-full text-white'>

      {/* heading text & back btn */}
      <div className='flex items-center justify-between w-full px-4'>
        <h1 className='text-3xl pl-2 font-semibold uppercase'>{activeCategory}</h1>

        <Link href='/category' className='p-2 '>
          <svg className='fill-white w-[44px] h-[44px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </Link>
      </div>

      {/* tabs list */}
      <div className='w-full overflow-hidden '>
        <ul className='flex py-4 px-4 gap-6 uppercase w-full font-semibold overflow-scroll scrollbar-hide'>

          {menu.map((category, id) => (
            <li
              key={id}
              onClick={() => onTabClick(category.categoryName)}
              className={`flex gap-2 items-center ${activeCategory === category.categoryName ? 'font-bold underline' : ''} `}>
              <div className='whitespace-nowrap cursor-pointer  flex flex-nowrap'>{category.categoryName}</div>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>
          ))}
        </ul>
      </div>

    </div>


  );
};

const CategoryItems = ({ activeCategory }) => {
  const selectedCategory = menu.find((category) => category.categoryName === activeCategory || 'Hot Coffee');

  return (
    <ul className='px-4 md:px-8 place-items-center md:place-items-start grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-[140px]'>

      {selectedCategory.itemsList.map((data, id) => (
        <li key={id} >
          <div className='relative w-full min-w-[280px] '>
            <p className='absolute -top-3 -right-3 font-bold uppercase text-lg bg-[#d9d9d9] px-3  h-[70px] flex justify-center items-center rounded-full border-[3px] border-[#3e2f25]'>{data.price}<span className='text-xs font-semibold'>&nbsp;qr</span></p>
            <img className='w-[100vw] max-h-[180px] object-cover rounded-xl overflow-hidden' src={data.img} alt="item" />
          </div>
          <div className={josefinSans.className}>
            <p className='capitalize text-xl mt-2'>{data.itemName}</p>
          </div>
          <div className={josefinSans.className}>
            <p>{data.itemDescription}</p>
          </div>
        </li>
      ))}

    </ul>
  );

};

const App = () => {

  // const [activeCategory, setActiveCategory] = useState(localStorage.getItem('selectedCategory'));

  const [activeCategory, setActiveCategory] = useState()
  useEffect(() => {
    setActiveCategory(localStorage.getItem('selectedCategory'))
  }, [])


  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='bg-[#3e2f25]/20 w-full h-full'>
      <div className='max-w-2xl mx-auto pb-10 bg-white'>

        <CategoryTabs activeCategory={activeCategory} onTabClick={handleTabClick} />
        <CategoryItems activeCategory={activeCategory} />
      </div>

    </div>
  );
};

export default App;
