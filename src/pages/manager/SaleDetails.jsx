import React from 'react'

export default function SaleDetails({transcation}) {
  return (
    <div className='flex w-full h-full pt-6  px-20'>
      <div className='flex flex-col gap-8 w-full border-2 py-6 px-16'>
        <div className='flex flex-col w-full gap-10'>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Transaction ID: </div>
            <div className='text-gray-500 font-semibold'>0001</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Order ID:</div>
            <div className='text-gray-500 font-semibold'>001</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Payment Method:</div>
            <div className='text-gray-500 font-semibold'>Credit/Debit Card</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Created at:</div>
            <div className='text-gray-500 font-semibold'>Mar 21 2024 20:00</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Total:</div>
            <div className='text-gray-500 font-semibold'>E300,00</div>
          </div>
        </div>
      </div>
    </div>
  )
}
