import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

