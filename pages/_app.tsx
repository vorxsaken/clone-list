import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
const ubuntu =  localFont({ src: '../assets/font/Ubuntu-Regular.ttf'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <Component {...pageProps} />
    </div>
  )
}
