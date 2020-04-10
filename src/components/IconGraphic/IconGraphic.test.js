import React from 'react'
import { mount } from 'enzyme'

import IconGraphic from './'

describe('<IconGraphic /> Component', () => {
  const wrapper = mount(<IconGraphic />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})