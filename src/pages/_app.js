import '@/styles/globals.css'
import Navbar from '@/components/Navigation/navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      <div className='max-w-screen-sm  mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
