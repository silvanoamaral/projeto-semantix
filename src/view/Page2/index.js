import React, { useRef } from 'react'

import RowLineChart from '../../components/RowLineChart'

const Page2 = () => {
  const chartLine = useRef()

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      align: 'end',
      labels: {
        boxWidth: 5,
        usePointStyle: true,
        padding: 25
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            borderDash: [3, 3]
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            borderDash: [3, 3]
          }
        }
      ]
    }
  }

  return <div className="content">
    <h2>Pagina 2</h2>
    <div className="chart chart__line">
      <RowLineChart
        url={'api/result?path=time-data'}
        options={options}
        refs={chartLine}
        title={'Line Chart 2 Data'}
      />
    </div>
  </div>
}

export default Page2