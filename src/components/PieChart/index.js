import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = props => {
  const {
    data,
    refs,
    options
  } = props

  const labels = data.map(item => item.label)
  const values = data.map(item => item.value)

  const dataPercentage = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          '#DBECF8',
          '#32B88B',
          '#3691c3'
        ]
      }
    ]
  }

  return (<div className="chart__pie">
    <Pie
      ref={refs}
      data={dataPercentage}
      options={options}
      height={250}
    />
  </div>)
}

export default PieChart
