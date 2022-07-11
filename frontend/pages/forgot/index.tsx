import { Button, Form, Input } from 'antd'
import React from 'react'
import Illustration from '../../components/images/illustrations'

function Forgot() {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-white">
        <Form className='w-[400px] p-5 hover:shadow-md rounded-md ' layout='vertical' name="auth"  >
            <Form.Item noStyle className="!w-full !flex-row !flex !items-center !justify-center" >
                <Illustration cus={{ 
                    width: 200,
                    height:150
                }} img="forgot" />
            </Form.Item>
            <Form.Item required label="New Password" >
                <Input type={"password"} placeholder='Password' />
            </Form.Item>
            <Form.Item required label="Confirm New Password" >
                <Input type={"password"} placeholder='Confirm password' />
            </Form.Item>
            <Form.Item>
                <Button className='w-full hover:shadow-md items-center justify-center ' >
                    Reset
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Forgot