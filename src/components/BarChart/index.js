import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = props => {
  const {
    data,
    refs,
    options
  } = props

  const labels = data.map(item => item.label)
  const values = data.map(item => item.value)

  const dataBar = {
    labels: labels,
    datasets: [
      {
        backgroundColor: '#03A9F4',
        data: values
      }
    ]
  }

  return (<div className="chart__bar">
    <Bar
      ref={ refs }
      data={ dataBar }
      options={options}
      height={250}
    />
  </div>)
}

export default BarChart
