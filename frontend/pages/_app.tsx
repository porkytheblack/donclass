import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Typography } from 'antd'
import Layout from '../layout'
import Head from 'next/head'
import { BackwardFilled } from '@ant-design/icons'

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

export const {Text, Link} = Typography


function MyApp({ Component, pageProps }: AppProps) {

  return    <>
    <Head>
      <title>
        donclass
      </title>
      <link rel="icon" href="/icons/orbital.svg"  />
      <meta name="description" content="doncalss, making learning blazingly first 🚀" />
    </Head>
    <GlobalStyles/>
  <ThemeProvider theme={theme} >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider> 
          </>
}

export default MyApp
