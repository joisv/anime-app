import Image from 'next/image'
import {Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export default function MainSection(props) {
const isLoading = props.isLoading
  return (
    <div>
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
            className="w-full h-[40vh] text-center"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
          <div className='grid grid-cols-4 w-full bg-yellow-400 gap-2'>
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
