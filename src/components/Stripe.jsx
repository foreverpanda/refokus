import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2pz] border-r-[1.2px] border-zinc-700 flex justify-between items-center'>
    <img src={val.url}></img>


     <span className='font-semibold'>{val.number}</span> 
    </div>
  )
}

export default Stripe