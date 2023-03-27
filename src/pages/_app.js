import '@/styles/globals.css'
import LeftIndex from '@/components/Sidebar/Left'
import RightIndex from '@/components/Sidebar/Right'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-background '>
       <div className='max-w-7xl mx-auto min-h-screen flex gap-3'>
            <LeftIndex />
            <div className='w-[80%] grid grid-cols-10 mx-auto gap-3 '>
            <Component {...pageProps} />
            <RightIndex />
          </div>
       </div>
    </div>
  )
}
