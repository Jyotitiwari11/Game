import React ,{useState} from 'react'

const rolldice = ({dice,setDice,setscore,selected,setSelected,setError}) => {



function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
}
const roll=()=>{
    if(selected===-1){
        setError("You have not selected any number")
        return;
    }
    setError("")

    const randomNumber=getRandom(1,7);
    setDice(randomNumber)
    if(selected===randomNumber){
        setscore((prev)=>prev+randomNumber);
    }
    else{
        setscore((prev)=>(prev-2));

    }
    setSelected(-1);
}

  return (
    <div>
        <div className='w-screen  flex justify-center my-[48px] flex-col items-center '>
            <div onClick={roll}  className='w-[250px] h-[250px] cursor-pointer'>
            <img src={`/images/dice_${dice}.png`} alt="" />
            </div>
            <p className='text-[24px] w-[229px] h-[36px]'>Click on Dice To Roll</p>
        </div>
      
    </div>
  )
}

export default rolldice
 