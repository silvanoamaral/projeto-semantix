import React from 'react'
import { mount } from 'enzyme'

import BarChart from './'

describe('<BarChart /> Component', () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  const data = {}

  const wrapper = mount(<BarChart ref={''} options={options} data={data} />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})