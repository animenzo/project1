import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
   const [products] =  useContext(ProductContext)
   const {search} = useLocation()
   const category = decodeURIComponent(search.split("=")[1])
   const [filteredProducts,setfilteredProducts] = useState(null)

  //  const getProductsCategory = async ()=>{
  //   try {
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     setfilteredProducts(data)
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  //  }


   useEffect(()=>{
    if(!filteredProducts || category =="undefined")
      { setfilteredProducts(products)}

    if(category != "undefined"){
      // getProductsCategory()
      setfilteredProducts(products.filter(p=>p.category == category))
    }
    
   },[category,products])

  //  console.log(filteredProducts);
   


  return products ? ( 
    <>
        <Nav></Nav>

        <div className='w-[85%] p-10 flex flex-wrap pt-[5%]'>

          {filteredProducts && filteredProducts.map((p,i)=>(
                <Link key={i}  to={`/details/${p.id}`} className='mb-3 mr-3 card p-3 border shadow rounded w-32 h-[25vh] flex flex-col justify-center items-center'>
                <div className=' hover:scale-105 w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{
                  backgroundImage:`url(${p.image})`
                }}>
                  
                </div>
                <h1 className='hover:text-blue-300 text-xs'>{p.title}</h1>
              </Link>
             
          ))}

  
      
        </div>

    </> 
  ):( <Loading></Loading>)
}

export default Home
