import React from 'react'
import logo from '../media/logo-white.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <a href='/'><img src={logo} /></a>
        <div>
            <a href='/'>Product</a>
            <a href='/solutions'>Solutions</a>
            <a href='/'>Enterprise</a>
            <a href='/'>Resources</a>
            <a href='/'>Pricing</a>
        </div>
        <div>
            <a href='/'>Sign in</a>
            <button>TALK TO SALES</button>
            <button>TRY FOR FREE</button>
        </div>
    </div>
  )
}

export default Navbar