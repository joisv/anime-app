import '@/styles/globals.css'
import Navbar from '@/components/Navigation/navbar'
import { useRouter } from 'next/router';
import Nav from '@/components/Navigation/nav';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className='bg-background min-h-screen h-fit'>
      { pathname === '/search' ? '' :  <Navbar /> }
      <div className='max-w-screen-sm  mx-auto'>
      { pathname === '/'  ? <Nav />  : '' }
        <Component {...pageProps} />
      </div>
    </div>
  )
}
