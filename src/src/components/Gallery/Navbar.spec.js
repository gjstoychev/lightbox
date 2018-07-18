import React from 'react'
import { shallow } from 'enzyme'

import flickr_logo from './img/flickr_logo.png'
import flickr_text from './img/flickr_text.png'
import Navbar from './Navbar'
import './Navbar.css'

describe('(Component) Navbar', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <Navbar />
    )

    expect(wrapper.equals(
      <div className='container-fuild text-left header'>
        <img src={flickr_logo} alt={'Flickr Logo'} />
        <img src={flickr_text} alt={'Flickr Title'} />
        <h4 className='header-title'>lightbox demo</h4>
      </div>
    )).toEqual(true)
  })
})
