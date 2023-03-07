import React from 'react'
import Navbar from './Navbar'
import video1 from '../media/teamd.webm'

function Home() {

  return (
    <div className="font-notosans">
        <section className='section bg-purple'>
          <Navbar />
          <div className='container mx-auto flex items-center columns-auto'>
            <div>
                <h1 className="text-6xl font-bold text-white">Great teamwork starts with a <span className='text-yellow'>digital HQ</span></h1>
                <p className="text-xl text-white">With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>
                <div className='flex space-x-4'>
                  <button className='p-4 px-8 my-4 text-sm rounded bg-white text-purple font-bold'>SIGN UP WITH EMAIL</button>
                  <button className='p-4 px-8 my-4 text-sm rounded bg-blue text-white font-bold' id='google-btn'>SIGN UP WITH GOOGLE</button>
                </div>
                
                <p className='text-white font-bold'>Slack is free to try for as long as you’d like</p>
            </div>
            <div>
              <video className=""  height="400" src={video1} loop muted autoPlay={true}></video>
            </div>
          </div>
          
        </section>
    </div>
  )
}

export default Home