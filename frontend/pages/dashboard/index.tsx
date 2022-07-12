import { BookOutlined, MailOutlined, PaperClipOutlined, SyncOutlined, UserAddOutlined } from '@ant-design/icons'
import React from 'react'
import BaseDashboardCard from '../../components/DataDisplay/Cards/BaseDashboardCard'
import BarChart from '../../components/DataDisplay/Charts/BarChart'
import DoughnutChart from '../../components/DataDisplay/Charts/DoughnutChart'
import Illustration from '../../components/images/illustrations'
import { random_color } from '../../helpers'
import StarRatings from "react-star-ratings"
import { Text } from '../_app'
import LineChart from '../../components/DataDisplay/Charts/LineChart'
import { Divider } from 'antd'
 
function Dashboard() {
  return (
    <div className="flex flex-col child h-full items-start  w-full  justify-between">
        <div className="flex flex-col items-center w-full h-full  justify-start">
          <div className="flex flex-row w-full items-center justify-start">
              {
                [
                  {
                    stat: 4,
                    info: "Published Courses",
                    color: "#044389",
                    icon: <BookOutlined style={{color:"#044389"}} className='text-xl' />
                  },
                  {
                    stat: 3,
                    info: "In progress",
                    color: "#FFAD05",
                    icon: <SyncOutlined style={{color: "#FFAD05"}} className='text-xl' />
                  },
                  {
                    stat: 5,
                    info: "Submissions for review",
                    color: "#F1C40F",
                    icon: <PaperClipOutlined style={{color: "#F1C40F"}} className='text-xl' />
                  },
                  {
                    stat: 2,
                    info: "Inbox",
                    color: "#182825",
                    icon: <MailOutlined style={{color: "#182825"}} className='text-xl' />
                  }
                ].map(({stat, info, icon, color}, key)=>(
                  <BaseDashboardCard stat={stat} icon={icon} color={color} info={info} key={key} />
                ))
              }
              <Illustration img='dashboard' cus={{
                width: "200px",
                height: 100
              }} />
          </div>
          <div className="flex flex-row mt-5 items-start justify-between w-full">
              <div className="flex shadow-sm  flex-col w-[50%] h-full items-start justify-start bg-white p-5 rounded-sm">
                <Text className="text-xl  text-left font-semibold" >
                  Top 5 Courses
                </Text>
                <Divider/>
                {
                  [
                    {
                      name: "Course 1",
                      rating: 3.5
                    },
                    {
                      name: "Course 2",
                      rating: 3
                    },
                    {
                      name: "Course 3",
                      rating: 3
                    },
                    {
                      name: "Course 4",
                      rating: 4
                    },
                    {
                      name: "Course 5",
                      rating: 5
                    }
                  ].map(({name, rating})=>(
                    <div className="flex flex-row w-full items-center mb-2  justify-between">
                      <Text className="text-lg text-left font-semibold" >
                        {name}
                      </Text>
                      <StarRatings starRatedColor="#08f11b"  starDimension='24px' rating={rating} numberOfStars={5} />
                  </div>
                  ))
                }
                
              </div>
              <LineChart/>
          </div>
          <div className="flex p-[20px_0px] flex-row items-center justify-between w-full">
              <BarChart labels={["Course 1", "Course 2", "Course 3", "Course 4"]} data={[10, 20, 40, 50]} colors={[random_color(), random_color(), random_color(), random_color()]}  label="Number of students" />
              <DoughnutChart label="Earnings in USD" labels={["Course 1", "Course 2", "Course 3"]} colors={[random_color(), random_color(), random_color()]} data={[300, 120, 250]}  />
          </div>  
          
        </div>  
        
    </div>
  )
}

export default Dashboard