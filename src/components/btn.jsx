import React from 'react'

const btn = (props) => {
   let style = 'p-2 rounded w-[220px] cursor-pointer'
  if (props.type === 'second') {
    style += ' bg-white text-black border border-black'
  } else {
    style += ' bg-black text-white'
  }
  return (
    <div>
      <button onClick={props.onclick} className={style}>{props.text}</button>
    </div>
  )
}

export default btn
