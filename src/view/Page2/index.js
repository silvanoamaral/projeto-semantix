import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import LineChart from '../../components/LineChart'

const Page2 = () => {
  const [data, setData] = useState(false)

  const chartLine = useRef()

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      align: 'end',
      labels: {
        boxWidth: 5,
        usePointStyle: true,
        strokeStyle: Color,
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

  useEffect(() => {
    const resultAnual = axios('api/result', { params: { path: 'time-data' } })

    resultAnual.then(res => {
      const dataToday = res.data.today.map(item => item.value)
      const dataYesterday = res.data.yesterday.map(item => item.value)
      const label = res.data.today.map(item => item.label)
      
      const data = {
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
      setData(data)
    })
  },[])

  return <div className="content">
  <h2>Pagina 2</h2>
  <div className="chart chart__line">
    <div className="row">
      <strong>Line Chart 2 Data</strong>
      {data &&
        <LineChart refs={chartLine} data={data} options={options} />
      }
    </div>
  </div>
</div>
}

export default Page2