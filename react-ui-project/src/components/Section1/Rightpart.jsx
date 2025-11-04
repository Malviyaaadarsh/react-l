import React from 'react'
import Rightcard from './rightcard'
const Rightpart = (props) => {
  return (
    <div id='right' className='h-full  overflow-x-auto rounded-4xl w-7/10 p-6 flex flex-nowrap gap-10'>
       {props.users.map(function(elem,index){
    return <Rightcard img={elem.img} tag={elem.tag} key={index} id={index}/>
       })}
    </div>
  )
}

export default Rightpart
