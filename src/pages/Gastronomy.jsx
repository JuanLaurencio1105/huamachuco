import React, { useState } from 'react'
import Slide from '../layouts/Slide'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import DataCard from '../components/DataCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-creative'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


const Gastronomy = () => {
  const [data] = useState(datosJson.slides)
  const [platos] = useState(datosJson.gastronomia.platos)
  const [bebidas] = useState(datosJson.gastronomia.bebidas)
  console.log(platos)
  return (
    <div>
      <Slide
        data={data}
        key={data.id}
      />
      <Layout>
        <div className='my-10 flex flex-col gap-4 lg:px-20'>
          <h2>PLATOS TIPICOS DE HUAMACHUCO</h2>
          <p className='indent-4'>La gastronomía de Huamachuco, en la provincia de Sánchez Carrión, región La Libertad, Perú, es un reflejo de la rica diversidad cultural y geográfica de la zona. Esta región montañosa en los Andes peruanos ofrece una variada selección de platos que combinan ingredientes locales, tradiciones indígenas y técnicas culinarias heredadas de generaciones pasadas.</p>
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
                  // loop: false
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
        <div className='mt-10 flex flex-col gap-4 lg:px-20'>
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
                  // loop: false
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
        <div className='mt-10 flex flex-col gap-4 lg:px-20'>
          <h2>INGREDIENTES AUTOCTONOS DE HUAMACHUCO</h2>
          <p className='indent-4'>Huamachuco, al encontrarse en la región de La Libertad en los Andes peruanos, cuenta con una rica variedad de ingredientes autóctonos que han sido cultivados y utilizados por las comunidades locales durante siglos.</p>
        </div>
        <section className='mt-8 grid gap-4 gap-y-8 grid-cols-1 lg:grid-cols-3'>
          <article className='grid gap-4 col-span-2 sm:grid-cols-2 md:grid-cols-3'>
            <div>
              <span> <strong>Papas nativas:</strong> Estas papas tienen diferentes tamaños, colores y texturas, y son fundamentales en la gastronomía local.</span>
            </div>
            <div>
              <span> <strong>Chuño:</strong> El chuño es un producto derivado de la papa, obtenido a través de un proceso de deshidratación y congelamiento.</span>
            </div>
            <div>
              <span> <strong>Tunta:</strong> Otro producto derivado de la papa que se obtiene mediante la congelación y exposición al sol.</span>
            </div>
            <div>
              <span> <strong>Mashua:</strong>  Una raíz andina utilizada en diversas preparaciones culinarias, como guisos y ensaladas.</span>
            </div>
            <div>
              <span> <strong>Ocas:</strong> Otro tubérculo que es común en la región y se utiliza en guisos y sopas.</span>
            </div>
            <div>
              <span> <strong>Cañihua:</strong> Un pequeño grano similar a la quinua que se utiliza en sopas y guisos.</span>
            </div>
          </article>
          <div>
            <img
              className='w-full h-80 bg-cover bg-center object-cover max-w-[300px] mx-auto'
              src="/images/Turismo/huamachuco/campanario.jpeg" alt="Imagen del campanario huamachuco" />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Gastronomy