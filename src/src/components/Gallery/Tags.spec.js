import React from 'react'
import { shallow } from 'enzyme'

import Badge from '../Badge'
import Tags from './Tags'

describe('(Component) Tags', () => {
  it('should render the component with no items', () => {
    const wrapper = shallow(
      <Tags items={[]} />
    )

    expect(wrapper.equals(
      <p>No tags</p>
    )).toEqual(true)
  })

  it('should render the provided items as badges', () => {
    const wrapper = shallow(
      <Tags items={[
        {id: '1234', _content: 'whale'},
        {id: '2345', _content: 'humpback'}
      ]} />
    )

    expect(wrapper.equals(
      <div>
        <Badge key='1234' className='badge'>whale</Badge>
        <Badge key='2345' className='badge'>humpback</Badge>
      </div>
    )).toEqual(true)
  })
})
