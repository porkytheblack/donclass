import { Button, Divider } from 'antd'
import React from 'react'
import Illustration from '../../components/images/illustrations'
import { Text } from '../_app'

function usage() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center pale-white-bg ">
        <div className="flex flex-row items-center bg-white justify-between rounded-md shadow-lg w-4/5 h-4/5 ">
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <Illustration img="role" />
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-full ">
                <Text className='text-lg mb-4 font-semibold text-center ' >
                    How do you plan on using the platform?
                </Text>
                <Button className='w-4/5 hover:shadow-md items-center justify-center !flex ' >
                    Instructor
                </Button>
                <div className="flex w-4/5 ">
                    <Divider className="!w-4/5" >
                    <Text className='text-lg mb-4 font-semibold text-center ' >
                        or
                    </Text>
                    </Divider>
                </div>
                
                <Button className='w-4/5 hover:shadow-md items-center justify-center !flex ' >
                    Learner
                </Button>
            </div>
        </div>
    </div>
  )
}

export default usage