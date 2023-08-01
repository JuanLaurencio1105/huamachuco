import React, { useState } from 'react'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import DataCard from '../components/DataCard'
import CardRestaurant from '../components/CardRestaurant'
import Head from '../components/Head'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-creative'


const Gastronomy = () => {
  const [platos] = useState(datosJson.gastronomia.platos)
  const [bebidas] = useState(datosJson.gastronomia.bebidas)
  const [restaurantes] = useState(datosJson.gastronomia.restaurantes)


  const scrollTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <div>
      <Head
      image={`/images/Gastronomia/tradicional6.jpg`}
      title='GASTRONOMIA'
      />
      <Layout>
        <div className='my-8'>
          <h2>RESTAURANTES DE HUAMACHUCO</h2>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4'>
            {restaurantes.map((restaurant, index) => (
              <CardRestaurant key={index + 1}
                data = {restaurant}
                onClick={scrollTop}
              />
            ))}
          </div>
        </div>
        <div className='mt-20 mb-4 flex flex-col gap-4 lg:px-20'>
          <h2>PLATOS TIPICOS DE HUAMACHUCO</h2>
          <span className='indent-4'>La base de la dieta en Huamachuco gira en torno a los alimentos nativos de la región, como papas, maíz, quinua y tubérculos, que son abundantes en los campos cultivados de la zona. Estos productos son la base de muchos platos y acompañamientos.</span>
        </div>
        <div>
          <div>
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
                }
              }}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              className='py-2'
            >
              {platos.map((plato) => (
                <SwiperSlide key={plato.id}>
                  <DataCard
                    image={plato.image}
                    title={plato.title}
                    text={plato.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='mt-20 mb-4 flex flex-col gap-4 lg:px-20'>
          <h2>POSTRES Y BEBIDAS DE HUAMACHUCO</h2>
          <p className='indent-4'>En Huamachuco, al igual que en otras regiones de Perú, encontrarás una variedad de postres y bebidas deliciosas y tradicionales.</p>
        </div>
        <section>
          <div>
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
                }
              }}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              className='py-2'
            >
              {bebidas.map((bebida, index) => (
                <SwiperSlide key={index + 1} >
                  <DataCard
                    image={bebida.image}
                    title={bebida.title}
                    text={bebida.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Gastronomy