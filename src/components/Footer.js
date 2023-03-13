import React from 'react'
import logo from '../media/logo.svg'
import { AiOutlineTwitter, AiFillFacebook, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <div>
        <div className='container mx-auto py-20'>
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
            <div>
                <div className='w-full border-b-2 my-5 border-black opacity-10'></div>
                <div>
                    <div>
                        <a href='/'>Status</a>
                        <a href='/'>Privacy</a>
                        <a href='/'>Terms</a>
                        <a href='/'>Cookie Preferences</a>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Change Region</a>     
                    </div>
                    <div>
                        <a href='/'>Download Slack</a>
                        <AiOutlineTwitter />
                        <AiFillFacebook />
                        <AiFillYoutube />
                        <AiFillLinkedin />  
                    </div>
                    <p>©2023 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer