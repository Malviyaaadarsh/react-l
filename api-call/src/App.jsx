import React from 'react'
import axios from 'axios';
const App = () => {
 
  const [data, setData] = React.useState([]);

  async function getData(){
     // method 1 : using fetch and async await 
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
  }
  const getData2 = async () => {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(response);
    console.log(data);
  }
  const getData3 = async () => {
    // method 2 : using axios and async await 
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  }
  const getimg = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    console.log(response);
    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data1</button>
      <button onClick={getData2}>Get Data2</button>
      <button onClick={getData3}>Get Data3</button>
      <button onClick={getimg}>Get Img</button>
      <div>
         {data.map(function(elem,index){
          return <h3>Hello , {elem.author} , {index}</h3>
          })}
      </div>
    </div>
  )
}

export default App
