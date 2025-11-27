import React,{useState} from 'react'

const game_select = ({selected,setSelected,error}) => {
     
     const arr=[1,2,3,4,5,6]
  return (
    <div className='w-[552px] h-[138px] relative p-3'>
      <p className='text-red-500 absolute right-0 top-[-12px]'>{error}</p>
      <div className='flex gap-[24px]'>
        
      
        {arr.map((value,i)=>{
          return(
            <div key={i} className={`w-[72px] h-[72px] border-2 text-[22px] flex items-center justify-center ${value===selected?"text-white bg-black":"box"}`} onClick={()=>setSelected(value)}>{value}</div>      
            
          )
        }

        )}

   
            
        </div>
        <p className='absolute right-0 text-[24px] font-bold my-3'>Select Number</p>
    </div>
  )
}

export default game_select
