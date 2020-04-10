import React from 'react'
import { mount } from 'enzyme'

import RowLineChart from './'

describe('<RowLineChart /> component', () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  const wrapper = mount(<RowLineChart
    url={'api/result?path=time-data'}
    options={options}
    refs={'chartLine'}
    title={'Line Chart 2 Data'}
  />)

  it('renders', () => {
    expect(wrapper.length).toEqual(1)
  })
})