import React from 'react'
import Navbar from './Navbar'
import video1 from '../media/teamd.webm'
import video2 from '../media/connectedness.webm'
import video2mobile from '../media/connectedness-mobile.webm'
import google from '../media/google.svg'
import airbnb from '../media/airbnblogo.png'
import nasa from '../media/nasalogo.png'
import etsy from '../media/etsylogo.png'
import nyt from '../media/nytlogo.png'
import target from '../media/targetlogo.png'
import uber from '../media/uberlogo.png'
import { BsArrowRight } from 'react-icons/bs'

function Home() {


  return (
    <div className="font-lato overflow-x-hidden">
        <section className='section bg-purple pb-20'>
          <Navbar />
          <div className='container mx-auto flex flex-col space-x-5 md:flex-row md:space-x-16 items-center columns-auto'>
            <div className='flex flex-col md:w-4/6 xl:w-6/12 relative'>
                <h1 className="text-6xl  my-5 font-black text-white text-center md:text-left">Great teamwork starts with a <span className='text-yellow'>digital HQ</span></h1>
                <p className=" text-lg text-white text-center mb-10 font-bold md:text-left md:w-5/6">With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>
                <div className='flex flex-col xl:flex-row xl:space-x-4'>
                  <button className='p-4 px-8 my-2 text-sm rounded bg-white text-purple font-bold'>SIGN UP WITH EMAIL</button>
                  <button className='pr-4 my-2 text-sm rounded bg-blue text-white font-bold flex items-center space-x-3' id='google-btn'>
                    <div className='bg-white p-3 m-1 rounded' >
                      <img src={google} alt="Google icon" className='w-5' />
                    </div>
                    <p className='w-full text-center'>SIGN UP WITH GOOGLE</p>
                  </button>
                </div>            
                <p className='text-white font-bold mb-2 invisible md:visible '>Slack is free to try for as long as you’d like</p>
            </div>
            <div className=' md:w-2/6'>
              <video title="Team discussing work in the Slack app" className="md:max-w-2xl overflow-visible"  height="400" src={video1} loop muted autoPlay={true}></video>
            </div>                            
          </div>
        </section>
        <section className='bg-beige pt-5'>
          <div className='container mx-auto'>
            <p className='uppercase font-black text-sm text-center mt-5 tracking-wider'>trusted by companies all over the world</p>
            <div className='flex flex-wrap justify-center '>
              <img src={airbnb} alt="AirBnb logo" className='object-none m-3 md:m-6' />
              <img src={nasa} alt="Nasa logo" className='object-none m-3 md:m-6' />
              <img src={uber} alt="Uber logo" className='object-none m-3 md:m-6' />
              <img src={target} alt="Target logo" className='object-none m-3 md:m-6' />
              <img src={nyt} alt="New York Times logo" className='object-none m-3 md:m-6' />
              <img src={etsy} alt="Etsy logo" className='object-none m-3 md:m-6' />
            </div>
          </div>
        </section>
        <section className='bg-beige'>
          <div className='py-10 lg:flex xl:container xl:mx-auto'>
            <div className='flex align-middle'>
              <video title="A connected team discussing work in multiple channels in the Slack app" className="md:max-w-xl overflow-visible hidden lg:inline"  height="400" src={video2} loop muted autoPlay={true}></video>
              <video className="max-w-xs sm:max-w-md pr-2 md:max-w-lg overflow-visible lg:hidden"  height="400" src={video2mobile} loop muted autoPlay={true}></video>
            </div>
            <div className='flex justify-center align-middle py-10'>
              <div className='w-5/6 md:w-4/6 inline'>
                <h1 className='text-3xl font-black md:text-5xl py-5'>Bring your team together</h1>
                <p className='text-lg pb-5'>At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                <a href='/' className='w-fit text-bluelink font-bold text-lg flex items-center'>Learn more about channels<BsArrowRight className='ml-2'/></a>
              </div>
            </div> 
            
          </div>
        </section>
    </div>
  )
}

export default Home