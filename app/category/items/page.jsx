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

  const [active, setActive] = useState('null')
  const handleClick = (name) => {
    setActive(name)
  }


  return (
    <div className='max-w-2xl fixed z-[10] bg-[#3e2f25] w-full text-white'>

      {/* heading text & back btn */}
      <div className='flex items-center justify-between w-full px-4'>
        <h1 className='text-3xl pl-2 font-semibold uppercase'>{activeCategory}</h1>

        <Link href='/category' className='p-2 '>
          <svg className='fill-white w-[44px] h-[44px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </Link>
      </div>



      {/* <div className='bg-green-800 relative py-10   scrollbar-hide'>
        <ul className='group flex w-full absolute z-100 top-0 overflow-scroll  font-light bg-red-800 gap-10'
        >
          <li className='group-hover:bg-blue-800'>test 1</li>
          <li>teffst 1</li>
          <li>tesssst 1</li>
          <li>tesffffft 1</li>
          <li>teffst 1</li>
          <li>tesssst 1</li>
          <li>test 1</li>
          <li onClick={(e) => handleClick('Shakes')} className={`${active === 'Shakes' ? 'font-bold underline': ''} cursor-pointer`}>Shakes</li>
          <li onClick={(e) => handleClick('Dessert')} className={`${active === 'Dessert' ? 'font-bold underline': ''} cursor-pointer`}>Dessert</li>
          <li onClick={(e) => handleClick('Red')} className={`${active === 'Red' ? 'font-bold underline': ''} cursor-pointer`}>Red</li>
          
        </ul>
      </div> */}


      {/* tabs list */}
      <div className='w-full overflow-hidden '>
        <div className='flex py-4 px-4 gap-6 uppercase w-full font-semibold overflow-scroll scrollbar-hide'>


          {menu.map((category, id) => (
            <ul className='group'>
              <li
                key={id}
                onClick={() => onTabClick(category.categoryName)}
                className={`flex gap-2 items-center ${activeCategory === category.categoryName ? 'font-bold underline' : ''} transition-transform duration-300 transform}`}>

                <div className='whitespace-nowrap cursor-pointer  flex flex-nowrap'>{category.categoryName}</div>
                <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
              </li>
            </ul>
          ))}
        </div>
      </div>

    </div>


  );
};

const CategoryItems = ({ activeCategory }) => {
  const selectedCategory = menu.find((category) => category.categoryName === activeCategory);

  return (
    <ul className='px-4 md:px-8 place-items-center md:place-items-start grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-[140px]'>

      {selectedCategory.itemsList.map((data, id) => (
        <li key={id} >
          <div className='relative w-full min-w-[280px] '>
            <p className='absolute -top-3 -right-3 font-bold uppercase text-lg bg-[#d9d9d9] px-3  h-[70px] flex justify-center items-center rounded-full border-[3px] border-[#3e2f25]'>{data.price}<span className='text-xs font-semibold'>&nbsp;qr</span></p>
            <img className='w-[100vw] max-h-[200px] object-cover rounded-3xl overflow-hidden' src={data.img} alt="item" />
          </div>
          <div className={josefinSans.className}>
            <p className='capitalize text-xl mt-2'>{data.itemName}</p>
          </div>
          {/* <div className={josefinSans.className}>
            <p>{data.itemDescription}</p>
          </div> */}
        </li>
      ))}

    </ul>
  );

};

const App = () => {

  // const [activeCategory, setActiveCategory] = useState(localStorage.getItem('selectedCategory'));

  const [activeCategory, setActiveCategory] = useState('Hot Coffee')
  useEffect(() => {
    setActiveCategory(localStorage.getItem('selectedCategory'))
  }, ['shakes'])


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
