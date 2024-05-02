import React from 'react'
import SocialCard from './card/socialCard'

function Footer() {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-evenly mt-10 shadow-md rounded py-4 gap-4 bg-white'>
        <SocialCard/>
        <p className='text-neutral-400'>@All reserved</p>
        <div className="payments">
            <p>MercadoPago - MasterCard</p>
            <p>Pix - PicPay</p>
        </div>
    </div>
  )
}

export default Footer