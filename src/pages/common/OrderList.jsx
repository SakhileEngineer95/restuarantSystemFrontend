import React from 'react'
import OrderCard from '../../components/OrderCard'

export default function OrderList() {
  return (

    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-evenly h-[80px] w-full p-5 border-stone-300 border-2 gap-3'>
        <div className='flex-1 border-e-2 font-semibold border-stone-300 text-gray-500'>Order time</div>
        <div className='flex flex-1 border-e-2 flex-col border-stone-300'>
            <div className='font-semibold border-stone-300 text-gray-500'>Order ID</div>
        </div>
        <div className='flex flex-1 items-start flex-col font-semibold border-e-2 border-stone-300 text-gray-500'><div>Order table</div></div>
        <div className='flex flex-1 items-start flex-col font-semibold text-gray-500'><div>Order status</div></div>
      </div>

      <div className='flex flex-col gap-3'>
        <OrderCard index={1}/>
        <OrderCard index={2}/>
        <OrderCard index={3}/>
        <OrderCard index={4}/>
        <OrderCard index={5}/>
        <OrderCard index={6}/>
        <OrderCard index={7}/>
        <OrderCard index={7}/>
        <OrderCard index={8}/>
      </div>

    </div>
  )
}
