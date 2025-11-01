import React from 'react'

const Card = (props,age,img) => {
    console.log(props,age,props.user,props.age);
  return (
       <div className="card">
        <img src={props.img}></img>
        <h1>{props.user},{props.age}</h1>
        <p>I am an AI/ML student from India</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
