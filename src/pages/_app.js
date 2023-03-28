import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    // <div className='bg-background text-slate-300'>
    //    <div className='max-w-6xl mx-auto min-h-screen flex gap-3'>
    //         <LeftIndex />
    //         <div className='w-[80%] grid grid-cols-10 mx-auto gap-3 '>
            <Component {...pageProps} />
    //         <RightIndex />
    //       </div>
    //    </div>
    // </div>
  )
}
