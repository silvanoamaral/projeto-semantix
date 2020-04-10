import React from 'react'

import BarChart from '../BarChart'
import useFetch from "../../service/useFetch"

const RowBarChart = props => {
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
      <BarChart refs={refs} data={data} options={options} />
    }
  </div>
}

export default RowBarChart