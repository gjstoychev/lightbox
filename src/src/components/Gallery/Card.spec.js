import React from 'react'
import { shallow } from 'enzyme'

import Lightbox from './Lightbox'
import Card from './Card'
import './Card.css'

describe('(Component) Card', () => {
  it('should render Card component', () => {
    const photo = {
      farm: 4,
      secret: '007',
      server: '4444',
      id: '12091969266',
      title: {_content: 'Humpback Whale'},
      owner: {username: 'Karl Jensen 1962'}
    }

    const wrapper = shallow(
      <Card photo={photo} />
    )

    expect(wrapper.equals(
      <div className='card'>
        <img
          src={'https://farm4.staticflickr.com/4444/12091969266_007.jpg'}
          className='img-thumbnail img-responsive card-img'
          alt='img'
        />
        <a href={'#12091969266'}>
          <div className='card-info'>
            <div className='card-info-table'>
              <p className='card-info-cell'>Humpback Whale</p>
            </div>
            <div className='card-info-table'>
              <p className='card-info-cell'>Karl Jensen 1962</p>
            </div>
          </div>
        </a>
        <Lightbox photo={photo} />
      </div>
    )).toEqual(true)
  })
})
