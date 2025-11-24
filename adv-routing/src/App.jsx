import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound404 from './Pages/NotFound404'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Collections from './Pages/Collections'
import CollectionDetail from './Pages/CollectionDetail'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:collectionId' element={<CollectionDetail />} />   // Dynamic Route for Collection Details
        <Route path='/product' element={<Product />} >
          <Route path='MenClothing' element={<Men />} />
          <Route path='WomenClothing' element={<Women />} />
        </Route>
        <Route path='/*' element={<NotFound404 />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App

