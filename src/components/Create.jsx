import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Create = () => {
    const navigate = useNavigate()
    const [products,setProducts] = useContext(ProductContext)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

        const AddProductHandler = (e)=>{
            e.preventDefault()
            if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 ||  price.trim().length < 1 || description.trim().length < 5){
                alert("No field must be empty buddy! and must have atleast 4 characteres")
                return;
            }
            const product = {
                id: nanoid(),
                title,
                image,
                price,
                description,
                category
            }
        setProducts([...products, product]) 

        localStorage.setItem('products', JSON.stringify([...products, product]))

        console.log(products);
        toast.success("Product added successfully")
        navigate("/")    
    }

  return (
    <div>
      <form action="" onSubmit={AddProductHandler} className='p-[5%] flex flex-col items-center w-screen h-screen'>
        <h1 className='text-3xl w-1/2 mb-3'>Add New Product</h1>
        <input type="text" placeholder='title'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <input type="url" placeholder='Image Link'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setImage(e.target.value)} value={image}/>
        <input type="text" placeholder='Category'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setCategory(e.target.value)} value={category}/>
        <input type="number" placeholder='Price'  className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setPrice(e.target.value)} value={price}/>
       
        <textarea type="text" placeholder='description' rows="10" className="text-xl resize-none bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <div className='w-1/2'>
        <button className='text-white mb-3 font-semibold py-2  rounded-md px-4 hover:bg-blue-500  bg-blue-400'>Add Product</button>
        </div>
       
      </form>
    </div>
  )
}

export default Create
