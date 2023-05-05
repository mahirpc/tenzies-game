import React from 'react'
import "./dice.css"

export default function Dice(props) {
  const style ={
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <div className='dice' style={style} onClick={props.setIsHeld}> 
      <h2>{props.value}</h2>
    </div>
  )
}
