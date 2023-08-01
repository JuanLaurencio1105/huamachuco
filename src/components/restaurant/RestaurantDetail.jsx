import Head from '../Head'
import datosJson from '../../../public/datos.json'
import Layout from '../../layouts/Layout'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiMap } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { BsCheck2, BsClockHistory } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cards'

const RestaurantDetail = () => {
  const { slug } = useParams()
  const [data] = useState(datosJson.gastronomia.restaurantes)
  const restaurante = data.find((restaurant) => restaurant.slug === slug)

  return (
    <div>
      <div>
        <Head
          image={restaurante?.hero}
        />
      </div>
      <Layout>
        <div className='mt-10'>
          <h2>RESTAURANT</h2>
        </div>
        <div className='w-full flex flex-col gap-4 bg-white border border-slate-400 lg:flex-row mt-6 lg:items-center lg:gap-8'>
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
            {restaurante?.gallery?.map((image, index) => (
              <SwiperSlide key={index + 1}>
                <img
                  src={image || ''}
                  alt={restaurante?.title}
                  className='w-full h-64 object-cover bg-center bg-cover md:h-80 lg:h-96'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='w-full flex flex-col justify-center gap-4 h-full md:flex-row md:gap-8 lg:flex-col lg:px-6'>
            <div className='w-full'>
              <h2>{restaurante?.title}</h2>
              <p className='inline-block bg-green-300 px-3 py-1 rounded-md my-2 md:mt-4'>
                <BsCheck2 className='inline-block mr-1' />
                {restaurante?.recomend}
              </p>
              <p className='flex items-center mb-2'>
                <BiMap size={20} />
                {restaurante?.address}
              </p>
              {
                restaurante.phone !== "" && (
                  <p className='flex items-center'>
                    <FiPhone size={20} />
                    {restaurante?.phone}
                  </p>
                )
              }
            </div>
            <div className='w-full flex flex-col gap-3'>
              <div className=''>
                <h2>Horario de Atencion</h2>
              </div>
              <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                {restaurante?.attention?.map((hour, index) => (
                  <li key={index + 1} className='flex items-center gap-2'>
                    <BsClockHistory />
                    {hour || ''}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default RestaurantDetail