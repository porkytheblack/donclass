import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    LinearScaleOptions,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Point,
    PointElement
} from "chart.js"
import { Line } from 'react-chartjs-2'
import { random_color } from '../../../helpers'
import { Text } from '../../../pages/_app'
import { Divider } from 'antd'

ChartJs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
)

function LineChart() {
  return (
    <div className="flex flex-col items-start bg-white rounded-sm p-5 shadow-sm justify-start h-[350px] w-[40%] ">
        <Text className='text-lg font-semibold' >
            Courses Growth
        </Text>
        <Divider/>
        <Line options={{
            responsive: true,
            plugins: {
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }} data={{
            labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul"],
            datasets: [
                {
                    label: "Growth of Course 1",
                    data: [20, 30, 10, 50, 20, 60],
                    backgroundColor: random_color()
                },
                {
                    label: "Growth of Course 2",
                    data: [0, 40, 100, 150, 23, 6],
                    backgroundColor: random_color()
                }
            ]
        }} />
    </div>
  )
}

export default LineChart