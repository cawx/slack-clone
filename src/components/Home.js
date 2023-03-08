import React from 'react'
import Navbar from './Navbar'
import video1 from '../media/teamd.webm'
import google from '../media/google.svg'

function Home() {

  return (
    <div className="font-lato overflow-x-hidden">
        <section className='section bg-purple pb-20'>
          <Navbar />
          <div className='container mx-auto flex flex-col space-x-5 md:flex-row md:space-x-16 items-center columns-auto'>
            <div className='flex flex-col md:w-4/6 xl:w-6/12 relative'>
                <h1 className="text-6xl  my-5 font-black text-white text-center md:text-left">Great teamwork starts with a <span className='text-yellow'>digital HQ</span></h1>
                <p className="w-5/6 text-lg text-white text-center mb-10 font-bold md:text-left">With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>
                <div className='flex flex-col xl:flex-row xl:space-x-4'>
                  <button className='p-4 px-8 my-2 text-sm rounded bg-white text-purple font-bold'>SIGN UP WITH EMAIL</button>
                  <button className='pr-4 my-2 text-sm rounded bg-blue text-white font-bold flex items-center space-x-3' id='google-btn'>
                    <div className='bg-white p-3 m-1 rounded' >
                      <img src={google} className='w-5' />
                    </div>
                    <p className='w-full text-center'>SIGN UP WITH GOOGLE</p>
                  </button>
                </div>            
                <p className='text-white font-bold mb-2 invisible md:visible '>Slack is free to try for as long as you’d like</p>
            </div>
            <div className=' md:w-2/6'>
              <video className="md:max-w-2xl overflow-visible"  height="400" src={video1} loop muted autoPlay={true}></video>
            </div>                            
          </div>
        </section>
        <section className='section'>
          <div>

          </div>
        </section>
    </div>
  )
}

export default Home