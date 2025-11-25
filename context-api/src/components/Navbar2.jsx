import React from 'react'
import { useContext } from 'react'
import { ThemeDataCtx } from '../context/ThemeCtx'

const Navbar2 = () => {
    const [Theme, setTheme ] = useContext(ThemeDataCtx)
  return (
    <div className='Nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
        <h4>{Theme}</h4>
    </div>
  )
}

export default Navbar2
