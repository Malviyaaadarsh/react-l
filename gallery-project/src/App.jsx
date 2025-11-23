import React , {useEffect}  from 'react'
import {useState} from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'
const App = () => {
  const [userData, setUserData] = React.useState([])
  const [Index , setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=10`
    )
    setUserData(response.data)
    console.log(response.data)
  }
useEffect(function(){
getData()
},[Index])
  let printuserData = <h3 className={"text-gray-400 text-xs absolute top-1/2  font-semibold left-1/2 -translate-x-1/2 -translate-y-1/2"}>Loading...</h3>;
  if (userData.length > 0) {
    printuserData = userData.map(function (elem, index) {
      return <div key={index}>
        <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className="bg-black p-4 overflow-auto text-white h-screen ">
      {/* <button onClick={getData}
        className="bg-green-600 px-5 mb-3 active:scale-90 text-white py-2 rounded m-4">Get Data</button> */}
      <div className="flex flex-wrap gap-4 p-2 h-[80%] ">
        {printuserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
          <button 
             onClick={()=>{
                 if(Index>1){
                  setUserData([])
                  setIndex(Index - 1)
                 }
             }}
            
             style={{opacity: Index===1?0.5:1}}
          className='bg-amber-600 text-sm cursor-pointer py-2 px-4 font-semibold active:scale-90 text-black'>Prev</button>     
          <h4>Page {Index}</h4>    
          <button 
          onClick={()=>{
            setUserData([])
          setIndex(Index + 1)
                 
             }}
          className='bg-amber-600 text-sm cursor-pointer py-2 px-4 font-semibold active:scale-90 text-black'>Next</button>         
      </div>
    </div>
  )
}

export default App

