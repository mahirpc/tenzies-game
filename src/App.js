import './App.css';
import Dice from './components/Dice';
import {useState, useEffect} from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';


function App() {
  const [dice, setDice] = useState(randomArrayGenerator())
  const [isWinner, setIsWinner] = useState(false)

  useEffect(() => {
    const isAllHeld = dice.every(item => item.isHeld)
    const allSameValue = dice.every(item => item.value === dice[0].value)
    if(isAllHeld && allSameValue){
      setIsWinner(true)
    }else{
      setIsWinner(false)
    }
  }, [dice])

  function randomArrayGenerator(){
    const randomArray = [];
    for (let i=0; i<10; i++){
      const randomValue = Math.floor(Math.random()*6 +1)
      randomArray.push({id:nanoid() ,value:randomValue, isHeld:false})
    }
    return randomArray;
  }
  
  function generateSingleDie(){
    const randomValue = Math.floor(Math.random()*6 +1)
    return {id:nanoid() ,value:randomValue, isHeld:false}
  }
  
  function rollDice(){
    if(!isWinner){
      setDice(prevValues => prevValues.map(item => {
        return item.isHeld ? item : generateSingleDie()
      }))
    }else{
      setDice(randomArrayGenerator())
    }
  }

  function setIsHeld(id){
    setDice(prevDice => prevDice.map(item => {
      return item.id === id ? {...item, isHeld:!item.isHeld} : item
    }))
  }

  const diceArray = dice.map(item => (
    <Dice key={item.id} value={item.value} isHeld={item.isHeld} setIsHeld={()=> setIsHeld(item.id)}/>
  ))
  
  return (
    <div className="App">
      {isWinner && <Confetti gravity={0.3}/>}
      <main className='main'>
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          {diceArray}
        </div>
        <button className='roll-button' onClick={rollDice}>
          {isWinner ? "Play again" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
