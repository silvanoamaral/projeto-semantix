import React from 'react'

import LineChart from '../LineChart'
import useFetch from "../../service/useFetch"

const RowLineChart = props => {
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
      <LineChart refs={refs} data={data} options={options} />
    }
  </div>
}

export default RowLineChart