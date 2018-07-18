import React from 'react'
import { shallow } from 'enzyme'

import GalleryLayout from './GalleryLayout'
import LoadingP from './LoadingP'
import Navbar from './Navbar'
import Card from './Card'
import './GalleryLayout.css'

describe('(Component) GalleryLayout', () => {
  const photos = [
    {
      id: '12091969266',
      farm: 4,
      server: '4444',
      secret: '007',
      title: {_content: 'Humpback Whale'},
      description: {_content: 'Wonderful description goes here'},
      comments: {_content: '5'},
      views: '11382',
      owner: {
        iconfarm: 3,
        iconserver: '2821',
        nsid: '92206130@N02',
        realname:'Karl Jensen',
        username: 'Karl Jensen 1962'
      },
      dates: {
        taken: '2013-12-06 14:22:48',
        posted: '1390423823'
      },
      tags: {
        tag: [
          {id: '1234', _content: 'whale'},
          {id: '2345', _content: 'humpback'}
        ]
      }
    },
    {
      id: '23091969277',
      farm: 3,
      server: '333',
      secret: '111',
      title: {_content: 'Lumberjack'},
      description: {_content: ''},
      comments: {_content: '19'},
      views: '4353',
      owner: {
        iconfarm: 2,
        iconserver: '2121',
        nsid: '43306130@N32',
        username: 'Honeybadger'
      },
      dates: {
        taken: '2014-11-07 14:22:48',
        posted: '1390423823'
      },
      tags: {
        tag: [
          {id: '3456', _content: 'forest'},
          {id: '4567', _content: 'timber'}
        ]
      }
    }
  ]

  const wrapperStyle = {height: `${window.innerHeight - 120}px`}

  const wrapper = shallow(
    <GalleryLayout photos={photos} />
  )

  it('should render the component with the provided photos', () => {
    expect(wrapper.equals(
      <div>
        <Navbar />
        <div ref='infScroll' className='container-fluid text-center wrapper' style={wrapperStyle}>
          <div>
            <Card photo={photos[0]} key='12091969266' />
            <Card photo={photos[1]} key='23091969277' />
          </div>
          <LoadingP loading={false} items={2} maxItems={2} />
        </div>
      </div>
    )).toEqual(true)
  })

  it('should render the component with a single item and a true loading state', () => {
    wrapper.setState({
      items: 1,
      loading: true
    })

    expect(wrapper.equals(
      <div>
        <Navbar />
        <div ref='infScroll' className='container-fluid text-center wrapper' style={wrapperStyle}>
          <div>
            <Card photo={photos[0]} key='12091969266' />
          </div>
          <LoadingP loading={true} items={1} maxItems={2} />
        </div>
      </div>
    )).toEqual(true)
  })

  it('should render empty component', () => {
    const photos = []
    
    const wrapper = shallow(
      <GalleryLayout photos={photos} />
    )

    expect(wrapper.equals(
      <div>
        <Navbar />
        <div ref='infScroll' className='container-fluid text-center wrapper' style={wrapperStyle}>
          <div />
          <LoadingP loading={false} items={0} maxItems={0} />
        </div>
      </div>
    )).toEqual(true)
  })
})
