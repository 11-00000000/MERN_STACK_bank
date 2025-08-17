 "use client";
import HeaderName from '@/components/HeaderName'
import React from 'react'
import AddNewFdModel from './+___compoents/AddNewFDModel'
import FDCard from './+___compoents/FDCard';

const FDpage = () => {
  return (
    <>

   <div>
     <HeaderName/>
     <div className="py-10 grid grid-cols-1 items-start gap-x-4 gap-y-3 lg:grid-cols-2 xl:grid-cols-3">
   
     <AddNewFdModel/> 
     {
  Array(4).fill(null).map((cur, i) => {
    const fdData = { amount: 10000 + i * 5000 }; // Example data
    return <FDCard key={i} fd={fdData} />;
  })
}



    
   </div>
      </div>
    </>
  )
}

export default FDpage