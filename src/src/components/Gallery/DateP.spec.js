import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import DateP from './DateP'

describe('(Component) DateP', () => {
  it('should render paragraph with the converted date', () => {
    const wrapper = shallow(
      <DateP
        label='Taken on'
        date='2013-12-06 14:22:48'
        format='MMMM D, YYYY, HH:mm'
      />
    )

    expect(wrapper.equals(
      <p>Taken on December 6, 2013, 14:22</p>
    )).toEqual(true)
  })

  it('should render paragraph with the converted unix date', () => {
    const wrapper = shallow(
      <DateP
        label='Posted on'
        date='1390423823'
        format='MMMM D, YYYY, HH:mm'
      />
    )

    expect(wrapper.equals(
      <p>Posted on January 22, 2014, 22:50</p>
    )).toEqual(true)
  })
})
