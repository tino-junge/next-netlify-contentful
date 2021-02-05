import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

function Application({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default Application
