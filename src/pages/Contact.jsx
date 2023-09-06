import React, { useEffect, useRef, useState } from 'react'
import Layout from '../layouts/Layout'
import FormInput from '../components/Form/FormInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import Head from '../components/Head'
import emailjs from '@emailjs/browser'

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85 })
    ScrollReveal().reveal('.scrollLeft', { duration: 2500, distance: '60px', origin: 'left', scale: 0.85 })
    ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      email: email,
      user_phone: phoneNumber,
      message: message
    }

    emailjs.send('service_y5yaxme', 'template_dl9b7mi', templateParams, 'zqrYhLP2tiy-srj-q')
      .then((response) => {
        console.log('Correo electronico enviado ' + response.text)
        setFormSubmitted(true)
        setSuccessMessage('El mensaje ha sido Enviado con éxito.')
        setName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')
        setTimeout(() => {
          setFormSubmitted(false)
          setSuccessMessage('')
        }, 4000)
      }, (error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Head
        image={`/images/Turismo/huamachuco/plazanoche.jpg`}
        title='CONTACTO'
      />
      <div className='lg:px-10 xl:px-20'>
        <Layout>
          <div className='mt-10 md:flex justify-center items-center gap-6'>
            <section className='w-full scrollLeft'>
              <div className='flex flex-col gap-4'>
                <h2>¿Tienes algún negocio orientado al turismo?</h2>
                <h2>¿Quieres darte a conocer con nosotros? </h2>
                <p>Agencia de viaje, restaurant, hospedaje, hotel, etc...¡Todos son bienvenidos!
                  Déjanos tus datos y nos contactaremos contigo. ¡Juntos promoviendo el turismo en Huamachuco!</p>
                <span>¡Esperamos con interes escuchar de usted!</span>
              </div>
              <div className='mt-6 flex flex-col gap-4'>
                <div>
                  <p className='font-semibold'>Llamenos:</p>
                  <span>+51 918182188</span>
                </div>
                <div>
                  <p className='font-semibold'>Envianos un correo:</p>
                  <span>juanlaurencio1105@gmail.com</span>
                </div>
              </div>
            </section>
            <div className='flex flex-col justify-center items-center gap-6 mt-6 h-full w-full sm:flex-row sm:justify-between lg:gap-10'>
              <form
                ref={form}
                onSubmit={handleSubmit}
                method='post'
                className='w-full scrollRight bg-blue rounded-xl border border-black p-4'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <FormInput
                    type='text'
                    label='Nombres y Apellidos'
                    name='user_name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormInput
                    type='text'
                    label='Correo Electronico'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormInput
                    type='text'
                    label='Numero de Telefono'
                    name='user_phone'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextArea
                    label='Ingrese Mensaje'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className='mt-4 flex justify-center'>
                  <Button
                    type='submit'
                    text='Enviar'
                  />
                </div>
                {formSubmitted && (
                  <div className='bg-green-300 mt-1 p-1 rounded-lg'>{successMessage}</div>
                )}
              </form>
            </div>
          </div>
        </Layout>
      </div>
      <section className='bg-white mt-16 pt-8 pb-16 lg:mt-24 lg:px-10 xl:px-20'>
        <Layout>
          <div className='flex flex-col scrollBottom items-center justify-center gap-2 text-center'>
            <h2>DONDE NOS ENCONTRAMOS</h2>
            <p>La libertad, Sanchez Carrión, Huamachuco - PERÚ</p>
          </div>
          <div className='w-full rounded-xl mt-6'>
            <iframe
              className='w-full rounded-xl scrollBottom md:rounded-3xl'
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