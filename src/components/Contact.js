import React from 'react'
import Upload from './Upload'
import Details from './Details'

export default function Contact() {
  return (
    <div id="fileUpload" className='relative px-20 flex flex-auto items-center justify-between w-150 h-auto  text-white mx-32 mb-10 border-slate-300 border-dotted border-4'>
      <Upload/>
      <Details/>
    </div>
  )
}
