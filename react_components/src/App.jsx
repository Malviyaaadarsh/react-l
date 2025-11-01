// import React from 'react'   
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'
const App = () => {
  const user = 'Aadarsh Malviya'
  const age = 19
  return (
    <div>
      <Navbar/>
      <div className='card'><h1>{user},{age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident expedita nisi?</p></div>
     {/* {Card()} or we can write as   */}
     <Card/>
    </div>
  )
}
export default App
