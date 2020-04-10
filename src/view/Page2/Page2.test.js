import React from 'react'
import { mount } from 'enzyme'

import Page2 from './'

describe('<Page2 /> component', () => {
  const wrapper = mount(<Page2 />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})