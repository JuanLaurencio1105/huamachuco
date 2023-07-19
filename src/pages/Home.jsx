import React, { useState } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import CardTour from '../components/CardTour'
import DataCard from '../components/DataCard'

const Home = () => {

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
      <div className='px-4 pt-8 lg:pt-12'>
        <div className='pt-8 flex flex-col gap-4'>
          <div>
            <h2>HUAMACHUCO TIENE RIQUEZAS ESCONDIDAS ¡ENCUENTRALA!</h2>
          </div>
          <div className='flex justify-between items-center w-full pt-4 gap-4 max-w-lg mx-auto md:max-w-xl border-b-2 border-black'>
            <div onClick={() => setToggleTab(0)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/src/assets/images/libro.png" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Historia y cultura</p>
            </div>
            <div onClick={() => setToggleTab(1)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/src/assets/images/brujula.png" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Aventura</p>
            </div>
            <div onClick={() => setToggleTab(2)} className='flex flex-col justify-center items-center cursor-pointer text-center hover:scale-105 active:scale-95'>
              <img
                className='w-10 md:w-16'
                src="/src/assets/images/plato.png" alt="Libro Historia" />
              <p className='md:text-xl font-semibold'>Gastronomia</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 relative text-white h-[350px]'>
        {
          toggleTab === 0 && (
            <>
              <img className='w-full object-cover bg-center h-full'
                src="/public/images/Turismo/markahuamachuco/mrkhco2.jpg"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3>Historia Cultural</h3>
                </div>
                <p className='font-semibold lg:text-xl'>El origen del nombre de esta ciudad proviene de dos palabras Quechuas: Waman, que significa halcón, y Chuco que significa gorro o sombrero; Es decir la tierra de los "Hombres con gorro de Halcón". Otro Plausible origen del nombre es que proviene de un hibrido de dos lenguas: Kulli y el Quechua</p>
                <div className='flex justify-center'>
                  <Button
                    type='primary'
                    text='Ver Más'
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
                src="/src/assets/images/Turismo/huamachuco/plaza-pan.jpeg"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3>Aventura</h3>
                </div>
                <p className='font-semibold lg:text-xl'>Visitar esta hermosa ciudad es una gran opcion para descubrir y disfrutar de todos los sitios turisticos que ofrecen sus bellos paisajes de esta tierra del ande liberteño, donde disfrutaras mucho la estadia y comprender sobre sus culturas y aventurarte a lugares nuevos.</p>
                <div className='flex justify-center'>
                  <Button
                    type='primary'
                    text='Ver Más'
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
                src="/src/assets/images/Turismo/huamachuco/plaza.jpg"
                alt="Imagen de MarkaHuamachuco"
              />
              <div className='absolute top-0 right-0 z-10 bg-black bg-opacity-70 h-full max-w-lg px-6 flex flex-col gap-4 sm:max-w-md md:px-10 sm:gap-6 md:max-w-lg lg:gap-10 lg:max-w-2xl'>
                <div className='flex justify-center mt-6'>
                  <h3>GASTRONOMIA</h3>
                </div>
                <p className='font-semibold lg:text-xl'>Huamachuco tambien te ofrece diferentes platos tipicos de nuestra tierra para disfrutar y compartir con la familia, como la Pachamanca, Picante de cuy, Cuy Chactado, Shambar, Chicharron con mote, trucha frita, etc. Es un buen destino para degustar de la gastronomia que ofrece esta ciudad y alrededores.</p>
                <div className='flex justify-center'>
                  <Button
                    type='primary'
                    text='Ver Más'
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
              <h2 className='text-center font-semibold uppercase'>Estos son los destinos Turisticos más Buscados</h2>
            </div>
            <article className='grid grid-cols-1 gap-8 w-full md:grid-cols-3 relative h-auto'>
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
        <section className='mt-8 lg:mt-12'>
          <div className='py-8'>
            <h2 className='font-semibold text-center'>COSTUMBRES Y TRADICIONES DE NUESTRA TIERRA</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 w-full max-w-md mx-auto sm:grid-cols-2 sm:max-w-2xl md:max-w-full lg:grid-cols-4 lg:gap-6'>
            {costumbres.map((costumbre) => (
              <div key={costumbre.id}
                className='bg-white border border-slate-400 rounded-xl pb-4 overflow-hidden'>
                <div className='overflow-hidden'>
                  <Link>
                    <img
                      src={costumbre.image}
                      alt={costumbre.title}
                      className='w-full h-60 object-cover bg-center bg-cover rounded-t-xl hover:scale-110 transition-all duration-300'
                    />
                  </Link>

                </div>
                <div className='px-4 py-2'>
                  <h4>{costumbre.title}</h4>
                  <p className='mt-4'>{costumbre.description}</p>
                </div>
                <div className='flex justify-center pt-4'>
                  <Button
                    type='primary'
                    text='VER MAS'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-8'>
            <Button
              type='primary'
              text='VER MAS COSTUMBRES'
            />
          </div>
        </section>
      </Layout>
      <Layout>
        <section className='mt-8 lg:mt-12'>
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
              type='primary'
              text='VER MAS PLATOS'
            />
          </div>
        </section>
      </Layout>

    </div>
  )
}

export default Home