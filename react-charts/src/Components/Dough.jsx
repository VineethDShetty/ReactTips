import React from 'react'
import {CChart, CChartLine} from '@coreui/react-chartjs'

function Dough() {
  return (
    <CChart
    type="doughnut"
    data={{
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10],
        },
      ],
    }}
  />
  )
}

export default Dough