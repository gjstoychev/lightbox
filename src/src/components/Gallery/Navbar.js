import React from 'react'

import flickr_logo from './img/flickr_logo.png'
import flickr_text from './img/flickr_text.png'

import './Navbar.css'

const Navbar = () => (
  <div className='container-fuild text-left header'>
    <img src={flickr_logo} alt={'Flickr Logo'} />
    <img src={flickr_text} alt={'Flickr Title'} />
    <h4 className='header-title'>lightbox demo</h4>
  </div>
)

export default Navbar
