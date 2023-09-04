import React from 'react'
import Logo from './Logo'

export default function Title() {
  return (
    <div className="flex flex-auto text-5xl font-bold text-center justify-center mb-5">
      <h1 className='mt-2 mr-4'>all</h1>
      <Logo/>
      <h1 className='mt-2 ml-1'>itors</h1>
    </div>
  )
}
