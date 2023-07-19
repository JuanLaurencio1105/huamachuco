import React, { useState } from 'react'
import Layout from '../layouts/Layout'
import Slide from '../layouts/Slide'
import datosJson from '/public/datos.json'
import CardTour from '../components/CardTour'

const Turism = () => {
  const [data] = useState(datosJson.turismo)
  const [turismo] = useState(datosJson.slides)

  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  const turismoData = turismo.slice(0, 2)
  return (
    <div className='relative overflow-hidden'>
      <Slide data={turismoData} />
      <Layout>
        <section className='mt-10'>
          <div className='flex flex-col gap-5 lg:px-6'>
            <h2>LUGARES TURISTICOS DE HUAMACHUCO</h2>
            <p className='lg:text-xl text-center'>Descubre la cautivadora región de Huamachuco, un destino turístico en la provincia de Sánchez Carrión, La Libertad, Perú. Rodeado de majestuosas montañas y exuberantes paisajes andinos, este lugar encantador te sumerge en una experiencia única donde la historia, la cultura y la naturaleza se entrelazan de manera armoniosa.</p>
          </div>
          <div className='grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:grid-cols-3 mt-8'>
            {data.map((dato) => (
              <CardTour
                key={dato.id}
                dato={dato}
                onClick={scrollTop}
              />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Turism