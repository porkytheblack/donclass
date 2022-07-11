import { Button, Form, Input } from 'antd'
import React from 'react'
import Illustration from '../../components/images/illustrations'

function Auth() {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-white">
        <Form className='w-[400px] p-5 hover:shadow-md rounded-md ' layout='vertical' name="auth"  >
            <Form.Item noStyle className="!w-full !flex-row !flex !items-center !justify-center" >
                <Illustration cus={{ 
                    width: 200,
                    height:150
                }} img="login_auth" />
            </Form.Item>
            
            <Form.Item required label="Username" >
                <Input type={"text"} placeholder='Username' />
            </Form.Item>
            <Form.Item required label="Password" >
                <Input placeholder='password' type={"password"} />
            </Form.Item>
            <Form.Item>
                <Button className='w-full hover:shadow-md items-center justify-center ' >
                    Login
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Auth