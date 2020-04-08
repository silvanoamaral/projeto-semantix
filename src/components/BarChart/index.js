import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = props => {
  const {
    data,
    refs,
    options
  } = props

  return <div className="chart__bar">
    <Bar ref={ refs } data={ data } options={options} />
  </div> 
}

export default BarChart
