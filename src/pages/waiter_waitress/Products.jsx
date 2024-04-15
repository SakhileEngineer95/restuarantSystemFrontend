import React from 'react'
import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/SearchBar'

export default function Products() {
  return (
    <div className='flex flex-col w-full h-full'>
        <SearchBar placeholder='Search product'/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}
