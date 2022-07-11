import { ArrowRightOutlined, ForwardOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import Illustration from '../../components/images/illustrations'
import { Text } from '../_app'

function UserInfo() {

    const [form] = useForm()


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pale-white-bg">
        <div className="flex flex-row bg-white w-4/5 h-4/5 rounded-md shadow-lg items-center justify-between">
            <div className="flex flex-col items-center justify-center w-1/2 ">

                <Form form={form} name="UserInfo" layout="vertical" className="w-4/5" >
                    <Form.Item required label="First Name"  >
                        <Input type="text" placeholder="First Name" />
                    </Form.Item>
                    <Form.Item required label="Last Name"  >
                        <Input type="text" placeholder="Lasr Name" />
                    </Form.Item>
                    <Form.Item required label="Email"  >
                        <Input type="email" placeholder="Email" />
                    </Form.Item>
                    <Form.Item required label="Gender"  >
                        <Select  >
                            <Select.Option value="male" key="male" >
                                Male
                            </Select.Option>
                            <Select.Option value="female" key="female" >
                                Female
                            </Select.Option>
                            <Select.Option value="other" key="other" >
                                Other
                            </Select.Option>
                        </Select>
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
                    <Illustration img={"fill_form"} />
            </div>
        </div>
    </div>
  )
}

export default UserInfo