import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    const navigate = useNavigate('/')
    const buttonclicked = () => {
        navigate('/')
    }
    return (
        <div className='flex py-2 px-3 bg-cyan-800'>
            <button onClick={buttonclicked} className='bg-amber-500 font-medium  px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Return to Home Page</button>
            <button onClick={() => {
                navigate(-1)
            }} className='bg-amber-500 font-medium  px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Back</button>
            <button onClick={() => {
                navigate(+1)
            }} className='bg-amber-500 font-medium  px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Next</button>
        </div>
    )
}

export default Navbar2
