import React, { useEffect, useState } from 'react'
import NavLink from '../NavBar/NavLink'
import { AiOutlineContacts, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { BsCamera } from 'react-icons/bs'
import { LuHotel } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    { window.scrollY > 0 ? setScroll(true) : setScroll(false) }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const hideNavBar = () => {
    setIsOpen(false)
  }

  const handleClickFunctions = () => {
    handleScrollTop()
    hideNavBar()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`w-full fixed top-0 text-white shad z-20 ${scroll ? 'bg-white shad-none' : 'bg-transparent'} ${isOpen ? 'menu-open' : ''} xl:flex xl:justify-between`}>
      <div className='flex justify-between items-center px-6 py-2'>
        <Link to='/'>
          <img
            src="/images/logo/color.png" alt="logo"
            className='w-28 h-20 xl:w-[165px] xl:h-24'
          />
        </Link>
        <Button
          type='menu'
          onClick={handleClick}
        >
          {isOpen ? (
            <MdClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </Button>
      </div>
      <nav className={`relative w-full ${isOpen ? 'flex' : 'hidden'} xl:flex`}>
        <div className={`absolute top-0 w-full h-screen flex flex-col gap-8 pt-8 ${scroll ? 'bg-white text-black' : ''} ${isOpen ? 'bg-slate-300' : ''} xl:flex-row xl:h-full xl:justify-end xl:items-center xl:pt-0 xl:pr-6`}>
          <ul className='flex flex-col gap-6 xl:flex-row'>
            <NavLink
              to='/'
              text='Inicio'
              icon={<AiOutlineHome size={23} />}
              onClick={handleClickFunctions}
            />
            <NavLink
              to='/nosotros'
              text='Sobre Nosotros'
              icon={<HiUserGroup size={23} />}
              onClick={handleClickFunctions}
            />
            <NavLink
              to='/turismo'
              text='Atracciones Turisticas'
              icon={<BsCamera size={23} />}
              onClick={handleClickFunctions}
            />
            <NavLink
              to='/restaurantes'
              text='Restaurantes'
              icon={<IoFastFoodOutline size={23} />}
              onClick={handleClickFunctions}
            />
            <NavLink
              to='/hoteles'
              text='Hoteles'
              icon={<LuHotel size={23} />}
              onClick={handleClickFunctions}
            />
            <NavLink
              to='/contacto'
              text='Contacto'
              icon={<AiOutlineContacts size={23} />}
              onClick={handleClickFunctions}
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header