import React from 'react'
import { mount } from 'enzyme'

import IconLeaf from './'

describe('<IconLeaf /> Component', () => {
  const wrapper = mount(<IconLeaf />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})