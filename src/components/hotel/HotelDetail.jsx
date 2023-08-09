import React, { useEffect, useState } from 'react'
import datosJson from '../../../public/datos.json'
import Head from '../Head'
import Layout from '../../layouts/Layout'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { TbHotelService } from 'react-icons/tb'
import { BiMap } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const HotelDetail = () => {
  useEffect(() => {
    ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
  }, [])

  const { slug } = useParams()
  const [data] = useState(datosJson.Hoteles)
  const hoteles = data.find((hotel) => hotel.slug === slug)

  return (
    <>
      <Head
        image={hoteles?.hero}
        title={hoteles.title}
      />
      <Layout>
        <div className='mt-6'>
          <div className='flex flex-col items-center gap-4 border border-slate-400 xl:flex-row xl:max-h-96'>
            <Swiper
              className='w-full max-w-xl'
              grabCursor={true}
              effect={'fade'}
              spaceBetween={10}
              slidesPerView={1}
              loop='true'
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
            >
              {hoteles.gallery.map((image, index) => (
                <SwiperSlide key={index + 1}>
                  <img
                    src={image || ''}
                    alt={hoteles?.title}
                    className='w-full h-80 object-cover bg-center bg-cover md:h-80 lg:h-96'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='w-full flex flex-col gap-4 px-4 scrollRight'>
              <h2>{hoteles.title}</h2>
              <div className='flex flex-col gap-4'>
                <p className='flex items-center gap-3'>
                  <BiMap size={20} />
                  {hoteles.address}
                </p>
                <p className='flex items-center gap-3'>
                  <FiPhone size={20} />
                  {hoteles.phone}
                </p>
              </div>
              <div className='flex flex-col gap-4 pb-4'>
                <h2>Servicios del establecimiento</h2>
                <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 items-center justify-center'>
                  {hoteles.services.map((service, index) => (
                    <li key={index + 1} className='flex items-center gap-3'>
                      <TbHotelService size={20} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HotelDetail