import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ type, children, text, onClick, to }) => {
  return (
    <>
      {
        type === 'primary' && (
          <Link
            to={to}
            onClick={onClick}
            className='bg-red-400 px-6 py-1 rounded-lg hover:opacity-80 text-white flex justify-center items-center gap-2'>
            {children}
            {text}
          </Link>
        )
      }
      {
        type === 'secondary' && (
          <button className='bg-blue-400 px-6 py-1 rounded-lg hover:opacity-80'>
            {text}
            {children}
          </button>
        )
      }
      {
        type === 'menu' && (
          <button
            onClick={onClick}
            className='bg-white p-1 rounded-lg text-black border border-black active:scale-95 xl:hidden'>
            {children}
          </button>
        )
      }
    </>
  )
}

export default Button