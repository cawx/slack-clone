import React from 'react'
import logo from '../media/logo-white.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='container mx-auto text-white flex justify-between items-center h-24'>
        <a href='/'><img src={logo} /></a>
        <div className='flex'>
            <a className='p-4 hover:underline' href='/'>Product</a>
            <a className='p-4 hover:underline' href='/solutions'>Solutions</a>
            <a className='p-4 hover:underline' href='/'>Enterprise</a>
            <a className='p-4 hover:underline' href='/'>Resources</a>
            <a className='p-4 hover:underline' href='/'>Pricing</a>
        </div>
        <div>
            <a href='/'>Sign in</a>
            <button>TALK TO SALES</button>
            <button>TRY FOR FREE</button>
        </div>
        <div className='hidden'>
          <AiOutlineMenu size={20} />
        </div>
        <div className='fixed left-0 top-0 hidden'>
            <a className='p-4' href='/'>Product</a>
            <a className='p-4' href='/solutions'>Solutions</a>
            <a className='p-4' href='/'>Enterprise</a>
            <a className='p-4' href='/'>Resources</a>
            <a className='p-4' href='/'>Pricing</a>
        </div>
    </div>
  )
}

export default Navbar