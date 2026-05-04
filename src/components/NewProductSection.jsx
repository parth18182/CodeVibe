import NewProductCard from '@/ReusableCompo/NewProductCard'
import React from 'react'

const NewProductSection = () => {
  return (
    <div className='px-10 h-135 pt-18 mb-6 overflow-x-hidden overflow-y-hidden'>
      <h1 className="text-3xl md:text-4xl p-1 font-bold text-center  text-white rounded-tl-full rounded-tr-lg rounded-br-full  rounded-bl-lg  bg-[#5C0B15]">New Products</h1>
      <div className='shadow-2xl mt-6 pb-6'>
        <NewProductCard />
      </div>
    </div>
  )
}

export default NewProductSection
