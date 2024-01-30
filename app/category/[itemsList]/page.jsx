'use client'
import React from 'react'
import { menu } from '@/app/constant/page'
// https://react.dev/learn/rendering-lists
const page = ({ params }) => {
  
  if (params.itemsList == 'shakes') {
    console.log(true)
  }else{
    console.log(false)
  }

  return (

    <div>
    </div>
  )
}

export default page