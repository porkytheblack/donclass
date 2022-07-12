import { Menu } from 'antd'
import { isArray } from 'lodash'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserAvatar from '../../components/images/UserAvatar'
import { choose_active_layer, course_regexp, dashboard_regexp, dashboard_routes, in_quiz_regexp, in_tutorial_regexp, quiz_regexp, tutorial_regexp } from '../../globals'

function SideMenu() {
    const [active_routes, set_active_routes] = useState(dashboard_routes.filter(({user})=>user == "instructor")[0].routes) 
    const [active_layer, set_active_layer] = useState<"dashboard"| "course" | "tutorial" | "quiz">("dashboard")
    const [tick, set_tick] = useState<number>(0)
    const {push, pathname, back}  = useRouter()

    
     
    const change_route = (val: string) =>{
        if(["dashboard", "courses", "earnings", "account", "inbox"].includes(val) && (pathname.split("/").length == 2 || pathname.split("/").length == 3)  ){
            if(val == "dashboard") return push("/dashboard").then(()=>{
                set_active_routes(dashboard_routes.filter(({user})=> user == "instructor")[0].routes)
            })
            return push(`/dashboard/${val}`).then(()=>{set_tick(tick+1)})
        }
        if(["tutorials", "quizzes", "forum", "settings", "earnings", "stats", "back"].includes(val)){
            if(val == "back") return push(tutorial_regexp.test(pathname) ? `/dashboard/courses/id/tutorials` : quiz_regexp.test(pathname) ? `/dashboard/courses/id/quizzes` : course_regexp.test(pathname) ? `/dashboard/courses` : "/dashboard").then(()=>{

                set_tick(tick+1)
            })
            if(val == "stats") return push(`/dashboard/courses/id`).then(()=>{set_tick(tick+1)})
            return push(`/dashboard/courses/id/${val}`).then(()=>{set_tick(tick+1)})
        }

        if(in_tutorial_regexp.test(val)) return push(`/dashboard/courses/id/tutorials/id/${val}`)
        if(in_quiz_regexp.test(val)) return push(`/dashboard/courses/id/quizzes/id/${val}`)
        if(val == "details" && active_layer == "quiz") return push(`/dashboard/courses/id/quizzes/id/`)
        if(val == "details" && active_layer == "tutorial") return push(`/dashboard/courses/id/tutorials/id/`)
    } 

    useEffect(()=>{
        set_active_layer(choose_active_layer(pathname) as any)
    }, [,pathname, tick])
 
    useEffect(()=>{
        console.log(active_layer)
        if(active_layer == "dashboard" ){
            set_active_routes(dashboard_routes.filter(({user})=> user == "instructor")[0].routes)
            
        }else if(active_layer == "course"){
            set_active_routes(dashboard_routes.filter(({user})=> user == "instructor")[0].routes[1].routes as any)
            
        }else if(active_layer == "tutorial" ){   
            console.log("In tutorial")     
            set_active_routes((dashboard_routes.filter(({user})=> user == "instructor")[0]?.routes[1] as any)?.routes[2].routes as any)
            
        }else if(active_layer == "quiz" ){    
            set_active_routes((dashboard_routes.filter(({user})=> user == "instructor")[0]?.routes[1] as any)?.routes[3].routes as any)
           
        }
    }, [active_layer])
   return (
    <MenuContainer className="max-w-[200px] w-[150px] h-screen "  theme="dark" mode='vertical'  >
        <Menu.Item disabled className="!p-[20px_10px] !h-[100px] !flex !flex-col !items-center !justify-center" >
            <UserAvatar/>
        </Menu.Item>
        {
            active_routes.map(({name, icon: Icon})=>(
                <Menu.Item  onClick={()=>{
                        change_route(name)?.then(()=>{
                    })
                }} className="capitalize !flex !flex-row !items-center  " key={name} icon={<Icon/>}  >
                    {name}
                </Menu.Item>
            ))
        }
    </MenuContainer>
  )
}

export default SideMenu

const MenuContainer = styled(Menu)`

`