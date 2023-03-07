import React from 'react'
import video1 from '../media/teamd.webm'

function Home() {

  return (
    <div>
        <section>
          <div>
              <h1 className="text-3xl font-bold">Great teamwork starts with a <span>digital HQ</span></h1>
              <p>With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>
              <button>SIGN UP WITH EMAIL</button>
              <button id='google-btn'>SIGN UP WITH GOOGLE</button>
              <p>Slack is free to try for as long as you’d like</p>
          </div>
          <div>
            <video class=""  height="400" src={video1} loop muted autoPlay={true}></video>
          </div>
        </section>
    </div>
  )
}

export default Home