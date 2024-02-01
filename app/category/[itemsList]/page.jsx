'use client'
import React, { useState } from 'react'
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
  // const [toggle, setToggle] = useState(1)

  // function updateToggle(id) {
  //   setToggle(id)
  // }

  // console.log(category)
  return (
    <div className='bg-[#3e2f25]/20 w-full h-full'>


      <div className='max-w-2xl mx-auto pb-10 bg-white'>
        <div className='max-w-2xl fixed z-[10] bg-[#3e2f25] w-full text-white'>
          <div className='flex items-center  pr-4 md:px-4'>
            <Link href='/category' className='p-2 '>
              <svg className='text-white fill-white w-[44px] h-[44px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
            </Link>
            {category.map((name)=>(
            <h1 className='text-3xl font-semibold uppercase -mt-1'>{name.categoryName}</h1>
            ))}
          </div>
          <ul className='flex gap-10 uppercase font-semibold bg-green-400 overflow-scroll scrollbar-hide'>
          </ul>
        </div>

        <ul className='px-4 md:px-8 place-items-center md:place-items-start grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-[80px]'>

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
    </div>
  )

}

export default page