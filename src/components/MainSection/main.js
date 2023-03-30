import Image from 'next/image'
import {Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export default function MainSection() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // autoplay={{ 
        //   delay: 1500
        //  }}
        loop={true}
        centeredSlides={true}
        className="w-full h-[40vh] text-center text-white mb-3" >

        <SwiperSlide>
          <div className='relative w-full h-full' style={{ boxShadow: 'inset 0px -70px 28px 136px #181818'}}>
              <Image 
                src="/img/mao.webp"
                priority
                fill
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                className='object-cover bg-sliders opacity-80'
                alt="mao"/>
               <div className='max-w-1/2 absolute h-auto bottom-0 p-3 text-start text-white'>
                 <h1 className='text-3xl font-bold shadow-xl'>Vinland Saga Season 2</h1>
                 <p className='italic shadow-xl'>Action, Drama, Adventure</p>
               </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='grid grid-cols-3 sm:grid-cols-4 w-full gap-2'>
        <div className="relative w-full sm:h-[45vh] h-[35vh] z-50 sliders">
        <Image
            src="/img/mao.webp"
            priority
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            className='object-cover opacity-80'
            alt="mao"
          />
            <div className='max-w-1/2 absolute h-auto bottom-0 p-1 text-start text-white'>
              <h1 className='text-xl font-bold shadow-xl'>Vinland Saga Season 2</h1>
              <p className='italic shadow-xl text-sm'>Action, Drama, Adventure</p>
            </div>
        </div>
      </div>
  </div>
  )
} 

