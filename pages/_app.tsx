import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import { Header } from '@/components/Header'
import '@/styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <main className="container max-w-2xl mt-10 mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
