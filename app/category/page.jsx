import React from 'react'


const menuItems =[
  {
    id:'1',
    name:'hotcofee',
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
    <div className='slide-up max-w-2xl min-h-screen text-center mx-auto'>
      <p className='py-6 text-white text-2xl bg-primary-500'>What are you in the mood for?</p>
      <div className='flex flex-col gap-4 my-4 uppercase text-2xl font-medium'>
        {menuItems.map((items)=>(
        <p className='hover:bg-gray-100 py-4'>{items.name}</p>
        ))}
      </div>
    </div>
  )
}

export default page