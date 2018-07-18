import React from 'react'
import { shallow } from 'enzyme'

import LoadingP from './LoadingP'
import './LoadingP.css'

describe('(Component) LoadingP', () => {
  it('should render the component with a loading state', () => {
    const wrapper = shallow(
      <LoadingP loading={true} />
    )

    expect(wrapper.equals(
      <p className='loading'>Loading More Items...</p>
    )).toEqual(true)
  })

  it('should render the component with a non-loading state', () => {
    const wrapper = shallow(
      <LoadingP loading={false} items={12} maxItems={24} />
    )

    expect(wrapper.equals(
      <p className='loading'>12/24 images loaded</p>
    )).toEqual(true)
  })
})
