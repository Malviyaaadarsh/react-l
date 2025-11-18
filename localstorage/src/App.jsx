import React from 'react'

const App = () => {
  localStorage.setItem('name', 'John Doe');
  localStorage.setItem('age', 18);
  const a = localStorage.getItem('name');
  const user = {
    name: 'Jane Smith',
    age: 25,
    city: 'New York'
  };
  
  localStorage.setItem('user', JSON.stringify(user)); // changes to string & save 
  const userFromStorage = JSON.parse(localStorage.getItem('user')); // convert back to object 
  console.log(userFromStorage);
  
  localStorage.removeItem('age');
  console.log(a);
  return (
    <div>
      App
    </div>
  )
}

export default App


