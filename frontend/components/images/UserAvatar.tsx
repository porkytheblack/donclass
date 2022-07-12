import React from 'react'
import {isString, isUndefined} from "lodash"
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'

function UserAvatar({user_name, avatar}:{user_name?:string, avatar?: string}) {
  return (
    isUndefined(avatar) || avatar.length == 0 ? <Avatar  className='uppercase !h-10 !w-10 bg-yellow-500 !flex !flex-col items-center justify-center ' >
        {
            isString(user_name) ? user_name[0] : <UserOutlined/>
        }
    </Avatar> : <div className="flex flex-row  w-10 h-10 items-center justify-center rounded-full overflow-hidden">
        <Image src={avatar} referrerPolicy="no-referrer" width="40px" height="40px" />
    </div>
  )
}

export default UserAvatar