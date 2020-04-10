import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = props => {
  const {
    data,
    refs,
    options
  } = props

  return (<div className="chart__line">
    <Line
      ref={refs}
      data={data}
      options={options}
      height={250}
    />
  </div>)
}

export default LineChart
