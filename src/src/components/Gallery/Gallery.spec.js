import React from 'react'
import { shallow } from 'enzyme'

import GalleryLayout from './GalleryLayout'
import Gallery from './Gallery'

describe('(Component) Gallery', () => {
  let wrapper, getGallery

  beforeEach(() => {
    getGallery = jest.fn()

    wrapper = shallow(
      <Gallery photos={[1, 2, 3]} getGallery={getGallery} />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <GalleryLayout photos={[1, 2, 3]} />
    )).toEqual(true)
  })

  it('should render empty component', () => {
    const wrapper = shallow(
      <Gallery photos={[]} getGallery={getGallery} />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center'>
        <h3>Loading Application...</h3>
      </div>
    )).toEqual(true)
  })

  it('should call getGallery action on component mount', () => {
    expect(getGallery).toHaveBeenCalledTimes(1)
  })
})
