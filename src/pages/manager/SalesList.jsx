import React from 'react'
import SaleCard from '../../components/SaleCard'

export default function SalesList() {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-evenly h-[80px] w-full p-5 border-stone-300 border-2 gap-3'>
        <div className='flex-1 border-e-2 font-semibold border-stone-300 text-gray-500'>Transaction ID</div>
        <div className='flex flex-1 border-e-2 flex-col border-stone-300'>
            <div className='font-semibold border-stone-300 text-gray-500'>Order ID</div>
        </div>
        <div className='flex flex-1 items-start flex-col font-semibold border-e-2 border-stone-300 text-gray-500'><div>Date</div></div>
        <div className='flex flex-1 items-start flex-col font-semibold text-gray-500'><div>Trans status</div></div>
      </div>

      <div className='flex flex-col gap-1'>
        <SaleCard index={1} statusValue='successful'/>
        <SaleCard index={1} statusValue='failed'/>
        <SaleCard index={1} statusValue='failed'/>
      </div>
    </div>
  )
}
