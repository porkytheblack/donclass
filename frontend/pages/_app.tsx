import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Typography } from 'antd'

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;

  }
`

const theme = {
  colors: {
    primary: "black"
  }
}

export const {Text} = Typography



function MyApp({ Component, pageProps }: AppProps) {

  return    <>
    <GlobalStyles/>
  <ThemeProvider theme={theme} >
            
            <Component {...pageProps} />
          </ThemeProvider> 
          </>
}

export default MyApp
