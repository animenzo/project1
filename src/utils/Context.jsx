import React, { createContext, useEffect, useState } from 'react'
export const  ProductContext = createContext()

import axios from './axios'
const Context = (props) => {
   const [products,setProducts] =  useState(null || JSON.parse(localStorage.getItem('products')))

   useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
    }
}, []);
  //  const getProducts = async ()=>{
  //   try {
  //       const {data} = await axios("/products")

  //       setProducts(data)
  //   } catch (error) {
        
  //   }
  //  }
  //  useEffect(()=>{
  //   getProducts()
  //  },[])
  return (
    <ProductContext.Provider value={[products,setProducts]}>
        
      {props.children}
    
    </ProductContext.Provider>

  )
}

export default Context
