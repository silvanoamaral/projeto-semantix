import React from 'react'

import { Pie } from 'react-chartjs-2'

const PieChart = props => {
  const {
    data,
    refs
  } = props

  return <div className="pie__chart anual-percentage">
    <Pie ref={ refs } data={ data } />
  </div>
}

export default PieChart