import React, { useState } from 'react'
import Slide from '../layouts/Slide'
import datosJson from '../../public/datos.json'
import Layout from '../layouts/Layout'
import FormInput from '../components/Form/FormInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import Head from '../components/Head'

const Contact = () => {

  const [data] = useState(datosJson.slides)
  const slideContact = data.slice(8)
  return (
    <>
    <Head
    image={`/images/Turismo/huamachuco/plazanoche.jpg`}
    title='CONTACTO'
    />
      {/* <Slide data={slideContact} /> */}
      <div className='lg:px-10 xl:px-20'>
        <Layout>
          <div className='mt-10 md:flex justify-center items-center gap-6'>
            <section className='w-full'>
              <div className='flex flex-col gap-4'>
                <h2>¿TIENE PREGUNTAS?</h2>
                <p>No dude en llamarnos o enviarnos un correo electrónico,
                  o utilice nuestro formulario de contacto para ponerse en contacto con nosotros.</p>
                <span>¡Esperamos con interes escuchar de usted!</span>
              </div>
              <div className='mt-6 flex flex-col gap-4'>
                <div>
                  <p className='font-semibold'>Llamenos:</p>
                  <span>+51 919191919</span>
                </div>
                <div>
                  <p className='font-semibold'>Envianos un correo:</p>
                  <span>cuatroruedashco@gmail.com</span>
                </div>
              </div>
            </section>
            <div className='flex flex-col justify-center items-center gap-6 mt-6 h-full w-full sm:flex-row sm:justify-between lg:gap-10'>
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
            </div>
          </div>
        </Layout>
      </div>
      <section className='bg-white mt-16 pt-8 pb-16 lg:mt-24 lg:px-10 xl:px-20'>
        <Layout>
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

        </Layout>
      </section>
    </>
  )
}

export default Contact