import React, { useState } from 'react'

export default function WhatWeOffer() {

  const [isVisible, setVisable] =useState(false);
   function handleVisable() {
    if(!isVisible) {
        setVisable(true);
    }
    else{ 
        setVisable(false)
    }
   }


  return (
    <div id="whatWeOffer" className="flex flex-col text-center w-150 h-auto  text-white mx-32 bg-fuchsia-600 mb-10">
        <h2 onClick={handleVisable} className='text-3xl text-center  font-semibold p-5 cursor-pointer'>What we offer</h2>
      { isVisible ? null : <p className='p-10 justify-center ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>}
    </div>
  )
}
