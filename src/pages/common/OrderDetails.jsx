import React from 'react'

export default function OrderDetails({order}) {
  return (
    <div className='flex w-full h-full pt-6  px-20'>
      <div className='flex flex-col gap-8 w-full border-2 py-6 px-16'>
        <div className='flex flex-col w-full gap-10'>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Orde ID: </div>
            <div className='text-gray-500 font-semibold'>0001</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Payment method:</div>
            <div className='text-gray-500 font-semibold'>Credit/Debit card</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Status:</div>
            <div className='text-gray-500 font-semibold'>Preparing</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Created at:</div>
            <div className='text-gray-500 font-semibold'>Mar 21 2024 20:00</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Comment:</div>
            <div className='text-gray-500 font-semibold'>no veggies</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Served by:</div>
            <div className='text-gray-500 font-semibold'>Sakhile Mkhonta</div>
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <div className={`flex p-2 flex-col bg-red-500 w-[120px] h-[50px]
            text-white rounded-[4px] items-center justify-center
            hover:bg-red-400 font-semibold cursor-pointer`}>
            <div>Cancel order</div>
          </div>
        </div>
      </div>
    </div>
  )
}
