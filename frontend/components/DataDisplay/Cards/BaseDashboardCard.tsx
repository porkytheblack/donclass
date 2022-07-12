import React, { ReactNode } from 'react'
import { Text } from '../../../pages/_app'

function BaseDashboardCard({stat, info, icon, color}:{stat: string | number, info: string, icon: ReactNode, color: string}) {
  return (
    <div className="flex flex-col bg-white mr-1 w-[230px] h-[100px] p-[20px_10px]  items-start justify-start rounded-md shadow-md hover:shadow-lg  cursor-pointer ">
        <div className="flex flex-row w-full items-center justify-between">
            <Text className="text-xl  font-bold text-left text-black mb-2" >
                {stat}
            </Text>
            {icon}
        </div>
        <Text style={{color}} className='text-sm font-semibold' >
            {info}
        </Text>
    </div>
  )
}

export default BaseDashboardCard