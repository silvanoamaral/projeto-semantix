import React, { useRef } from 'react'

import RowPieChart from '../../components/RowPieChart'
import RowBarChart from '../../components/RowBarChart'

const Page1 = () => {
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

  return <div className="content">
    <h2>Pagina 1</h2>
    <div className="chart">
      <RowBarChart
        url={'api/result?path=anual-result'}
        options={options}
        refs={chart}
        title={'Bars Chart'}
      />
      <RowPieChart
        url={'api/result?path=anual-percentage'}
        options={optionsPie}
        refs={chartLine}
        title={'PIE Chart'}
      />
    </div>
  </div>
}

export default Page1