import React from 'react'

export default function CartItem() {
  return (
    <div className='flex-1 pe-8 ps-3'>
        <div className='flex items-center w-full h-[80px] border-b-2 justify-between'>
          <div className='flex gap-3 items-center'>
            <div className={`flex p-2 flex-col bg-red-500 w-[70px] h-[30px]
            text-white rounded-[4px] items-center justify-center
            hover:bg-red-400 font-semibold cursor-pointer`}>
                <div>Remove</div>
            </div>
            <div className='flex flex-col'>
              <div className='font-semibold text-gray-500'>Swazi Man</div>
              <div className='font-semibold text-gray-500 text-xs'>Contains extra cheese, chicken and tomato sauce</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold text-gray-500'>E 200,00</div>
            <div className='font-semibold text-gray-500'>X2</div>
          </div>
        </div>
      </div>
  )
}
