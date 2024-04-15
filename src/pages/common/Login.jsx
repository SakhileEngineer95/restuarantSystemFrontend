import React from 'react'
import InputField from '../../components/InputField'

export default function Login() {
  return (
    <div className='p-2 bg-stone-100 flex flex-col h-screen justify-center items-center gap-5'>
      <img className="rounded-[500px] w-[100px] h-[100px]" src="logo_luxy.png" alt="Image description" />
      <div className='flex flex-col gap-5'>
        <InputField type='text'  placeholder='Username'/>
        <InputField type='password' placeholder='Password'/>
      </div>
      <div className={`flex p-2 flex-col bg-red-500 w-[200px] h-[50px]
      text-white rounded-[4px] items-center justify-center
      hover:bg-red-400 font-semibold cursor-pointer`}>
          <div>Login</div>
      </div>
    </div>
  )
}