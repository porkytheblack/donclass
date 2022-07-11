import React from 'react'
import Illustration from '../../../components/images/illustrations'
import { Text } from '../../_app'

function Sent() {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen">
        <Illustration img="email_sent" />
        <Text className='text-lg font-semibold mt-5 text-center ' >
            We have sent you a reset email. <br /> Check your inbox, it might be in the spam folder.
        </Text>
    </div>
  )
}

export default Sent