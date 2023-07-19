import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'


const Slide = ({ data }) => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{ delay: 8000, disableOnInteraction: 'false' }}
      // modules={[Autoplay]}
      loop='true'
    >
      {data.map((slide) => (
        <SwiperSlide
          key={slide.id}
        >
          <div
            className='h-[400px] w-full object-fill bg-cover bg-center clip-path'
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className='absolute top-0 w-full h-full flex justify-center items-center mt-6'>
              <div className='font-semibold text-lg text-white shad text-center sm:text-xl md:text-2xl lg:text-3xl'>
                <p className='z-10'>{slide.title}</p>
                <span className='z-10'>{slide.text}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Slide