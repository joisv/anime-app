import Head from "next/head"
import { motion as m } from "framer-motion"
import { useState } from "react";
import { useRouter } from "next/router";

export default function signin() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter()

    const handleLinkButton = () => {
        setClicked(true)
        setTimeout(() => {
            router.push('/signup');
          },1000);
    }

    const left = 'translate-x-full ease-out duration-1000'
    const right = '-translate-x-full ease-out duration-1000'

  return (
    <div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeIn" }}>
        <Head>
            <title>Sign Up</title>
        </Head>
        <div className='text-white text-3xl font-medium mx-auto absolute w-full h-[80vh] flex'>
            <div className={ clicked ? `w-full h-full bg-lime-500 ${left}` : 'w-full h-full bg-lime-500'}></div>
            <div onClick={handleLinkButton} className={ clicked ? `w-full h-full bg-red-500 ${right}` : 'cursor-pointer w-full h-full bg-red-500'}>
                
                    <h2 >signUp</h2>
              
            </div>
        </div>
    </div>
  )
}
