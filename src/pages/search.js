import Head from 'next/head'
import React from 'react'

export default function search() {
  return (
    <>
    <Head>
    <title>search</title>
    </Head>
      <div className=' h-screen'>
        <div className='text-white text-3xl font-medium mx-auto'>
            <h1 className='ml-5'>What you <br /> looking for ?</h1>
           <div className='mt-10'>
                <form>  
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 pl-5 text-sm text-gray-300 bg-transparent focus:outline-none border-2 border-b-white border-t-0 border-x-0 placeholder:italic placeholder:opacity-50" placeholder="naruto shippuden" autoComplete='off'></input>
                    </div>
                </form>
           </div>
        </div>
      </div>
    </>
  )
}
