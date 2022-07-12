import { ArrowLeftOutlined, BarChartOutlined, BookOutlined, CopyOutlined, DashboardOutlined, DollarOutlined, MailOutlined, PaperClipOutlined, PlayCircleOutlined, QuestionOutlined, SettingOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
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
                icon: DashboardOutlined
            },
            {
                name: "courses",
                icon: BookOutlined,
                routes: [
                    {
                        name: "back",
                        icon: ArrowLeftOutlined
                    },
                    {
                        name: "stats",
                        icon: BarChartOutlined
                    },
                    {
                        name: "tutorials",
                        icon: CopyOutlined,
                        routes: [
                                    {
                                        name: "back",
                                        icon: ArrowLeftOutlined
                                    },
                                    {
                                        name: "details",
                                        icon: SettingOutlined
                                    },
                                    {
                                        name: "resources",
                                        icon: PaperClipOutlined
                                    },
                                    {
                                        name: "video",
                                        icon: PlayCircleOutlined
                                    }                            
                        ]
                    },
                    {
                        name: "quizzes",
                        icon: QuestionOutlined,
                        routes: [
                            {
                                name: "back",
                                icon: ArrowLeftOutlined
                            },
                            {
                                name: "details",
                                icon: SettingOutlined
                            },
                            {
                                name: "questions",
                                icon: QuestionOutlined
                            }
                        ]
                    },
                    {
                        name: "forum",
                        icon: TeamOutlined
                    },
                    {
                        name: "settings",
                        icon: SettingOutlined
                    },
                    {
                        name: "earnings",
                        icon: DollarOutlined
                    }
                ]
            },
            {
                name: "earnings",
                icon: DollarOutlined
            },
            {
                name: "account",
                icon: UserOutlined
            },
            {
                name: "inbox",
                icon: MailOutlined
            }
        ]
    }
]

export const tutorial_regexp = new RegExp("/dashboard/courses/.+/tutorials/.+$")
export const quiz_regexp = new RegExp("/dashboard/courses/.+/quizzes/.+$")
export const course_regexp = new RegExp("\/dashboard\/courses\/.*$")
export const dashboard_regexp = new RegExp("/dashboard/(courses|account|earnings)$")
export const base_dash_regexp = new RegExp("^\/dashboard$")

export const in_tutorial_regexp = new RegExp("^(resources|video)$")
export const in_quiz_regexp = new RegExp("^(questions)$")

export const choose_active_layer = (pathname: string): string => {
    if(base_dash_regexp.test(pathname)) return "dashboard"
    if(dashboard_regexp.test(pathname)) return "dashboard"
    if(quiz_regexp.test(pathname)) return "quiz"
    if(tutorial_regexp.test(pathname)) return "tutorial"
    if(course_regexp.test(pathname)) return "course"

    return "dashboard"
}