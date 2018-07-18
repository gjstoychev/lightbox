import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import GalleryContainer from './GalleryContainer'
import Gallery from '../components/Gallery'

describe('(Redux Container) GalleryContainer', () => {
  let container, component

  beforeEach(() => {
    const store = configureMockStore()({
      gallery: {
        photos:[
          {
            id: '12091969266',
            title: {_content: 'Humpback Whale'},
            description: {_content: 'Almost empty'},
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
                posted: '1390423823',
                taken: '2013-12-06 14:22:48'
              },
            tags: {
              tag: [
                {id: '1234', _content: 'whale'},
                {id: '2345', _content: 'humpback'}
              ]
            }
          }
        ]
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    )

    container = wrapper.find(GalleryContainer)
    component = container.find(Gallery)
  })

  it('should render the component with the provided photos', () => {
    const got = component.prop('photos')

    const want = [
      {
        id: '12091969266',
        title: {_content: 'Humpback Whale'},
        description: {_content: 'Almost empty'},
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
          posted: '1390423823',
          taken: '2013-12-06 14:22:48'
        },
        tags: {
          tag: [
            {id: '1234', _content: 'whale'},
            {id: '2345', _content: 'humpback'}
          ]
        }
      }
    ]
    
    expect(got).toEqual(want)
  })
})