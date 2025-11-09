import React, { useState, useSyncExternalStore } from 'react'

const App = () => {
  const [a, setA] = useState(20)
  const [username, setusername] = useState('Aadarsh')
  const [users, setusers] = useState(['Aadarsh ', 'Anuj ', 'Riya ', 'Aarvi ', 'Akshat '])
  function change() {
    setA(30)
    setusername('Anuj')
    setusers(['Raj ', 'Aman ', 'Harshit ', 'Nandini ', 'Varsha '])
  }




  const [num,setnum]=useState(0)
  function increasenum(){
      setnum(num+1)
  }
  function decreasenum(){
     setnum(num-1)
  }
  function jumpbyfive(){
    setnum(num+5)
  }

const [profile,setprofile]=useState({user:'Aadarsh',age:19})
const [myprofile,setmyprofile]=useState({user:'Aadi',age:19})
const [arr,setarr]=useState([1,2,3,4,5])
const btnclicked = ()=>{
    const newprofile = {...profile}  // creates copy of profile
    newprofile.user='Anuj'
    newprofile.age=20
    setprofile(newprofile)
    const newarr = [...arr]   // creates copy of arr
    newarr.push(6)
    setarr(newarr)
    console.log(newarr)
    // 2nd method to update state when it depends on previous state
    setmyprofile(prevProfile => ({
        ...prevProfile,user: 'Riya',age: 21}));
}


const [n,setn]=useState(0)
const updateN=()=>{
    // setn(n+1)
    // setn(n+1)
    // setn(n+1)
    // console.log(n) // value will not updater by 3 , no batching here

    // batching method
    setn(prevN => prevN + 1);
    setn(prevN => prevN + 1);
    setn(prevN => prevN + 1);
    console.log(n) 
}

  return (
    <div>
      <h2>basic useState</h2>
      <h1>value of a is : {a} <br></br> name of User is {username} </h1>
      <h1>Know existing users : {users}</h1>
      <button onClick={change}>Click to change value</button>


      <hr></hr>
      <br></br>
      <br></br>
      <br></br>

      <h2>practise the basic</h2>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jumpbyfive}>jump by 5</button>


<hr></hr>
<br></br>
<br></br>
<br></br>
<h2>Advance useState</h2>
<h3>js does an asynchronous process in background ( one step behind the actual process ) , for setnum , it print value behind the current state. </h3>
<h3>therefore we can do some best practises to stay the console updated</h3>
    <h1>{profile.user},{profile.age}</h1>       
    <h1>{myprofile.user},{myprofile.age}</h1>       
    <h1>{arr}</h1>                      
    <button onClick={btnclicked}>Click</button>
    <h1>N : {n}</h1>
    <button onClick={updateN}>Click to change n </button>
    </div>
  )
}
export default App
