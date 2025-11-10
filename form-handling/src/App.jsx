import React from 'react'

const App = () => {
  const submitform = (e)=>{
    e.preventDefault();      // to prevent default behaviour of form submission // no page reload after submission
    console.log("Form Submitted");   // form submitted appears in console for a very small duration  // behaviour of form 
  }
  // form handling : prevent this 
  return (
    <div>
      <form onSubmit={(e)=>{submitform(e)}}>
        <input type="text" placeholder="Enter your name"/>
        <button>Click to Submit</button> 
      </form>
    </div>
  )
}

export default App


