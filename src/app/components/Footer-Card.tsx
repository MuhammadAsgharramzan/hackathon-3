import React from 'react'

interface CardTypes {
    h3 : string,
    p1 : string,
    p2 : string,
    p3 : string,
    p4 : string,
    p5? : string,
    p6? : string
}
const Footer_Card = ({h3,p1,p2,p3,p4,p5,p6} : CardTypes) => {
  return (
    <div className='flex flex-col justify-between items-start border border-white'>
        <h3 className='text-[#FFFFFF]'>{h3}</h3>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>
        <p>{p6}</p>
    </div>
  )
}

export default Footer_Card