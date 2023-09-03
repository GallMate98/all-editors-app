import React from 'react'

export default function Card(props) {
    console.log(props.haveBorder)
  return (
    <div className={`flex flex-col text-center items-center ml-200   pl-8 pr-8 ${props.haveBorder ? 'border-r-2' : ''} `}>
        <img className="w-16 h-16 rounded-full " src={props.data.image} alt={props.data.name}/>
        <h3 className='text-2xl '>{props.data.name}</h3>
        <p >{props.data.paragraph}</p>
        
    </div>
  )
}
