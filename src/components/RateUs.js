import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function RateUs(props) {

  const[rating, setRating]= useState(null);
  const[hover, setHover]= useState(null);
  return (
    <div id={props.id} className='flex flex-auto  justify-end mr-100 mt-5'>
        {[...Array(5)].map((star,index)=>{
            const currentRating =index+1;
             return ( <label>
             <input 
             className='hidden'
             type='radio'
             name='rating'
             value={currentRating}
             onClick={()=> setRating(currentRating)}/>
             <FaStar className='cursor-pointer'
            size={50}
            color={currentRating<=(hover||rating)? "yellow":"white"}
            onMouseEnter={()=>setHover(currentRating)}
            onMouseLeave={()=>setHover(null)}
              />
             </label>)
        })}
    </div>
  )
}
