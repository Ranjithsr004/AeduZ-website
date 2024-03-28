import React from 'react'
import './Why_Us.css'

const Why_Us = (props) => {
  return (
    <div className="containner">
    <div className="cardd">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>{props.content}</p>
    </div>
    </div>
  )
}

export default Why_Us
