import React from 'react'

export default function EmployeeDetails({employee}) {
  return (
    <div className='flex w-full h-full pt-6  px-20'>
      <div className='flex flex-col gap-8 w-full border-2 py-6 px-16'>
        <div className='flex flex-col w-full gap-10'>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>First name: </div>
            <div className='text-gray-500 font-semibold'>Sakhile</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Last name:</div>
            <div className='text-gray-500 font-semibold'>Mkhonta</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Date of birth:</div>
            <div className='text-gray-500 font-semibold'>Nov 04 1995</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Email:</div>
            <div className='text-gray-500 font-semibold'>sakhilemkhonta95@gmail.com</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Physical address:</div>
            <div className='text-gray-500 font-semibold'>Eswatini, Mbabane</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Phone number:</div>
            <div className='text-gray-500 font-semibold'>+26876082477</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>ID/Passport:</div>
            <div className='text-gray-500 font-semibold'>9504116200124</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Job position:</div>
            <div className='text-gray-500 font-semibold'>Manager</div>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-500 font-semibold'>Start date:</div>
            <div className='text-gray-500 font-semibold'>Nov 04 1995</div>
          </div>
          <div className='flex justify-center gap-5'>
            <div className={`flex self-center p-2 flex-col bg-red-500 w-[200px] h-[50px]
              text-white rounded-[4px] items-center justify-center
              hover:bg-red-400 font-semibold cursor-pointer`}>
                <div>Edit</div>
            </div>
            <div className={`flex self-center p-2 flex-col bg-red-500 w-[200px] h-[50px]
              text-white rounded-[4px] items-center justify-center
              hover:bg-red-400 font-semibold cursor-pointer`}>
                <div>Remove</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
