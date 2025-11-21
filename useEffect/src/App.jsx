import { useEffect } from "react";
import React, { useState } from 'react'

const App = () => {
 const [a,seta]= useState(0); 
 const [b,setb]= useState(0); 
  
 useEffect(function(){
  console.log('running')
 },[a] // dependencies
)
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button  onClick={()=>{
        seta(a+1); 
      }}>Change A</button>
      <button onClick={()=>{
        setb(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
