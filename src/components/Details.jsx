import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import axios from '../utils/axios'
import Loading from './Loading'
import { toast } from 'react-toastify'

const Details = () => {
  const navigate = useNavigate()
  const [products, setProducts] =  useContext(ProductContext)
    const [product,setproduct] = useState(null)
   const {id} =  useParams()
    

    //  const getSingleProduct = async()=>{
    //     try {
    //         const {data} = await axios.get(`/products/${id}`)
    //         console.log(data);
    //         setproduct(data)

    //     } catch (error) {
    //         console.log(error);
            
    //     }
    //  }

     useEffect(()=>{
        if(!product){
          setproduct(products.filter(p=>p.id == id)[0])
        }
     },[])
     const ProductDeleteHandler=(id)=>{
      const filteredProducts = products.filter(p=>p.id !== id)
      setProducts(filteredProducts)
      localStorage.setItem('products', JSON.stringify(filteredProducts))
      toast.success("Product Deleted successfully")
      navigate('/')
     }

  return product? (
    <div className="container">
        
    <div className='m-auto flex justify-center items-center w-[70%] p-[10%]  h-full bg-white'>
         
      <img className='h-60 mr-8 object-contain' src={`${product.image}`} alt="" />
      <div className='content'>
        <h1 className='text-4xl'>{product.title}</h1>
        <h2 className='text-zinc-600 mt-2'>{product.category}</h2>
        <h2 className='text-red-400'>₹{product.price}</h2>
        <p className='text-xs text-zinc-500 mb-5'>{product.description} </p>
        <Link to={`/edit/${product.id}`} className="py-1 mr-3 border-blue-200 text-blue-400 border-2 rounded px-6">Edit</Link>
        <button onClick={()=>ProductDeleteHandler(product.id)} className="py-1  border-red-400 text-red-400 border-2 mt-2 rounded px-8">Delete</button>
       
      </div>
     
    </div>
    </div>
  ):(
    <Loading></Loading>
  )
}

export default Details
