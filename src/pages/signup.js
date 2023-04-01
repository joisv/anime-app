import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

export default function signup() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter()

    const handleLinkButton = () => {
        setClicked(true)
        setTimeout(() => {
            router.push('/signin');
          },500);
    }

    const left = 'translate-x-full ease-out duration-500'
    const right = '-translate-x-full ease-out duration-500'
  return (
    <div>
        <Head>
            <title>Sign Up</title>
        </Head>
        <div className=' text-3xl font-medium mx-auto absolute w-full h-[80vh] flex'>
            <div onClick={handleLinkButton} className={`cursor-pointer w-full h-full bg-[#464646] flex flex-wrap items-center justify-center ${clicked ? left : ''}`}>
                
                    <h2 onClick={handleLinkButton}>signin</h2>
              
            </div>
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className={ clicked ? `w-full h-full ${right}` : 'w-full h-full relative'}>
              <Image 
              src="/img/signup.jpg"
              priority
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              className='object-cover'/>
            </m.div>
        </div>
    </div>
  )
}
