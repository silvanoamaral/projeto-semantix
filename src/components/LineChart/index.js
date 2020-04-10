import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = props => {
  const {
    data,
    refs,
    options
  } = props

  const dataToday = data.today.map(item => item.value)
  const dataYesterday = data.yesterday.map(item => item.value)
  const label = data.today.map(item => item.label)

  const dataLine = {
    labels: label,
    datasets: [
      {
        label: "Today",
        fill: false,
        borderCapStyle: 'butt',
        pointBackgroundColor: '#fff',
        lineTension: 0.1,
        borderColor: '#303F9F',
        borderWidth: 2,
        borderDash: [0, 0],
        data: dataToday
      },
      {
        label: "Yesterday",
        fill: false,
        pointBackgroundColor: '#fff',
        lineTension: 0.1,
        borderColor: '#BF3FFF',
        borderWidth: 2,
        data: dataYesterday
      }
    ]
  }

  return (<div className="chart__line">
    <Line
      ref={refs}
      data={dataLine}
      options={options}
      height={250}
    />
  </div>)
}

export default LineChart
