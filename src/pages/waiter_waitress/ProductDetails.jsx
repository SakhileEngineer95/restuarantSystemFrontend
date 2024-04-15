import React from 'react'

export default function ProductDetails({product}) {
  return (
    <div className='flex w-full h-full pt-6  px-20'>
      <div className='flex flex-col gap-8 w-full border-2 py-6 px-16'>
        <img className="w-[200px] h-[200px] self-center" src="logo_luxy.png" alt="Image description" />
        <div className='flex flex-col w-full gap-7'>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Product ID: </div>
            <div className='text-gray-500 font-semibold'>0001</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Description:</div>
            <div className='text-gray-500 font-semibold'>Credit/Debit card</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Category:</div>
            <div className='text-gray-500 font-semibold'>Preparing</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Price:</div>
            <div className='text-gray-500 font-semibold'>Mar 21 2024 20:00</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Served by:</div>
            <div className='text-gray-500 font-semibold'>Sakhile Mkhonta</div>
          </div>
        </div>
      </div>
    </div>
  )
}
