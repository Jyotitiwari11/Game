import React,{useState} from 'react'
import Total from './game_total'
import Select from './game_select'
import Roll from './rolldice'

const game = () => {
       const [selected, setSelected] = useState(-1)
       const [dice,setDice]=useState(1);
       const [score,setscore]=useState(0);
       const [error,setError]=useState("");


  
  return (
    <div>
      <div className='w-[1280px] h-[151px] flex justify-around items-center my-3'>
        <Total score={score} />
        <Select selected={selected} setSelected={setSelected} error={error}/>
        
      </div>
        <Roll dice={dice} setDice={setDice}  setscore={setscore} selected={selected} setSelected={setSelected}  setError={setError}/>
    </div>
  )
}

export default game
