import './App.css';
import Dies from './components/Dies';
import {useState} from "react"
import { nanoid } from 'nanoid'

function App() {
  const [dies, setDies] = useState(randomArrayGenerator())

  function randomArrayGenerator(){
    const randomArray = [];
    for (let i=0; i<10; i++){
      const randomValue = Math.floor(Math.random()*6 +1)
      randomArray.push({id:nanoid() ,value:randomValue, isHeld:false})
    }
    return randomArray;
  }
  
  function rollDice(){
    setDies(randomArrayGenerator())
  }

  function setIsHeld(id){
    // const newDies = dies.map(item => {
    //   if (item.id === id){
    //     return {...item, isHeld:!item.isHeld}
    //   }
    //   return item
    // })
    // setDies(newDies)
    setDies(prevDies => prevDies.map(item => {
      return item.id === id ? {...item, isHeld:!item.isHeld} : item
    }))
  }

  const diesArray = dies.map(item => (
    <Dies key={item.id} value={item.value} isHeld={item.isHeld} setIsHeld={()=> setIsHeld(item.id)}/>
  ))
  
  return (
    <div className="App">
      <main className='main'>
        <div className='dies-container'>
          {diesArray}
        </div>
        <button className='roll-button' onClick={rollDice}>Roll!</button>
      </main>
    </div>
  );
}

export default App;
