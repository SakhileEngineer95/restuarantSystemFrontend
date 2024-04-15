import React from 'react'
import { HiOutlineCash } from "react-icons/hi";
import { BsFillCreditCardFill } from "react-icons/bs";
import CartItem from '../../components/CartItem';

export default function Cart() {
  return (
    <div className='flex flex-col w-full h-full'>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <div className='h-[100px] flex sticky bottom-0 bg-gray-100' style={{ boxShadow: "0px -4px 6px -1px rgba(0, 0, 0, 0.1)"}}>
        <div className=' flex flex-1 p-3 flex-col border-e-2 ps-8'>
          <div className='flex gap-3 items-center flex-1 border-b-2 cursor-pointer'>
            <HiOutlineCash size='45px' className='text-gray-500'/>
            <div className='font-semibold text-gray-500'>Cash</div>
          </div>
          <div className='flex flex-1 gap-3 items-center cursor-pointer'>
            <BsFillCreditCardFill size='35px' className='text-gray-500'/>
            <div className='font-semibold text-gray-500'>Credit/Debit card</div>
          </div>
        </div>
        <div className='flex flex-1 justify-between items-center px-3'>
          <div className='font-semibold text-gray-500'>Total: E600,00</div>
          <div className={`flex p-2 flex-col bg-red-500 w-[120px] h-[50px]
          text-white rounded-[4px] items-center justify-center
          hover:bg-red-400 font-semibold cursor-pointer`}>
              <div>Pay</div>
          </div>
        </div>
      </div>
    </div>
  )
}
