import Head from "next/head"
import { motion as m } from "framer-motion"
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { contain, item } from "@/components/animate"

export default function signin() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter()

    const handleLinkButton = () => {
        setClicked(true)
        setTimeout(() => {
            router.push('/signup');
          },500);
    }

    const left = 'translate-x-full ease-out duration-500'
    const right = '-translate-x-full ease-out duration-500 '

  return (
    <div>
        <Head>
            <title>Sign In</title>
        </Head>
        <div className=' text-3xl font-medium mx-auto absolute w-full h-[80vh] flex'>
            <m.div  
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
             className={ clicked ? `w-full h-full ${left}` : 'w-full h-full relative'}>
              <Image 
                src="/img/sigin.jpg"
                priority
                fill
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                className='object-cover object-right'/>
              </m.div>
            <div className={`flex flex-wrap items-center w-full h-full bg-[#464646] p-3 ${clicked ? right : ''}`}>
                <div>
                  <m.div variants={contain} initial="hidden" animate="show" className=" w-full">
                    <div className="overflow-hidden text-slate-200">
                      <m.div variants={item}>
                        <h1 className="">Sign In</h1>
                      </m.div>
                    </div>
                    <div className="overflow-hidden text-slate-200 mt-5">
                      <m.div variants={item}>
                        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-[#BDBDBD] text-base focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder:text-[#464646]" placeholder="Username, email or phone number"></input>
                      </m.div>
                    </div>
                    <div className="overflow-hidden text-slate-200 mt-3">
                      <m.div variants={item}>
                        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-[#BDBDBD] text-base focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder:text-[#464646]" placeholder="Password"></input>
                      </m.div>
                    </div>
                    {/* remember */}
                    <div className="flex items-center justify-between text-sm mt-2">
                      <div className="flex  items-center space-x-2">
                        <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-[#464646] border-[#464646] rounded focus:ring-blue-500 "></input>
                        <h4>remember me</h4>
                      </div>
                      <div className="italic underline text-blue-600">
                        <h4>need help ?</h4>
                      </div>
                    </div>
                    {/* button submit */}
                    <div className="mt-3">
                      <button className="px-3 py-1 bg-[#01AED3] w-full text-xl text-slate-200">Sign In</button>
                    </div>
                    {/* footer */}
                    <div className="text-sm pr-6 mt-8 text-gray-200 font-normal">
                      <p className="">New here ? <span className="italic text-sm" onClick={handleLinkButton}>Sign up now</span></p>
                      <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600">Learn more.</span></p>
                    </div>
                  </m.div>
                </div>
            </div>
        </div>
    </div>
  )
}
