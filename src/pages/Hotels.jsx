import { useEffect, useState } from 'react'
import CardHotel from '../components/hotel/CardHotel'
import Layout from '../layouts/Layout'
import datosJson from '../../public/datos.json'
import Head from '../components/Head'

const Hotels = () => {

  const [hoteles] = useState(datosJson.Hoteles)
  useEffect(() => {
    ScrollReveal().reveal('.scrollBottom', { duration: 2000, distance: '60px', origin: 'bottom', scale: 0.85 })
  }, [])
  return (
    <>
      <Head
        image={'/images/hotel/xauxa7.jpg'}
        title='HOTELES'
      />
      <div className='bg-white mt-12 pt-4 pb-16 scrollBottom'>
        <Layout>
          <h2>HOTELES MAS POPULARES</h2>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4'>
            {hoteles.map((hotel, index) => (
              <CardHotel
                key={index + 1}
                data={hotel}
              />
            ))}
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Hotels