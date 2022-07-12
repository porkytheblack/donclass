import React from 'react'
import {
    Chart as ChartJs,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    Title
} from "chart.js"
import { Bar } from 'react-chartjs-2'
import { random_color } from '../../../helpers'
import { Text } from '../../../pages/_app'

ChartJs.register(
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    Legend,
    Title
)

function BarChart({labels, label, data, colors}:{labels: string[], label: string, data: number[], colors: string[]}) {
  return (
    <div className="flex flex-col bg-white rounded shadow-sm p-[20px_10px] items-start justify-start w-[60%] h-[450px] ">
        <Text className='mb-5 text-left font-semibold text-xl ' >
          {label}
        </Text>
        <Bar options={{
                  scales: {
                    x: {
                      grid: {
                        display:false,
                      
                      },
                    },
                    y: {
                      grid: {
                        display: true
                      },
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
              }} 
              
              data={{
                labels: labels,
                datasets: [
                  {
                    label: label,
                    data,
                    backgroundColor: colors
                  }
                ]
              }}
              
              />

    </div>
    
  )
}

export default BarChart