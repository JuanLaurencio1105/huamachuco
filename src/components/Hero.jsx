import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Hero = () => {

  useEffect(() => {
    ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85})
  }, [])

  const slides = [
    {
      id: 1,
      imageUrl: '/images/Turismo/huamachuco/hco-pan.webp'
    },
    {
      id: 2,
      imageUrl: '/images/Turismo/huamachuco/agua-pajaritos.webp',
    },
    {
      id: 7,
      imageUrl: '/images/Turismo/huamachuco/iglesia.webp',
    },
    {
      id: 3,
      imageUrl: '/images/Turismo/markahuamachuco/mrkhco-7.webp',
    },
    {
      id: 4,
      imageUrl: '/images/Turismo/laguna/lagunaas.webp',
    },
    {
      id: 5,
      imageUrl: '/images/Turismo/markahuamachuco/mrkhco.webp',
    },
    {
      id: 6,
      imageUrl: '/images/Turismo/huamachuco/plaza-sn.webp',
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
            <div className='absolte top-0 w-screen h-screen bg-black bg-opacity-20 min-h-[550px]'></div>
          </div>

        </SwiperSlide>
      ))}
      <div className='absolute top-0 mt-20 flex justify-center items-center h-screen w-screen sm:mt-5 lg:min-h-[550px]'>
        <div className='px-8 flex flex-col items-center gap-4 md:w-[750px] text-center text-white shad'>
          <h1 className='scrollBottom'>WELCOME TO HUAMACHUCO</h1>
          <p className='w-full text-lg scrollBottom font-semibold z-10'>La muy ilustre y fiel ciudad de huamachuco,llamada tambien tierra clasica de patriotas, una tierra maravillosa donde destacan los hijos ilustres de Huamachuco: José Faustino Sanchez Carrión, Cesar Vallejo, Ciro Alegria y Abelardo Gamarra "El Tunante"</p>
        </div>
      </div>
    </Swiper>
  )
}

export default Hero