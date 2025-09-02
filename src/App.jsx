import { useState } from 'react'
import Game from './components/game'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/btn'
import diceImg from './assets/dice.png'

function App() {
  const [count, setCount] = useState(0)
  const [showGame,setShowGame] = useState(false)
  if(showGame){
    return <Game />
  }
  return (
    <>
    <div className='w-screen h-screen flex justify-center'>

    <div className="container w-[1182px] h-screen flex items-center justify-center">
      <div className="img">
        <img className='w-[649px] h-[522px]'  src={diceImg} alt="not found" />

      </div>
      <div className="sec relative w-[649px] h-[522px]  ">
        
        <div className='flex flex-col justify-center items-center relative h-full'>

        <h1 className='text-6xl font-bold  absolute right-0 '>DICE GAME</h1>
        <button onClick={()=>setShowGame(true)} className='absolute right-0 bottom-[172px] cursor-pointer '><Btn text="Play Now"/></button>

        </div>
        
      </div>
    </div>
    </div>

    </>
  )
}

export default App
