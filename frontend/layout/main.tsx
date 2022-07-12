import React, { ReactNode } from 'react'

function Main({children}:{children: ReactNode | ReactNode[]}) {
  return (
    <div className="flex flex-col items-start justify-start w-screen h-full min-h-screen">
        {
            children
        }
    </div>
  )
}

export default Main