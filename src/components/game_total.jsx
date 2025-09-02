import React from 'react'

const game_total = ({score}) => {
  return (
    <div >
      <div className='w-[135px] h-[151px]'>
            <button className='w-[62px] h-[112px] text-bold text-[100px]'>{score}</button>
            <p className='text-[24px]'>Total Score</p>

        </div>
    </div>
  )
}

export default game_total
