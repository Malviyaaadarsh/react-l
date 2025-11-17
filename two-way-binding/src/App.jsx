import React, { useState } from 'react'

const App = () => {

const[title,settitle]=useState('')

  const submitform = (e)=>{
    e.preventDefault();      // to prevent default behaviour of form submission // no page reload after submission
    console.log("Form Submitted with input:", title); 
    settitle('') // form submitted appears in console for a very small duration before , but now static // behaviour of form 
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitform(e)}}>
        <input type="text" placeholder="Enter your name" onChange={(e)=>{
          settitle(e.target.value)
        }}   value={title}/>
        <button>Click to Submit</button> 
      </form>
    </div>
  )
}
export default App


