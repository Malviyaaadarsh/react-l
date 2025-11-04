import React from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'

const Content1 = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh]  flex gap-10 items-center'>
       <Leftpart />
       <Rightpart users={props.users}/>
    </div>
  )
}
export default Content1
