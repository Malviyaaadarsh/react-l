import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
    return (
        <div className='h-full w-80  shrink-0 overflow-hidden relative rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} ></img>
            <Rightcardcontent tag={props.tag} id={props.id}/>
        </div>
    )
}

export default rightcard
