import React from 'react'
import {CChart, CChartLine} from '@coreui/react-chartjs'

function BubbleChart() {
  return (
    <CChart
    type="bubble"
    data={{
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        },{
          x:20,
          y:0,
          r:5
        }
      ],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    }}
  />
  )
}

export default BubbleChart