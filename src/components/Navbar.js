import React, { useState, useEffect } from 'react'
import logo from '../media/logo-white.svg'
import logoBlack from '../media/logo-black.svg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineRight, AiOutlineCloudDownload } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { motion as m, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [mobileopen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [scrollY, setScrollY] = useState(0);

  const toggleNav = () => {
    setMobileOpen(!mobileopen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className='container mx-auto items-center text-white flex justify-between h-24'>
            <div className='flex items-center w-full'>
              <a className='visible' href='/'><img src={logo} alt="" /></a>
              <div className='xl:flex hidden space-x-6 mx-8 font-bold xl:visible'>
                  <button onClick={() => setDropdown(!dropdown)} className='relative flex items-center'>
                    Product<AiOutlineDown className='ml-1 h-3'/>
                    {dropdown && (
                      <div className='absolute font-normal my-2 top-6 left-[-10px] flex flex-col bg-white text-gray-800 z-10 w-52 text-left text-sm rounded-xl shadow-md'>
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2 rounded-t-xl'>Features</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Channels</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Digital HQ</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Integrations</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Security</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Slack Connect</a>  
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Customers</a>
                        <div className='w-full bg-gray-200 h-[1px]'></div>
                        <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2 rounded-b-xl flex'><AiOutlineCloudDownload className='text-xl mr-2' />Download Slack</a>  
                      </div>
                    )}
                  </button>
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
              <button><AiOutlineMenu size={20} onClick={toggleNav} /></button>
            </div>
          </div>
      </div>
      {/* NAVBAR ANIMATED */}
        { scrollY > 200 &&
          <div className='flex items-end mt-0 xl:mt-3 justify-center'>
            <div className='w-screen xl:container flex justify-between h-24 bg-white fixed z-10 xl:rounded-full shadow-md px-10'>
              <div className='flex items-center w-full'>
                <a className='visible' href='/'><img src={logoBlack} alt="" /></a>
                <div className='xl:flex hidden space-x-6 mx-8 font-bold xl:visible'>
                    <button onClick={() => setDropdown(!dropdown)} className='relative flex items-center'>
                      Product<AiOutlineDown className='ml-1 h-3'/>
                      {dropdown && (
                        <div className='absolute font-normal my-2 top-6 left-[-10px] flex flex-col bg-white text-gray-800 z-10 w-52 text-left text-sm rounded-xl shadow-md'>
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2 rounded-t-xl'>Features</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Channels</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Digital HQ</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Integrations</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Security</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Slack Connect</a>  
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2'>Customers</a>
                          <div className='w-full bg-gray-200 h-[1px]'></div>
                          <a href='/' className='my-[1px] mx-[1px] px-5 hover:bg-bluelink hover:text-white py-2 rounded-b-xl flex'><AiOutlineCloudDownload className='text-xl mr-2' />Download Slack</a>  
                        </div>
                      )}
                    </button>
                    <a className=' hover:underline' href='/solutions'>Solutions</a>
                    <a className=' hover:underline' href='/'>Enterprise</a>
                    <a className=' hover:underline' href='/'>Resources</a>
                    <a className=' hover:underline' href='/'>Pricing</a>
                </div>
              </div>
              <div className='xl:flex items-center hidden xl:visible whitespace-nowrap md:space-x-8'>
                  <button><HiOutlineSearch className='text-xl' /></button>
                  <a href='/' className='mx-2 font-bold hover:underline'>Sign in</a>
                  <button className='mx-2 p-3 px-4 my-2 text-sm rounded border border-purple text-purple font-bold' >TALK TO SALES</button>
                  <button className='mx-2 p-3 px-4 my-2 text-sm rounded bg-purple text-white font-bold'>TRY FOR FREE</button>
              </div>
              <div className='xl:hidden flex align-center'>
                <button><AiOutlineMenu size={20} onClick={toggleNav}/></button>
              </div>
            </div>
          </div>}
      {/* MOBILE MENU */}
      {mobileopen &&
      <div className='relative'>
        <div className='fixed z-10 w-screen h-screen m-0 bg-white flex flex-col'>
          <div className='flex flex-col text-lg font-semibold'>
            <a className='hover:underline p-4 flex place-items-center justify-between' href='/'>Product<AiOutlineRight className='ml-1 h-7'/></a>
            <a className='hover:underline p-4' href='/solutions'>Solutions</a>
            <a className='hover:underline p-4' href='/'>Enterprise</a>
            <a className='hover:underline p-4' href='/'>Resources</a>
            <a className='hover:underline p-4' href='/'>Pricing</a>
          </div>
          <div className='flex sm:flex-row flex-col shadow-[0_20px_79px_-18px_rgba(0,0,0,0.33)] py-12 absolute bottom-20 right-0 left-0'>
            <button className='mx-2 w-full p-3 px-4 my-2 text-sm rounded border border-purple text-purple font-bold' >SIGN IN</button>
            <button className='mx-2 w-full p-3 px-4 my-2 text-sm rounded bg-purple text-white font-bold'>DOWNLOAD SLACK</button>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Navbar