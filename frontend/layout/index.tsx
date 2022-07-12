import React, { ReactNode } from 'react'
import Dashboard from './dashboard'
import Main from './main'

function Layout({children}:{children: ReactNode | ReactNode[]}) {
  return (
    false ? (
        <Main>
            {children}
        </Main>
    ) : (
        <Dashboard>
            {children}
        </Dashboard>
    )
  )
}

export default Layout