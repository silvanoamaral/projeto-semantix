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
    })
  },[])

  return <div className="">
    <h2>Pagina 1</h2>
    {data &&
      <>
        <BarChart refs={chart} data={data} options={options} />
        {dataPercentage &&
          <PieChart refs={chartLine} data={dataPercentage}/>
        }
      </>
    }
    
  </div>
}

export default Page1