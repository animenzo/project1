import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

const Nav = () => {
     const [products] =  useContext(ProductContext)
     let distinct_category = products && products.reduce((acc,curval)=> [...acc,curval.category],[])
     distinct_category = [...new Set(distinct_category)]
     const color = ()=>{
      return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
     }
  return (
    <>
       <nav className='w-[15%] h-full flex flex-col items-center pt-5'>
      
        <Link className="py-1 px- border-blue-200 text-blue-400 border-2 rounded px-1" to='/create'>Add Product</Link>
        <hr className='my-3 w-[70%]' />
        <h1 className='text-xl font-semibold w-[70%] mb-2'>Category Filter</h1>
        <div className='w-[80%]'>
          {
            distinct_category.map((c,i)=>(
              <Link   key={i} to={`/?category=${c}`} className='flex rounded-md border-2 hover:bg-teal-50 text-sm items-center  mb-3'><span style={{
                backgroundColor:color()
               
              }} className=' rounded-full w-[8px] m-2 h-[8px] '>
              </span>{c}</Link>
             
            ))
          }
         
            
          
        </div>
      </nav>

    </>
  )
}

export default Nav
