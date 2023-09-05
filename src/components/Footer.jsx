import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Footer = () => {

  const scroolTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className='bg-blue pt-8 px-4 mt-8 text-white'>
      <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:flex-wrap lg:justify-between lg:px-8'>
        <div className='flex justify-center'>
          <Link to='/' onClick={scroolTop}>
            <img
              src="/images/logo/blanco.png"
              alt="Logo"
              className='w-36'
            />
          </Link>
        </div>
        <div>
          <ul className='grid grid-cols-2 justify-start items-start gap-4 px-5 sm:gap-x-10 md:gap-x-10'>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/' className='hover:text-black transition' onClick={scroolTop}>
                Inicio
              </Link>
            </li>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/restaurantes' className='hover:text-black transition' onClick={scroolTop}>
                Restaurantes
              </Link>
            </li>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/turismo' className='hover:text-black transition' onClick={scroolTop}>
                Atracciones Turisticas
              </Link>
            </li>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/nosotros' className='hover:text-black transition' onClick={scroolTop}>
                Hoteles
              </Link>
            </li>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/contacto' className='hover:text-black transition' onClick={scroolTop}>
                Contacto
              </Link>
            </li>
            <li className='text-start border-l border-white pl-2'>
              <Link to='/nosotros' className='hover:text-black transition' onClick={scroolTop}>
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 md:flex-row lg:flex-col'>
          <div className='flex items-center gap-2'>
            <AiOutlineMail />
            <div>
              <p>Correo</p>
              <span>juanlaurencio1105@gmail.com</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <GiSmartphone />
            <div>
              <p>Telefono</p>
              <span>+51 918182188</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
        <p className='text-sm'>&#169; 2023 Todos los Derechos Reservados</p>
      </div>
    </footer>
  )
}

export default Footer