import React from 'react'
import { Pie } from 'react-chartjs-2'

function chart() {
    const first=["prathik","vinet","gdgdg","dsadhgash","jdjsdhj"]
    const data1 = {
  
      labels: first,
      datasets: [
          {
              label: "Difference in time",
              data: [3,6,7,10,12],
              backgroundColor: ["#FF5555", "#FF852D", "#A8C256", "#8C9CE3", "#8E6352"]
    
          },
    
    
      ]
    
    
    }
    const options1a = {
  
      segmentShowStroke: false,
      maintainAspectRatio: false,
  
      title: {
          display: true,
          text: 'Bottom 5 Users',
          textAlign: "left",
          fontSize: 20,
          fontColor: "#D4DCE1",
  
      },
      legend: {
          position: 'bottom',
          display: true,
          labels: {
              fontColor: '#A3AAAE',
              fontSize: 15,
              fontStyle: "bold",
              fontFamily: "Mulish",
          },
  
      }
  
  }
  return (
    <div>
        <Pie data={data1} options={options1a} />
    </div>
  )
}

export default chart