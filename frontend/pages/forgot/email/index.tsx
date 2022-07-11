import { Button, Form, Input } from 'antd'
import React from 'react'
import Illustration from '../../../components/images/illustrations'

function Email() {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-white">
        <Form className='w-[400px] p-5 hover:shadow-md rounded-md ' layout='vertical' name="auth"  >
            <Form.Item noStyle className="!w-full !flex-row !flex !items-center !justify-center" >
                <Illustration cus={{ 
                    width: 200,
                    height:150
                }} img="mailbox" />
            </Form.Item>
            <Form.Item required label=" Email" >
                <Input type={"email"} placeholder='Email' />
            </Form.Item>
            <Form.Item>
                <Button className='w-full hover:shadow-md items-center justify-center ' >
                    Send Email
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Email