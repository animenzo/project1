import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  const {search, pathname} = useLocation()

  return (
    <div className='h-full w-full flex '>
    {
      pathname != '/' || search.length > 0 && (
        <Link className='text-white mb-3 py-1  rounded-md px-4 hover:bg-blue-500 top-[3%] right-[10%] absolute  bg-blue-400' to="/">Home</Link>
      )
    }
     
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>

    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='/edit/:id' element={<Edit/>}></Route>
  </Routes>

      
    </div>

  )
}

export default App
