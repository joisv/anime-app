import '@/styles/globals.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-background min-h-screen text-slate-200 '>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
