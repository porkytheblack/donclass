import React from 'react'
import {
    Chart as ChartJs,
    Title,
    Legend,
    ArcElement,
    Tooltip
} from "chart.js"
import { Doughnut } from 'react-chartjs-2'
import { random_color } from '../../../helpers'
import { Text } from '../../../pages/_app'

ChartJs.register(
    Title,
    Legend,
    ArcElement,
    Tooltip
)

function DoughnutChart({
    label,
    labels,
    data,
    colors
}: {
    label: string,
    labels: string[],
    data: number[],
    colors: string[]
}) {
  return (
    <div className="flex flex-col p-[20px_10px] bg-white rounded-md shadow-sm items-start justify-center w-[35%] h-[450px] " >
        <Text className='mb-5 text-left font-semibold text-xl ' >
          {label}
        </Text>
        <Doughnut 
        options={{
            elements: {
            
                point: {
                    pointStyle: "circle",
                }
            },
            plugins: {
                tooltip: {
                    usePointStyle: true,
                },
            
                legend: {
                    
                    position: "bottom",
                    align: "center",
                    display: true
                }
            }
        }}
        data={{
            labels: labels,
            datasets: [
                {
                    label: label,
                    data,
                    backgroundColor: colors,
                    borderWidth: 0
                }
            ]
        }}
    />
    </div>
    
  )
}

export default DoughnutChart