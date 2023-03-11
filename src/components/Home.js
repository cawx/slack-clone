import React from 'react'
import Navbar from './Navbar'
import video1 from '../media/teamd.webm'
import video2 from '../media/connectedness.webm'
import video2mobile from '../media/connectedness-mobile.webm'
import video3 from '../media/flexibility.webm'
import video3mobile from '../media/flexibility-mobile.webm'
import video4 from '../media/speed.webm'
import video4mobile from '../media/speed-mobile.webm'
import video5 from '../media/customer-awards.mp4'
import google from '../media/google.svg'
import airbnb from '../media/airbnblogo.png'
import nasa from '../media/nasalogo.png'
import etsy from '../media/etsylogo.png'
import nyt from '../media/nytlogo.png'
import target from '../media/targetlogo.png'
import uber from '../media/uberlogo.png'
import cardPromo from '../media/img-promo-01.png'
import { BsArrowRight, BsFillPlayFill } from 'react-icons/bs'

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
        <section className='bg-beige'>
          <div className=' flex flex-col-reverse lg:flex-row xl:container xl:mx-auto'>
            <div className='flex justify-center xl:justify-start align-middle py-10'>
              <div className='w-5/6 md:w-4/6 inline'>
                <h1 className='text-3xl font-black md:text-5xl py-5'>Choose how you want to work</h1>
                <p className='text-lg pb-5'>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.</p>
                <a href='/' className='w-fit text-bluelink font-bold text-lg flex items-center'>Learn more about flexible communication<BsArrowRight className='ml-2'/></a>
              </div>
            </div> 
            <div className='flex align-middle self-end'>
              <video title="A user starting a huddle and recording a video clip in the Slack app" className="md:max-w-xl overflow-visible hidden lg:inline"  height="400" src={video3} loop muted autoPlay={true}></video>
              <video className="max-w-xs sm:max-w-md  md:max-w-lg overflow-visible lg:hidden"  height="400" src={video3mobile} loop muted autoPlay={true}></video>
            </div>
          </div>
        </section>
        <section className='bg-beige'>
          <div className='py-10 lg:flex xl:container xl:mx-auto'>
            <div className='flex align-middle'>
              <video title="Using the Workday integration to quickly file an expense report in the Slack app" className="md:max-w-xl overflow-visible hidden lg:inline"  height="400" src={video4} loop muted autoPlay={true}></video>
              <video className="max-w-xs sm:max-w-md pr-2 md:max-w-lg overflow-visible lg:hidden"  height="400" src={video4mobile} loop muted autoPlay={true}></video>
            </div>
            <div className='flex justify-center align-middle py-10'>
              <div className='w-5/6 md:w-4/6 inline'>
                <h1 className='text-3xl font-black md:text-5xl py-5'>Move faster with your tools in one place</h1>
                <p className='text-lg pb-5'>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>
                <a href='/' className='w-fit text-bluelink font-bold text-lg flex items-center'>Learn more about the Slack platform<BsArrowRight className='ml-2'/></a>
              </div>
            </div> 
          </div>
        </section>
        <section className='container mx-auto mt-20'>
          <div className=''>
            <h1 className='text-center font-black text-3xl my-5 md:text-5xl'>Teams large and small rely on Slack</h1>
            <p className='text-center my-5'>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
            <div className='flex flex-col md:flex-row justify-center'>
              <button className='w-full md:w-auto tracking-wide p-4 m-2 rounded bg-purplesecondary text-white font-bold'>MEET SLACK FOR ENTERPRISE</button>
              <button className='w-full md:w-auto tracking-wide p-4 m-2 rounded border border-purplesecondary text-purplesecondary font-bold' >TALK TO SALES</button>
            </div>
            <div className='flex flex-col items-center md:flex-row justify-center'>
              <div className='flex flex-col items-center text-center my-10 w-1/3'>
                <span className='text-purplesecondary font-black text-5xl'>85%</span>
                <p className='text-sm md:w-3/5'>of users say Slack has improved communication*</p>
              </div>
              <div className='flex flex-col items-center text-center my-10 w-1/3'>
                <span className='text-purplesecondary font-black text-5xl'>86%</span>
                <p className='text-sm md:w-3/5'>feel their ability to work remotely has improved*</p>
              </div>
              <div className='flex flex-col items-center text-center my-10 w-1/3'>
                <span className='text-purplesecondary font-black text-5xl '>88%</span>
                <p className='text-sm md:w-3/5'>feel more connected to their teams*</p>
              </div>
            </div>  
          </div>
        </section>
        <section className='xl:container mx-auto mt-10 lg:flex'>
            <div className='flex align-middle mr-2 relative justify-center items-center'>
              <video title="Video featuring a Slack customer, company name" className="max-w-3xl md:max-w-2xl overflow-hidden rounded-r-full"  height="400" src={video5} loop muted autoPlay={true}></video>
              <button className='flex items-center justify-center bg-blueplay h-12 w-20 absolute rounded hover:bg-bluelink'><BsFillPlayFill className=' text-white' /></button>
            </div>
            <div className='mx-7'>
              <p className=' text-xl md:text-2xl italic tracking-wide mt-12 mb-5'>“We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked—very little disruption.”</p>
              <p className='font-black'>Mark Smith</p>
              <p>Senior Technical Product Manager, T-Mobile</p>
              <a href='/' className='w-fit text-bluelink font-bold text-lg flex items-center my-4'>See more customer stories<BsArrowRight className='ml-2'/></a>
            </div>
          
        </section>
        <div className='mx-7 text-sm opacity-75 mt-10 pb-10 text-center'>
            <p>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
        </div>
        <section className=' bg-beige py-16'>
          <div className='container mx-auto'>
            <h1 className='text-2xl font-black text-center mx-3 md:text-4xl mb-10 '>Take a deeper dive into a new way to work</h1>
            <div className='flex justify-center'>
              <a href="/solutions" className='bg-purple px-4 pt-8 pb-5 text-white hover:scale-105 transition ease-in-out duration-300 hover:drop-shadow-md'>
                <p className='text-left text-sm tracking-wide'>Collection</p>
                <h1 className='font-black text-left text-xl'>Slack as your digital HQ</h1>
                <img className='mt-16 mb-10' src={cardPromo} />
                <div className='flex justify-between align-middle'>
                  <p className='uppercase font-black tracking-wider'>See all</p>
                  <BsArrowRight className='text-2xl' />
                </div>
              </a>
            </div>
          </div>
          
        </section>
    </div>
  )
}

export default Home