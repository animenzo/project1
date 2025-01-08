import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

const Edit = () => {
    const [products,setProducts] = useContext(ProductContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({
        title:"",
        image:"",
        price:"",
        description:"",
        category:""
    })
    const changeHandler = (e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }
   
    // const [title, setTitle] = useState("")
    // const [image, setImage] = useState("")
    // const [price, setPrice] = useState("")
    // const [description, setDescription] = useState("")
    // const [category, setCategory] = useState("")


    useEffect(()=>{
        setProduct(products.filter((p)=>p.id == id)[0])
    },[id])


      
         const AddProductHandler = (e)=>{
                    e.preventDefault()
                    if(product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 ||  product.price.trim().length < 1 || product.description.trim().length < 5){
                        alert("No field must be empty buddy! and must have atleast 4 characteres")
                        return;
                    }
                   
                    const pi = products.findIndex((p)=> p.id == id)
                    const copyData = [...products]
                    copyData[pi] = {...products[pi],...product}
                setProducts(copyData) 
        
                localStorage.setItem('products', JSON.stringify(copyData))
        
                // console.log(product);
                navigate(-1)    
            }

  return (
    <div>
    <form action="" onSubmit={AddProductHandler} className='p-[5%] flex flex-col items-center w-screen h-screen'>
      <h1 className='text-3xl w-1/2 mb-3'>Edit Product</h1>
      <input type="text" placeholder='title'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" name='title' onChange={changeHandler} value={product && product.title}/>
      <input type="url" placeholder='Image Link'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" name='image' onChange={changeHandler} value={product && product.image}/>
      <input type="text" placeholder='Category'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" name='category' onChange={changeHandler} value={product && product.category}/>
      <input type="number" placeholder='Price'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" name='price' onChange={changeHandler} value={product && product.price}/>
     
      <textarea type="text" placeholder='description' rows="10" className="text-xl resize-none bg-zinc-100 rounded p-3 w-1/2 mb-3" name='description' onChange={changeHandler} value={product && product.description}/>
      <div className='w-1/2'>
      <button className='text-white mb-3 font-semibold py-2  rounded-md px-4 hover:bg-blue-500  bg-blue-400'>Edit Product Details</button>
      </div>
     
    </form>
  </div>
  )
}

export default Edit
