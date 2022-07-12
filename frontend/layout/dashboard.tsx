import { Breadcrumb } from 'antd'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { course_regexp, quiz_regexp, tutorial_regexp } from '../globals'
import { Link, Text } from '../pages/_app'
import SideMenu from './Navigation/SideMenu'

function Dashboard({children}:{children: ReactNode | ReactNode[]}) {
  const {pathname, push} = useRouter()
  const on_bread_crumb_click = (val: string) =>{
    if(val == "dashboard") return push("/dashboard")
    if(val == "courses" && (tutorial_regexp.test(pathname) || quiz_regexp.test(pathname)) ) return push("/dashboard/courses/id")
    if(val == "courses" ) return push("/dashboard/courses")
    if(val == "tutorials" && (tutorial_regexp.test(pathname))) return push("/dashboard/courses/id/tutorials")
    if(val == "quizzes" && (quiz_regexp.test(pathname)) )  return push("/dashboard/courses/id/quizzes")

  }
  return (

    <div className="flex flex-row items-start justify-start w-screen h-screen">
        <SideMenu/>
        <div className="flex flex-col items-start w-full  justify-start min-h-screen h-full p-[10px_20px]">
          <div className="flex flex-row items-center  justify-start h-10 ">
            <Breadcrumb>
              <Breadcrumb.Item onClick={()=>{
                on_bread_crumb_click("dashboard")
              }} >
              <Link className="font-semibold !text-blue-700 text-lg " >

                Dashboard
              </Link>
              </Breadcrumb.Item>
              {
                pathname.replace("/dashboard", "").split("/").filter((val)=>new RegExp("^(courses|account|earnings|tutorials|quizzes|forum|questions|video|resources|settings)$").test(val)).map((val)=>(
                  <Breadcrumb.Item onClick={()=>{
                    on_bread_crumb_click(val)
                  }} >
                    <Link  className="font-semibold !text-blue-700 text-lg " >
                      {val}
                    </Link>
                  </Breadcrumb.Item>
                ))
              }
            </Breadcrumb>
          </div>
          {
              children
          }
        </div>
        
    </div>
  )
}

export default Dashboard