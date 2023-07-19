import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import datosJson from '../../../public/datos.json'
import Layout from '../../layouts/Layout'
import DataCard from '../DataCard'
import { BsSnow } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-creative'

const ToursDetail = () => {
  const { slug } = useParams()

  const [data] = useState(datosJson.turismo)
  const tours = data.find((tour) => tour.slug === slug)
  return (
    <Layout>
      <div className='mt-28 py-10'>
        <div className='flex flex-col gap-4 md:px-7 lg:px-20'>
          <div>
            <Swiper
              className='mySwiper5'
              grabCursor={true}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-125%', 0, -100],
                  rotate: [0, 0, -10],
                },
                next: {
                  shadow: true,
                  translate: ['125%', 0, -100],
                  rotate: [0, 0, 10],
                },
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop='true'
              modules={[Navigation, Pagination, EffectCreative, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            >
              {tours.gallery?.map((image, index) => (
                <SwiperSlide
                  key={index + 1}
                >
                  <img
                    src={image?.route}
                    alt={tours?.titleTour}
                    className='w-full h-56 bg-cover bg-center object-cover rounded-xl sm:h-80 lg:h-96'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex flex-col gap-4 lg:px-6'>
            <h3>{tours?.titleTour?.toUpperCase()}</h3>
            <p>{tours?.description}</p>
          </div>
        </div>
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
              {tours?.recreative.map((card) => (
                <SwiperSlide key={card.id}>
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
                  {tours?.gastronomy.map((card) => (
                    <SwiperSlide key={card.id}>
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
            {tours?.recommendation.map((recomend) => (
              <div key={recomend.id}>
                <div className='flex items-center gap-4'>
                  <span><BsSnow size={20} /></span>
                  <p>
                    {recomend?.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ToursDetail