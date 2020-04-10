import React from 'react'

import PieChart from '../PieChart'
import useFetch from "../../service/useFetch"

const RowPieChart = props => {
  const {
    url,
    options,
    refs,
    title
  } = props

  const { data } = useFetch(url)

  return <div className="row">
    <strong>{title}</strong>
    {data &&
      <PieChart refs={refs} data={data} options={options} />
    }
  </div>
}

export default RowPieChart