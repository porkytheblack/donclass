import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import Illustration from '../../components/images/illustrations'

function SignIn() {
  return (
    <div className="flex pale-white-bg flex-col items-center justify-center w-screen h-screen">
        <div className="flex flex-row bg-white rounded-md shadow-lg w-4/5  h-4/5 ">
            <div className="flex flex-col items-center justify-center h-full w-1/2 ">
                <Illustration img={"login"} />
            </div>
            <div className="flex flex-col items-center justify-center h-full w-1/2 ">
                <Button className='w-4/5 hover:shadow-md ' >
                    Email and Password
                </Button>
                <Button  icon={<GoogleOutlined/>}  className="w-4/5 hover:shadow-md mt-3 !flex !items-center !justify-center " >
                    Google
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SignIn