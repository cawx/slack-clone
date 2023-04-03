import React, { useState } from 'react'
import logo from '../media/logo-white.svg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'

function Navbar() {
  const [mobileopen, setMobileOpen] = useState(false)

  return (
    <>
      <div>
        <div className='container mx-auto items-center text-white flex justify-between h-24'>
            <div className='flex items-center w-full'>
              <a className='visible' href='/'><img src={logo} alt="" /></a>
              <div className='xl:flex hidden space-x-6 mx-8 font-bold xl:visible'>
                  <a className=' hover:underline flex items-center' href='/'>Product<AiOutlineDown className='ml-1 h-3'/></a>
                  <a className=' hover:underline' href='/solutions'>Solutions</a>
                  <a className=' hover:underline' href='/'>Enterprise</a>
                  <a className=' hover:underline' href='/'>Resources</a>
                  <a className=' hover:underline' href='/'>Pricing</a>
              </div>
            </div>
            <div className='xl:flex items-center hidden xl:visible whitespace-nowrap md:space-x-8'>
                <button><HiOutlineSearch className='text-xl' /></button>
                <a href='/' className='mx-2 font-bold hover:underline'>Sign in</a>
                <button className='mx-2 p-3 px-4 my-2 text-sm rounded border border-white text-white font-bold' >TALK TO SALES</button>
                <button className='mx-2 p-3 px-4 my-2 text-sm rounded bg-white text-purple font-bold'>TRY FOR FREE</button>
            </div>
            <div className='xl:hidden'>
              <button onClick={setMobileOpen}><AiOutlineMenu size={20} /></button>
            </div>
          </div>
      </div>
      {/* MOBILE MENU */}
      <div>
        <div className='hidden fixed z-10 w-screen h-screen m-0 bg-white flex flex-col' open={mobileopen} onClose={setMobileOpen}>
          <div className='flex flex-col text-lg font-semibold'>
            <a className='p-4 flex place-items-center justify-between' href='/'>Product<AiOutlineRight className='ml-1 h-7'/></a>
            <a className='p-4' href='/solutions'>Solutions</a>
            <a className='p-4' href='/'>Enterprise</a>
            <a className='p-4' href='/'>Resources</a>
            <a className='p-4' href='/'>Pricing</a>
          </div>
          <div className='flex flex-col bot'>
            <button>Sign in</button>
            <button>Download slack</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar