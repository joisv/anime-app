import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function signup() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter()

    const handleLinkButton = () => {
        setClicked(true)
        setTimeout(() => {
            router.push('/signin');
          },1000);
    }

    const left = 'translate-x-full ease-out duration-1000'
    const right = '-translate-x-full ease-out duration-1000'
  return (
    <div>
        <Head>
            <title>Sign Up</title>
        </Head>
        <div className='text-white text-3xl font-medium mx-auto absolute w-full h-[80vh] flex'>
            <div onClick={handleLinkButton} className={ clicked ? `w-full h-full bg-red-500 ${left}` : 'cursor-pointer w-full h-full bg-red-500'}>
                
                    <h2 onClick={handleLinkButton}>signin</h2>
              
            </div>
            <div className={ clicked ? `w-full h-full bg-lime-500 ${right}` : 'w-full h-full bg-lime-500'}></div>
        </div>
    </div>
  )
}
