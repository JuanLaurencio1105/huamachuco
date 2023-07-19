import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Hero = () => {

  const slides = [
    {
      id: 1,
      imageUrl: '/public/images/Turismo/huamachuco/hco-pan.jpeg'
    },
    {
      id: 2,
      imageUrl: '/public/images/Turismo/huamachuco/agua-pajaritos.jpeg',
    },
    {
      id: 3,
      imageUrl: '/public/images/Turismo/markahuamachuco/mrkhco-7.png',
    },
    {
      id: 4,
      imageUrl: '/public/images/Turismo/laguna/lagunaas.jpg',
    },
    {
      id: 5,
      imageUrl: '/public/images/Turismo/markahuamachuco/mrkhco.jpg',
    },
    {
      id: 6,
      imageUrl: '/public/images/Turismo/huamachuco/plaza-sn.jpg',
    },
  ]

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade]}
      loop='true'
      effect={'fade'}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} >
          <div
            className='h-screen w-screen bg-cover bg-center flex items-center justify-center min-h-[550px] clip-path'
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className='absolte top-0 w-screen h-screen bg-black bg-opacity-20'>

            </div>

          </div>

        </SwiperSlide>
      ))}
      <div className='absolute top-0 mt-20 flex justify-center items-center h-screen w-screen sm:mt-5 lg:min-h-[550px]'>
        <div className='px-8 flex flex-col items-center gap-4 md:w-[750px] text-center text-white shad'>
          <h1>WELCOME TO HUAMACHUCO</h1>
          <p className='w-full text-lg font-semibold z-10'>La muy ilustre y fiel ciudad de huamachuco,llamada tambien tierra clasica de patriotas, una tierra maravillosa donde destacan los hijos ilustres de Huamachuco: José Faustino Sanchez Carrión, Cesar Vallejo, Ciro Alegria y Abelardo Gamarra "El Tunante"</p>
        </div>
      </div>
    </Swiper>
  )
}

export default Hero