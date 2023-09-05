import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import CardTour from '../components/CardTour'
import DataCard from '../components/DataCard'
import CardCustom from '../components/CardCustom'
import CardHotel from '../components/hotel/CardHotel'

const Home = () => {

  useEffect(() => {
    ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85 })
    ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
  }, [])

  const [data] = useState(datosJson.turismo)
  const [costumbres] = useState(datosJson.costumbre)
  const [gastronomia] = useState(datosJson.gastronomia.platos)
  const [toggleTab, setToggleTab] = useState(0)
  const showData = data.slice(0, 3)
  const showPlato = gastronomia.slice(0, 3)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='overflow-hidden relative'>
      <Hero />
      <div className='px-4 pt-8 lg:pt-12 scrollBottom'>
        <div className='pt-8 flex flex-col gap-4'>
          <div>
            <h2>HUAMACHUCO TIENE RIQUEZAS ESCONDIDAS ¡ENCUENTRALA!</h2>
          </div>
          <div className='flex justify-between items-center w-full pt-4 gap-4 max-w-lg mx-auto md:max-w-xl border-b-2 border-black'>
            <div onClick={() => setToggleTab(0)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/images/libro.webp" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Historia y cultura</p>
            </div>
            <div onClick={() => setToggleTab(1)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/images/brujula.webp" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Aventura</p>
            </div>
            <div onClick={() => setToggleTab(2)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/images/plato.webp" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Gastronomia</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 relative overflow-hidden text-white h-[350px]'>
        {
          toggleTab === 0 && (
            <>
              <img className='w-full object-cover bg-center h-full'
                src="/images/Turismo/markahuamachuco/mrkhco2.webp"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3 className={`${toggleTab === 0 ? 'scrollRight' : ''}`}>Historia Cultural</h3>
                </div>
                <p className={`font-semibold lg:text-xl ${toggleTab === 0 ? 'scrollRight' : ''}`}>El origen del nombre de esta ciudad proviene de dos palabras Quechuas: Waman, que significa halcón, y Chuco que significa gorro o sombrero; Es decir la tierra de los "Hombres con gorro de Halcón". Otro Plausible origen del nombre es que proviene de un hibrido de dos lenguas: Kulli y el Quechua</p>
                <div className='flex justify-center'>
                  <Button
                    to='/huamachuco'
                    type='primary'
                    text='Ver Más'
                    onClick={scrollTop}
                  />
                </div>
              </div>
            </>
          )
        }
        {
          toggleTab === 1 && (
            <>
              <img className='w-full object-cover bg-center h-full'
                src="/images/Turismo/huamachuco/glorieta.webp"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3 className={`${toggleTab === 1 ? 'scrollRight' : ''}`}>Aventura</h3>
                </div>
                <p className={`font-semibold lg:text-xl ${toggleTab === 1 ? 'scrollRight' : ''}`}>Visitar esta hermosa ciudad es una gran opcion para descubrir y disfrutar de todos los sitios turisticos que ofrecen sus bellos paisajes de esta tierra del ande liberteño, donde disfrutaras mucho la estadia y comprender sobre sus culturas y aventurarte a lugares nuevos.</p>
                <div className='flex justify-center'>
                  <Button
                    to='/turismo'
                    type='primary'
                    text='Ver Más'
                    onClick={scrollTop}
                  />
                </div>
              </div>
            </>
          )
        }
        {
          toggleTab === 2 && (
            <>
              <img className='w-full object-cover bg-center h-full'
                src="/images/Turismo/huamachuco/plaza.webp"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3 className={`${toggleTab === 2 ? 'scrollRight' : ''}`}>GASTRONOMIA</h3>
                </div>
                <p className={`font-semibold ${toggleTab === 2 ? 'scrollRight' : ''} lg:text-xl`}>Huamachuco tambien te ofrece diferentes platos tipicos de nuestra tierra para disfrutar y compartir con la familia, como la Pachamanca, Picante de cuy, Cuy Chactado, Shambar, Chicharron con mote, trucha frita, etc. Es un buen destino para degustar de la gastronomia que ofrece esta ciudad y alrededores.</p>
                <div className='flex justify-center'>
                  <Button
                    to='/restaurantes'
                    type='primary'
                    text='Ver Más'
                    onClick={scrollTop}
                  />
                </div>
              </div>
            </>
          )
        }
      </div>
      <div className='bg-white pt-2 mt-6 pb-16'>
        <Layout>
          <section className='mt-8 lg:mt-12'>
            <div className='py-4'>
              <h2 className='text-center font-semibold uppercase scrollRight'>Estos son los destinos Turisticos más Buscados</h2>
            </div>
            <article className='grid grid-cols-1 gap-8 w-full scrollBottom md:grid-cols-3 relative h-auto'>
              {showData.map((dato) => (
                <CardTour
                  onClick={scrollTop}
                  key={dato.id}
                  dato={dato}
                />
              ))}
            </article>
            <div className='flex justify-center mt-8'>
              <Button
                to='/turismo'
                type='primary'
                text='Ver Todos los Sitios'
                onClick={scrollTop}
              />
            </div>
          </section>
        </Layout>
      </div>
      <Layout>
        <section className='mt-8 lg:mt-12 scrollBottom'>
          <div className='py-8'>
            <h2 className='font-semibold text-center'>COSTUMBRES Y TRADICIONES DE NUESTRA TIERRA</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 w-full max-w-md mx-auto sm:grid-cols-2 sm:max-w-2xl md:max-w-full lg:grid-cols-4 lg:gap-6'>
            {costumbres.map((costumbre) => (
              <CardCustom
                onClick={scrollTop}
                key={costumbre.id}
                costumbre={costumbre}
              />
            ))}
          </div>
        </section>
      </Layout>
      <Layout>
        <section className='mt-8 lg:mt-12 scrollBottom'>
          <div className='py-8'>
            <h2 className='text-center font-semibold'>PLATOS GASTRONOMICOS DE HUAMACHUCO</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-8 md:grid-cols-3'>
            {showPlato.map((plato) => (
              <DataCard
                key={plato.id}
                image={plato.image}
                title={plato.title}
                text={plato.description}
              />
            ))}
          </div>
          <div className='flex justify-center mt-8'>
            <Button
              to='/restaurantes'
              type='primary'
              text='VER MAS PLATOS'
              onClick={scrollTop}
            />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home