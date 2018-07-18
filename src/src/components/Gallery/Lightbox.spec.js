import React from 'react'
import { shallow } from 'enzyme'

import Lightbox from './Lightbox'
import Badge from '../Badge'
import DateP from './DateP'
import Tags from './Tags'
import './Lightbox.css'

describe('(Component) Lightbox', () => {
  it('should render lightbox without missing photo data', () => {
    const photo = {
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
    }

    const wrapper = shallow(
      <Lightbox photo={photo} />
    )

    expect(wrapper.equals(
      <div className='lightbox' id='12091969266'>
        <div className='lightbox-info'>
          <h3 className='lightbox-info-title'>Humpback Whale</h3>
          <div className='lightbox-info-owner'>
            <div className='lightbox-info-cell'>by</div>
            <div className='lightbox-info-mid-cell'>Karl Jensen</div>
            <div className='lightbox-info-cell'>
              <img
                src={'http://farm3.staticflickr.com/2821/buddyicons/92206130@N02.jpg'} 
                className='lightbox-info-avatar'
                alt='avatar' 
              />
            </div>
          </div>
          <hr />
          <Badge className='badge progress-bar-success'>11382 views</Badge>
          <Badge className='badge progress-bar-warning'>5 comments</Badge>
          <DateP label='Taken on' date={'2013-12-06 14:22:48'} format='MMMM D, YYYY, HH:mm' />
          <DateP label='Posted on' date={'1390423823'} format='MMMM D, YYYY, HH:mm' />
          <p>Wonderful description goes here</p>
          <Tags items={photo.tags.tag} />
        </div>
        <div className='card-lightbox-img cell'>
          <img
            src={'https://farm4.staticflickr.com/4444/12091969266_007.jpg'}
            alt='img'
          />
          <a className='card-lightbox-close' href='#'> </a>
        </div>
      </div>
    )).toEqual(true)
  })

  it('should render lightbox with some missing data, ', () => {
    const photo = {
      id: '12091969266',
      farm: 4,
      server: '4444',
      secret: '007',
      title: {_content: 'Humpback Whale'},
      description: {_content: ''},
      comments: {_content: undefined},
      views: '11382',
      owner: {
        iconfarm: 3,
        iconserver: '2821',
        nsid: '92206130@N02',
        username: 'Karl Jensen 1962'
      },
      dates: {
        taken: '2013-12-06 14:22:48',
        posted: '1390423823'
      },
      tags: {
        tag: []
      }
    }

    const wrapper = shallow(
      <Lightbox photo={photo} />
    )

    expect(wrapper.equals(
      <div className='lightbox' id='12091969266'>
        <div className='lightbox-info'>
          <h3 className='lightbox-info-title'>Humpback Whale</h3>
          <div className='lightbox-info-owner'>
            <div className='lightbox-info-cell'>by</div>
            <div className='lightbox-info-mid-cell'>Karl Jensen 1962</div>
            <div className='lightbox-info-cell'>
              <img
                src={'http://farm3.staticflickr.com/2821/buddyicons/92206130@N02.jpg'} 
                className='lightbox-info-avatar'
                alt='avatar' 
              />
            </div>
          </div>
          <hr />
          <Badge className='badge progress-bar-success'>11382 views</Badge>
          <Badge className='badge progress-bar-warning'>0 comments</Badge>
          <DateP label='Taken on' date={'2013-12-06 14:22:48'} format='MMMM D, YYYY, HH:mm' />
          <DateP label='Posted on' date={'1390423823'} format='MMMM D, YYYY, HH:mm' />
          <p>No description</p>
          <Tags items={[]} />
        </div>
        <div className='card-lightbox-img cell'>
          <img
            src={'https://farm4.staticflickr.com/4444/12091969266_007.jpg'}
            alt='img'
          />
          <a className='card-lightbox-close' href='#'> </a>
        </div>
      </div>
    )).toEqual(true)
  })
})
