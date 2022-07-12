import { ArrowLeftOutlined, BarChartOutlined, BookOutlined, CopyOutlined, DashboardOutlined, DollarOutlined, PaperClipOutlined, PlayCircleOutlined, QuestionOutlined, SettingOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import React from "react"
export const dashboard_routes = [
    {
        user: "learner",
        routes: [

        ]
    },
    {
        user: "instructor",
        routes: [
            {
                name: "dashboard",
                icon: <DashboardOutlined/>
            },
            {
                name: "courses",
                icon: <BookOutlined/>,
                routes: [
                    {
                        name: "back",
                        icon: <ArrowLeftOutlined/>
                    },
                    {
                        name: "stats",
                        icon: <BarChartOutlined/>
                    },
                    {
                        name: "tutorials",
                        icon: <CopyOutlined/>,
                        routes: [
                            {
                                type: "quiz",
                                routes: [
                                    {
                                        name: "back",
                                        icon: <ArrowLeftOutlined/>
                                    },
                                    {
                                        name: "details",
                                        icon: <SettingOutlined/>
                                    },
                                    {
                                        name: "questions",
                                        icon: <QuestionOutlined/>
                                    }
                                ]
                            },
                            {
                                type: "videotutorial",
                                routes: [
                                    {
                                        name: "back",
                                        icon: <ArrowLeftOutlined/>
                                    },
                                    {
                                        name: "details",
                                        icon: <SettingOutlined/>
                                    },
                                    {
                                        name: "resources",
                                        icon: <PaperClipOutlined/>
                                    },
                                    {
                                        name: "video",
                                        icon: <PlayCircleOutlined/>
                                    }
                                ]
                            }
                            
                        ]
                    },
                    {
                        name: "forum",
                        icon: <TeamOutlined/>
                    },
                    {
                        name: "settings",
                        icon: <SettingOutlined/>
                    },
                    {
                        name: "earnings",
                        icon: <DollarOutlined/>
                    }
                ]
            },
            {
                name: "earnings",
                icon: <DollarOutlined/>
            },
            {
                name: "account",
                icon: <UserOutlined/>
            }
        ]
    }
]