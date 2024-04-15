import React from 'react'

export default function InputField({type, placeholder,width='400px', height='50px'}) {
  return (
    <input
        type={type}
        placeholder={placeholder}
        className={`border-gray-400 focus:border-red-400 w-[${width}] h-[${height}]`}
    />
  )
}
