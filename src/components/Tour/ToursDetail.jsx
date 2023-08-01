import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import datosJson from '../../../public/datos.json'
import Layout from '../../layouts/Layout'
import DataCard from '../DataCard'
import Frame from '../Frame'
import Head from '../Head'
import { BsSnow } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { MdOutlineTour } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cards'

const ToursDetail = () => {
  const { slug } = useParams()

  const [data] = useState(datosJson.turismo)
  const tours = data.find((tour) => tour.slug === slug)
  return (
    <>
      <Head
        image={tours.hero}
      />
      <Layout>
        <h2>{tours?.titleTour?.toUpperCase()}</h2>
        <div className='w-full flex flex-col gap-4 mt-6 xl:flex-row'>
          <Swiper
            className='w-full max-w-2xl'
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
            {tours.gallery?.map((image, index) => (
              <SwiperSlide
                key={index + 1}
              >
                <img
                  src={image || ''}
                  alt={tours?.titleTour}
                  className='w-full h-64 bg-cover bg-center object-cover rounded-xl sm:h-80 lg:h-96'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='w-full lg:px-6'>
            <p className='tracking-wide'>{tours?.description}</p>
          </div>
        </div>
      </Layout>
      <div className='flex flex-col gap-5 mt-8 bg-white py-10'>
        <Layout>
          <div className='flex flex-col gap-4 md:flex-row md:gap-8 xl:gap-12'>
            <div className='w-full'>
              <Frame src={tours?.route} />
            </div>
            <div className='w-full flex flex-col gap-4'>
              <h2>COMO LLEGAR</h2>
              <p className='flex items-center gap-1'>
                <BiMap size={25} />
                {tours?.arrive?.point}
              </p>
              <span className='tracking-wide'>{tours?.arrive?.description}</span>
              <p className='text-blue font-semibold'>SERVICIOS QUE OFRECE EL LUGAR</p>
              <ul className='grid grid-cols-2 gap-4'>
                {tours?.arrive?.services?.map((service, index) => (
                  <li className='flex items-center gap-1' key={index + 1}>
                    <MdOutlineTour size={20} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      </div>
      <Layout>
        <section className='mt-10 sm:mt-20 lg:mt-28'>
          <h2>{tours?.titleRecreative.toUpperCase()}</h2>
          <div className='mt-8'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              loop='true'
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  loop: false
                }
              }}
              modules={[Navigation, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              className='py-2'
            >
              {tours?.recreative.map((card, index) => (
                <SwiperSlide key={index + 1}>
                  <DataCard
                    image={card?.image}
                    title={card?.title}
                    text={card?.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {
          tours.gastronomy !== "" && (
            <div className='mt-10 flex flex-col gap-4 sm:mt-20 lg:mt-28'>
              <h2>{tours?.titleGastronomia?.toUpperCase()}</h2>
              <div className='mt-8'>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  grabCursor={true}
                  loop='true'
                  breakpoints={{
                    768: {
                      slidesPerView: 2
                    },
                    1024: {
                      slidesPerView: 3,
                      loop: false
                    }
                  }}
                  modules={[Navigation, Pagination]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={{ clickable: true }}
                  className='py-2'
                >
                  {tours?.gastronomy.map((card, index) => (
                    <SwiperSlide key={index + 1}>
                      <DataCard
                        image={card?.image}
                        title={card?.title}
                        text={card?.description}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )
        }
        <section className='mt-10 flex flex-col gap-4 sm:mt-20 lg:mt-28 lg:px-20'>
          <h2>{tours?.titleRecomendaciones.toUpperCase()}</h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-4 lg:grid-cols-3'>
            {tours?.recommendation.map((recomend, index) => (
              <div key={index + 1}>
                <div className='flex items-center gap-4'>
                  <span><BsSnow size={20} /></span>
                  <p>
                    {recomend || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ToursDetail