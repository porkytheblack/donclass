import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import Illustration from '../../components/images/illustrations'
import { Text } from '../_app'

function AuthInfo() {
    const [form] = useForm()
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pale-white-bg">
        <div className="flex flex-row bg-white w-4/5 h-4/5 rounded-md shadow-lg items-center justify-between">
            <div className="flex flex-col items-center justify-center w-1/2 ">

                <Form form={form} name="UserInfo" layout="vertical" className="w-4/5" >
                    <Form.Item required label="Preferred Username"  >
                        <Input type="text" placeholder="Username" />
                    </Form.Item>
                    <Form.Item required label="Password"  >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item required label="Confirm password"  >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button className="!flex !flex-row !w-full items-center justify-between " >
                            <Text className="font-semibold text-lg" >
                                Next
                            </Text>
                            <ArrowRightOutlined/>
                        </Button>
                    </Form.Item>
                </Form>

            </div>

            <div className="flex flex-col w-1/2 items-center justify-center">
                    <Illustration img={"sign_up_password"} />
            </div>
        </div>
    </div>
  )
}

export default AuthInfo