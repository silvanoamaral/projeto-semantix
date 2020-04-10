import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { NavLink } from 'react-router-dom'

import MenuLateral from './'

describe('<MenuLateral /> Component', () => {
  const comp = (
    <MenuLateral />
  )
  const wrapper = shallow( comp )

  it('renders', () => {
    expect(wrapper.find(NavLink).first().props().to).to.equal('/')
  })
})