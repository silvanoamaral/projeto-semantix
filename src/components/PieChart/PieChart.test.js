import React from 'react'
import { mount } from 'enzyme'

import PieChart from './'

describe('<PieChart /> component', () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  const data = [
    {
      "label": "legend 1",
      "value": 30
    }
  ]

  const wrapper = mount(<PieChart ref={''} options={options} data={data} />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})