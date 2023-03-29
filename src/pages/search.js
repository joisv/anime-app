import Head from 'next/head'
import React from 'react'
import { motion as m } from 'framer-motion'

export default function search() {
  return (
    <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeIn" }}
   >
    <Head>
    <title>search</title>
    </Head>
      <div className='h-screen relative'>
        <div className='text-white text-3xl font-medium mx-auto absolute w-full top-32'>
          <div className='overflow-hidden'>
            <m.h1 className='ml-5' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }}>What you <br /> looking for ?</m.h1>
          </div>
           <div className='mt-10'>
                <form>  
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 pl-5 text-sm text-gray-300 bg-transparent focus:outline-none border-2 border-b-white border-t-0 border-x-0 placeholder:italic placeholder:opacity-50" placeholder="naruto shippuden" autoComplete='off'></input>
                    </div>
                </form>
           </div>
        </div>
      </div>
    </m.div>
  )
}
