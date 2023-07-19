import React from 'react'
import Button from '../components/Button'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'

const NotFound = () => {
  return (
    <div className='h-screen w-full grid place-items-center overflow-hidden'>
      <div>
        <Button
          to='/'
          type='primary'
          text='REGRESAR'
        >
          <HiOutlineChevronDoubleLeft />
        </Button>
        <p className='text-2xl text-blue'>404 - Not Found</p>
      </div>
    </div>
  )
}

export default NotFound