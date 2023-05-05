import React from 'react'
import "./dies.css"

export default function Dies(props) {
  const style ={
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <div className='dies' style={style} onClick={props.setIsHeld}> 
      <h2>{props.value}</h2>
    </div>
  )
}
