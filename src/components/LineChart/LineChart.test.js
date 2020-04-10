import React from 'react'
import { mount } from 'enzyme'

import LineChart from './'

describe('<LineChart /> component', () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  const data = {}

  const wrapper = mount(<LineChart ref={''} options={options} data={data} />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})