import React from 'react'
import logo from '../media/logo.svg'
import { AiOutlineTwitter, AiFillFacebook, AiFillYoutube, AiFillLinkedin, AiOutlineCloudDownload } from 'react-icons/ai'
import { TfiWorld, TfiAngleDown } from 'react-icons/tfi'

function Footer() {
  return (
    <div>
        <div className='container mx-auto pt-20 pb-10'>
            <div className='lg:flex lg:mx-24'>
                <div className=''>
                  <img src={logo} className="visible self-start mb-10 lg:mr-36" />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-fit text-sm'>
                        <h2 className='uppercase font-black tracking-wide mb-2'>why slack?</h2>
                        <a href="/" className='my-2 hover:text-bluelink'>Slack vs. Email</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Channels</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Engagement</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Scale</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Watch the demo</a>
                    </div>
                    <div className='flex flex-col w-fit text-sm'>
                        <h2 className='uppercase font-black tracking-wide mb-2'>PRODUCT</h2>
                        <a href="/" className='my-2 hover:text-bluelink'>Features</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Integrations</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Enterprise</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Solutions</a>
                    </div>
                    <div className='flex flex-col w-fit text-sm'>
                        <h2 className='uppercase font-black tracking-wide mb-2'>pricing</h2>
                        <a href="/" className='my-2 hover:text-bluelink'>Plans</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Paid vs. Free</a>
                    </div>
                    <div className='flex flex-col w-fit text-sm'>
                        <h2 className='uppercase font-black tracking-wide mb-2'>resources</h2>
                        <a href="/" className='my-2 hover:text-bluelink'>Partners</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Developers</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Community</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Apps</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Blog</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Help Center</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Events</a>
                    </div>
                    <div className='flex flex-col w-fit text-sm'>
                        <h2 className='uppercase font-black mb-2'>Company</h2>
                        <a href="/" className='my-2 hover:text-bluelink'>About Us</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Leadership</a>
                        <a href="/" className='my-2 hover:text-bluelink'>News</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Media Kit</a>
                        <a href="/" className='my-2 hover:text-bluelink'>Careers</a>
                    </div> 
                </div>
            </div>
            <div className='w-full border-b-2 my-5 border-black opacity-10'></div>
            <div>  
                <div className='flex justify-between items-center flex-wrap w-full'>
                    <div className='flex flex-col md:flex-row font-black tracking-wide text-sm md:space-x-5'>
                        <a href='/' className='py-2 hover:text-bluelink'>Status</a>
                        <a href='/' className='py-2 hover:text-bluelink'>Privacy</a>
                        <a href='/' className='py-2 hover:text-bluelink'>Terms</a>
                        <a href='/' className='py-2 hover:text-bluelink'>Cookie Preferences</a>
                        <a href='/' className='py-2 hover:text-bluelink'>Contact Us</a>
                        <a href='/' className='py-2 hover:text-bluelink flex items-center'><TfiWorld className='mr-1 text-lg'/>Change Region<TfiAngleDown className='ml-1'/></a>     
                    </div>
                    <div className='flex flex-col w-full lg:items-center lg:flex-row lg:w-auto '>
                        <a href='/' className='flex items-center text-bluelink font-bold my-2 whitespace-nowrap'><AiOutlineCloudDownload className='text-2xl mr-2' />Download Slack</a>
                        <div className='flex justify-between md:justify-start w-full lg:mx-3'>
                            <AiOutlineTwitter className='text-xl md:mx-1 hover:text-bluelink hover:cursor-pointer'/>
                            <AiFillFacebook className='text-xl md:mx-1 hover:text-bluelink hover:cursor-pointer'/>
                            <AiFillYoutube className='text-xl md:mx-1 hover:text-bluelink hover:cursor-pointer'/>
                            <AiFillLinkedin className='text-xl md:mx-1 hover:text-bluelink hover:cursor-pointer'/>  
                        </div>
                    </div>                   
                </div>
                <p className='text-sm mt-5'>©2023 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer