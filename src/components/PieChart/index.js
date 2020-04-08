import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = props => {
  const {
    data,
    refs,
    options
  } = props

  return <div className="chart__pie">
    <Pie ref={ refs } data={ data }  options={options} />
  </div>
}

export default PieChart
