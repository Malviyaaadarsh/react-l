import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="parent">
      {/* <div className="card">
        <img src="https://images.unsplash.com/photo-1752281739115-3d419e7b47cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"></img>
        <h1>Aadarsh Malviya</h1>
        <p>I am an AI/ML student from India</p>
        <button>View Profile</button>
      </div> */}
      <Card user='Anuj Malviya' age={18} //or '18'
    img='https://images.unsplash.com/photo-1752281739115-3d419e7b47cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'  />
 <Card user='Aman Sharma' age={19} img='https://plus.unsplash.com/premium_photo-1761298779249-1165dd0f3fb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'
      />
    </div>
  )
}
export default App


