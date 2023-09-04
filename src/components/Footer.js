import React from 'react'
import Message from './Message'
import SocialMedia from './SocialMedia'
import RateUs from './RateUs'

export default function Footer() {
  return (
    <div id="contact" className='bg-gray-500'>
        <div>
            <h2 className=' pt-5 text-3xl text-white mb-4 text-center'>Contact</h2>
        </div>
        <div className='flex justify-end'><RateUs id="rateUs"/></div>
        <div className='flex'>
            <div className='w-1/2 border-r-2 mb-4'>
                <Message/>
        </div>
        <div className='w-1/2 pl-12'>
            <SocialMedia/>
        </div>
        </div>
    </div>
  )
}
