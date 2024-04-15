import React from 'react'

export default function OrderCard({index}) {
  return (
    <div className='flex cursor-pointer justify-evenly h-[50px] w-full p-5 border-stone-300 border-b-1 gap-3'>
      <div className='flex-1 text-gray-500'>{index}. Order time</div>
      <div className='flex flex-1 flex-col'>
          <div className='text-gray-500'>Order ID</div>
      </div>
      <div className='flex flex-1 items-start flex-col text-gray-500'><div>Order table</div></div>
      <div className='flex flex-1 items-start flex-col text-gray-500'><div>Order status</div></div>
    </div>
  )
}
