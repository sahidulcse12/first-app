import CountContextProvider from '@/components/increment/CounterContextProvider'
import HeaderComponent from '@/components/increment/HeaderComponent'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <CountContextProvider>
        <HeaderComponent />
        <Component {...pageProps} />
      </CountContextProvider>
    </>
  )
}
