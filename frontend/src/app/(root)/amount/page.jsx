"use client";
import AddAmountModel from '@/components/Amount/AddAmountModel';
import HeaderName from '@/components/HeaderName'
import React from 'react'


const AmountPage = () => {
  return (
    <>
      <div className="container py-10">
    <HeaderName/>

<div className="card w-full border py-5 rounded flex items-center justify-between px-3">
    <div className="flex flex-col">
       <h1 className='text-2xl font-bold'>Add Amount</h1>
     <p>Total Amount : 150/-</p>
      </div>
      
      <AddAmountModel/>
       </div>
       </div>
    </>
  
  )
}

export default AmountPage 