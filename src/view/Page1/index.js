import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

import PieChart from '../../components/PieChart'

const Page1 = () => {
  const [data, setData] = useState(false)

  const chart = useRef()
  const chartLine = useRef()

  useEffect(() => {
    const result = axios('api/result', { params: { path: 'anual-result' } })

    result.then(res => {
      const labels = res.data.map(item => item.label)
      const values = res.data.map(item => item.value)

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: values
          }
        ],
        options: {
          responsive: true,
        }
      }
      setData(data)
    })
  },[])

  return <div className="">
    <h2>Pagina 1</h2>
    {data &&
      <>
        <div className="bar__chart">
          <Bar ref={chart} data={data} />
        </div>
       
        <PieChart data={data} refs={chartLine} />
      </>
    }
    
  </div>
}

export default Page1