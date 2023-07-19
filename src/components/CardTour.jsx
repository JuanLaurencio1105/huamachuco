import React from 'react'
import { Link } from 'react-router-dom'

const CardTour = ({ dato, onClick }) => {
  return (
    <article className='w-full'>
      <div className='overflow-hidden rounded-lg shadow-md shadow-black border border-black'>
        <Link
          to={`/turismo/${dato.slug}`}
          onClick={onClick}
        >
          <img
            src={dato.image}
            alt={dato.title}
            className='rounded-lg w-full h-48 bg-cover bg-center object-cover object-bottom lg:h-64 hover:scale-125 transition-all duration-300'
          />
        </Link>
      </div>
      <h4>{dato.titleTour}</h4>
    </article>
  )
}

export default CardTour