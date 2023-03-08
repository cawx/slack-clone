import React from 'react'
import logo from '../media/logo-white.svg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='container mx-auto text-white flex justify-between items-center h-24'>
      <div className='flex items-center'>
        <a className='visible' href='/'><img src={logo} alt="" /></a>
        <div className='flex invisible font-bold xl:visible'>
            <a className='p-4 flex items-center' href='/'>Product<AiOutlineDown className='mx-1 h-3 '/></a>
            <a className='p-4 hover:underline' href='/solutions'>Solutions</a>
            <a className='p-4 hover:underline' href='/'>Enterprise</a>
            <a className='p-4 hover:underline' href='/'>Resources</a>
            <a className='p-4 hover:underline' href='/'>Pricing</a>
        </div>
      </div>
        
      <div className='flex items-center invisible xl:visible'>
          <a href='/' className='mx-2 font-bold'>Sign in</a>
          <button className='mx-2 p-3 px-4 my-2 text-sm rounded border border-white text-white font-bold' >TALK TO SALES</button>
          <button className='mx-2 p-3 px-4 my-2 text-sm rounded bg-white text-purple font-bold'>TRY FOR FREE</button>
      </div>
      <div className='visible xl:invisible'>
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