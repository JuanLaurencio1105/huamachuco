import React, { useState } from 'react'
import Slide from '../layouts/Slide'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import DataCard from '../components/DataCard'
import FormInput from '../components/Form/FormInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'

const AboutUs = () => {

  const [nosotros] = useState(datosJson.slides)
  const slideNosotros = nosotros.slice(6)
  return (
    <div className='relative overflow-hidden'>
      <div>
        <Slide data={slideNosotros} />
      </div>
      <Layout>
        <article className='mt-8 border border-slate-400 rounded-2xl md:flex sm:mt-12 lg:my-20'>
          <div className='w-full'>
            <img
              src="/images/Turismo/huamachuco/plazaa1.jpg"
              alt="Altura Huamachuco"
              className='rounded-t-xl w-full h-48 bg-center bg-cover object-cover md:rounded-t-none md:rounded-l-2xl md:h-full md:max-h-[450px] lg:max-h-[320px] lg:rounded-l-2xl'
            />
          </div>
          <div className='flex flex-col items-start justify-center bg-white py-2 px-4 rounded-b-xl md:p-4 md:rounded-b-none md:rounded-r-2xl lg:w-full'>
            <p className='lg:tracking-wider'>Somos una pagina web que busca impulsar el turismo en la ciudad de Huamachuco, en la que brindamos informacion sobre la cultura, tradicion y gastronomia de esta tierra del ande liberteño.
              Somos una pagina web que busca impulsar el turismo en la ciudad de Huamachuco, en la que brindamos informacion sobre la cultura, tradicion y gastronomia de esta tierra del ande liberteño.
            </p>
            <div className='mt-3 lg:mt-6'>
              <ul className='space-y-2'>
                <li>
                  <span className='border-l-2 border-l-blue mr-2'></span>
                  non pulvinar neque laoreet suspendisse
                </li>
                <li>
                  <span className='border-l-2 border-l-blue mr-2'></span>
                  non pulvinar neque laoreet suspendisse
                </li>
              </ul>
            </div>
          </div>
        </article>
      </Layout>
      <div className='my-10 lg:bg-blue lg:my-20 lg:py-10 lg:pb-20'>
        <Layout>
          <section className='flex flex-col gap-4 sm:flex-row'>
            <DataCard
              image='/images/montaña.jpg'
              title='MISION'
              text='Somos una pagina web que busca impulsar el turismo en la ciudad de Huamachuco, en la que brindamos informacion sobre la cultura, tradicion y gastronomia de esta tierra del ande liberteño.'
            />
            <DataCard
              image='/images/Vinoculares.jpg'
              title='VISION'
              text='Somos una pagina web que busca impulsar el turismo en la ciudad de Huamachuco, en la que brindamos informacion sobre la cultura, tradicion y gastronomia de esta tierra del ande liberteño.'
            />
          </section>
        </Layout>
      </div>
      <Layout>
        <section className='mt-8 md:mt-16'>
          <div className='flex flex-col items-center justify-center gap-2 text-center'>
            <h2>DONDE NOS ENCONTRAMOS</h2>
            <p>La libertad, Sanchez Carrión, Huamachuco - PERÚ</p>
          </div>
          <div className='w-full rounded-xl mt-6'>
            <iframe
              className='w-full rounded-xl md:rounded-3xl'
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57994.529263017685!2d-78.04906081248203!3d-7.819671390223723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1689449855722!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy='no-referrer-when-downgrade'
            >
            </iframe>
          </div>
        </section>
      </Layout>
      <div className='bg-white py-4 mt-8'>
        <Layout>
          <div className='mt-8 md:my-16'>
            <div>
              <h2>CONTACTANOS</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 mt-6 h-full sm:flex-row sm:justify-between lg:gap-10'>
              <form className='w-full bg-blue rounded-xl border border-black p-4'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <FormInput
                    type='text'
                    label='Nombres y Apellidos'
                  />
                  <FormInput
                    type='text'
                    label='Correo Electronico'
                  />
                  <FormInput
                    type='text'
                    label='Numero de Telefono'
                  />
                  <TextArea
                    label='Ingrese Mensaje'
                    name='message'
                  />
                </div>
                <div className='mt-4 flex justify-center'>
                  <Button
                    type='primary'
                    text='ENVIAR'
                  />
                </div>
              </form>
              <div className='w-full'>
                <img src="/images/Turismo/huamachuco/pileta.jpg" alt="Plaza de Armas"
                  className='w-full h-56 object-cover rounded-xl border border-black sm:h-[340px]'
                />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default AboutUs