import { Button } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Illustration from '../../../components/images/illustrations'
import { Text } from '../../_app'

function Verified() {
    const {push} = useRouter()
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen w-screen">
        <Illustration img="email_verified" />
        <Text className='text-lg font-semibold mt-5 text-center ' >
            Email verified
        </Text>
        <Button onClick={()=>push("/signin")} className="w-[400px] mt-5 hover:shadow-md" >
            Login 
        </Button>
    </div>
  )
}

export default Verified