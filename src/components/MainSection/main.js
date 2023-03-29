import Image from 'next/image'
import {Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export default function MainSection(props) {
const isLoading = props.isLoading
  return (
    <div className=''>
        {!isLoading ? (
        <>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ 
              delay: 1500
             }}
            loop={true}
            centeredSlides={true}
            className="w-full h-[40vh] text-center text-white mb-3" >

            <SwiperSlide>
              <div className='relative w-full h-full'>
                  <Image 
                    src="/img/mao.webp"
                    priority
                    fill
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                    className='object-cover'
                    alt="mao"
                  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative w-full h-full'>
                  <Image 
                    src="/img/mao.webp"
                    priority
                    fill
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                    className='object-cover object-top'
                    alt="mao"
                  />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='grid grid-cols-3 sm:grid-cols-4 w-full gap-2'>
            <div className="relative w-full h-[55vh] object-cover">
            <Image
                src="/img/mao.webp"
                priority
                fill
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                className='object-cover'
                alt="mao"
              />
            </div>
          </div>
        </>
        ) : ( <h1 className='text-slate-200'>Loading</h1> 
          )}
    </div>
  )
}
