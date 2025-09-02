import React from 'react'

const btn = (props) => {
  return (
    <div>
      <button className='p-2 bg-black text-white rounded w-[220px] cursor-pointer' >{props.text}</button>
    </div>
  )
}

export default btn
