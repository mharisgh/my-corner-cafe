import React from 'react'
import { menu } from '../constant/data'
import Link from 'next/link'

const menuItems =[
  {
    id:'1',
    name:'hot coffee',
  },
  {
    id:'2',
    name:'Iced coffee',
  },
  {
    id:'3',
    name:'shakes',
  },
  {
    id:'4',
    name:'hot tea',
  },
  {
    id:'5',
    name:'dessert',
  },
  {
    id:'6',
    name:'appetizers',
  },
  {
    id:'7',
    name:'water',
  },
]

const page = () => {
  return (
    <div className='max-w-2xl text-center mx-auto'>
      <p className='h-[100px] flex justify-center items-center text-white text-2xl bg-primary-500'>What are you in the mood for?</p>
      <div className='slide-up flex flex-col gap-4 my-4 uppercase text-2xl font-medium'>
        {menu.map((data)=>(
        <Link href={`category/${data.slug}`} className='hover:bg-gray-100 py-4'>{data.categoryName}</Link>
        ))}
      </div>
    </div>
  )
}

export default page