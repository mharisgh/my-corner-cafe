'use client'
import React, { useState, useEffect } from 'react';
import { menu } from '@/app/constant/data'
import Link from 'next/link'
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: '300',
  subsets: ['latin']
})


const page = ({ params }) => {

  const category = menu.filter(data => data.slug === params.itemsList)
  const itemsList = category.map(data => data.itemsList)

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }

  console.log(params.itemsList)

  const [pageCategory, setPageCategory] = useState(null);

  // Update selected item based on the slug from the URL
  // useEffect(() => {
  //   setSelectedItem(slug);
  // }, [slug]);


  return (<div className='bg-[#3e2f25]/20 w-full h-full'>


    <div className='max-w-2xl mx-auto pb-10 bg-white'>
      <div className='max-w-2xl fixed z-[10] bg-[#3e2f25] w-full text-white'>
        <div className='flex items-center justify-between w-full px-4'>
          {category.map((name) => (
            <h1 className='text-3xl pl-2 font-semibold uppercase'>{name.categoryName}</h1>
          ))}
          <Link href='/category' className='p-2 '>
            <svg className='fill-white w-[44px] h-[44px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          </Link>

        </div>


        <div className='w-full overflow-hidden '>
          <ul className='flex py-4 px-4 gap-6 uppercase w-full font-semibold overflow-scroll scrollbar-hide'>

            {menu.map((category, id) => (
              <li
                onClick={() => handleItemClick('category.slug')}
                style={{ textDecoration: category.slug === params.itemsList ? 'underline' : 'none', }}
                className={`flex gap-2 items-center`}>
                <Link className='whitespace-nowrap cursor-pointer  flex flex-nowrap' href={`${category.slug}`}>{category.categoryName}</Link>
                <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
               </li>
            ))}

          {/* <li
              onClick={() => handleItemClick('hotcoffee')}
              style={{ textDecoration: pageCategory === 'hotcoffee' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/hotcoffee'>Hot Coffee</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('icedcoffee')}
              style={{ textDecoration: selectedItem === 'icedcoffee' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/icedcoffee'>Iced Coffee</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('shakes')}
              style={{ textDecoration: selectedItem === 'shakes' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/shakes'>Shakes</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('hottea')}
              style={{ textDecoration: selectedItem === 'hottea' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/hottea'>Hot Tea</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('dessert')}
              style={{ textDecoration: selectedItem === 'dessert' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/dessert'>Dessert</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('appetizers')}
              style={{ textDecoration: selectedItem === 'appetizers' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/appetizers'>Appetizers</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li>

            <li
              onClick={() => handleItemClick('water')}
              style={{ textDecoration: selectedItem === 'water' ? 'underline' : 'none', }}
              className='flex gap-2 items-center '>
              <Link className='whitespace-nowrap cursor-pointer flex flex-nowrap' href='/category/water'>Water</Link>
              <img className='w-[10px]' src="/images/tab-flower.png" alt="icon" />
            </li> */}

        </ul>
      </div>

    </div>

    <ul className='px-4 md:px-8 place-items-center md:place-items-start grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-[140px]'>

      {itemsList[0].map((data, id) => (
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



  </div>
  </div >
  )

}

export default page