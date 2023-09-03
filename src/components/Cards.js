import React from 'react'
import Card from './Card'


export default function Cards(props) {

  return (
    <div id="aboutus" className={`flex flex-col  text-center w-150 h-auto p-4  text-white mx-32  mb-10 ${props.backgroundColor}`  }>
        <h2 className='text-3xl text-center  font-semibold mb-6'>{props.data.title}</h2>
     <div className='relative flex items-center justify-center px-20'>
             <Card data={props.data.cardsData[0]} haveBorder={true} />
             <Card data={props.data.cardsData[1]} haveBorder={false} />
        </div> 
    </div>
  )
}
