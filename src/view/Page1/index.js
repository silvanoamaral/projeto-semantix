import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'

const Page1 = () => {
  const [data, setData] = useState(false)
  const [dataPercentage, setDataPercentage] = useState(false)

  const chart = useRef()
  const chartLine = useRef()

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        }
      }],
      yAxes: [{
          gridLines: {
            display: true,
            drawBorder: false
          }
      }]
    }
  }

  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      align: 'end',
      labels: {
        boxWidth: 5,
        usePointStyle: true,
        padding: 25
      }
    }
  }

  useEffect(() => {
    const resultAnual = axios('api/result', { params: { path: 'anual-result' } })

    resultAnual.then(res => {
      const labels = res.data.map(item => item.label)
      const values = res.data.map(item => item.value)

      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: '#03A9F4',
            data: values
          }
        ]
      }
      setData(data)
    }).catch(error => {
      console.log(error)
    })

    //PieChart
    const resultPercentage = axios('api/result', { params: { path: 'anual-percentage' } })
    resultPercentage.then(res => {
      const labels = res.data.map(item => item.label)
      const values = res.data.map(item => item.value)

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
      setDataPercentage(dataPercentage)
    }).catch(error => {
      console.log(error)
    })
  },[])

  return <div className="content">
    <h2>Pagina 1</h2>
    <div className="chart">
      <div className="row">
        <strong>Bars Chart</strong>
        {data &&
          <BarChart refs={chart} data={data} options={options} />
        }
      </div>
      <div className="row">
        <strong>PIE Chart</strong>
        {dataPercentage &&
          <PieChart refs={chartLine} data={dataPercentage} options={optionsPie} />
        }
      </div>
    </div>
  </div>
}

export default Page1