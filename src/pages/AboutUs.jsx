import Layout from '../layouts/Layout'
import DataCard from '../components/DataCard'
import FormInput from '../components/Form/FormInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'
import Head from '../components/Head'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const AboutUs = () => {

  useEffect(() => {
    ScrollReveal().reveal('.scrollLeft', { duration: 2500, distance: '60px', origin: 'left', scale: 0.85 })
    ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
    ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85 })
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
    <div className='relative overflow-hidden'>
      <Head
        image={`/images/Turismo/huamachuco/campnoche.webp`}
        title='SOBRE NOSOTROS'
      />
      <Layout>
        <article className='mt-8 border scrollBottom border-slate-400 rounded-2xl md:flex sm:mt-12 lg:my-20'>
          <div className='w-full'>
            <img
              src="/images/Turismo/huamachuco/plazaa1.webp"
              alt="Huamachuco"
              className='rounded-t-xl w-full h-48 bg-center bg-cover object-cover md:rounded-t-none md:rounded-l-2xl md:h-full md:max-h-[450px] lg:max-h-[320px] lg:rounded-l-2xl'
            />
          </div>
          <div className='flex flex-col items-start justify-center bg-white py-2 px-4 rounded-b-xl md:p-4 md:rounded-b-none md:rounded-r-2xl lg:w-full lg:px-10'>
            <p className='lg:tracking-wider'>¡Bienvenidos a la Ciudad de Huamachuco! Somos una plataforma dedicada a mostrar la belleza y encanto de la ciudad de Huamachuco, ubicada en la región de La Libertad, Perú. Nuestra pasión por la cultura, la naturaleza y el turismo sostenible nos ha llevado a crear esta página web para compartir con el mundo todo lo que Huamachuco tiene para ofrecer.
            </p>
            <div className='mt-3 lg:mt-6'>
              <ul className='space-y-2'>
                <li>
                  <span className='border-l-2 border-l-blue mr-2'></span>
                  Compromiso con el turismo sostenible
                </li>
                <li>
                  <span className='border-l-2 border-l-blue mr-2'></span>
                  Te invitamos a formar parte de esta aventura
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
              scroll='scrollLeft'
              image='/images/montaña.jpg'
              title='MISION'
              text='Nuestra misión es promover y difundir la riqueza cultural, histórica y natural de Huamachuco, brindando a los visitantes una experiencia enriquecedora y auténtica. Buscamos resaltar la identidad local, preservar el patrimonio y fomentar un turismo responsable que beneficie a la comunidad y promueva la conservación del entorno.'
            />
            <DataCard
              scroll='scrollRight'
              image='/images/Vinoculares.jpg'
              title='VISION'
              text='Nos esforzamos por convertirnos en la principal fuente de información y guía para quienes deseen descubrir los tesoros escondidos de Huamachuco. Aspiramos a que nuestra página web sea reconocida por su calidad y compromiso con el turismo sostenible, y que inspire a más personas a visitar y apreciar la magia que esta ciudad tiene para ofrecer.'
            />
          </section>
        </Layout>
      </div>
      <Layout>
        <section className='mt-8 scrollBottom md:mt-16'>
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
            <div className='scrollBottom'>
              <h2>CONTACTANOS</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 mt-6 h-full sm:flex-row sm:justify-between lg:gap-10'>
              <form
                ref={form}
                onSubmit={handleSubmit}
                method='post'
                className='w-full bg-blue rounded-xl border border-black py-4 px-6 scrollLeft lg:px-10'>
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
                    type='primary'
                    text='ENVIAR'
                    onClick={handleSubmit}
                  />
                </div>
                {formSubmitted && (
                  <div className='bg-green-300 mt-1 p-1 rounded-lg'>{successMessage}</div>
                )}
              </form>
              <div className='w-full scrollRight'>
                <img src="/images/Turismo/huamachuco/pileta.webp" alt="Plaza de Armas"
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