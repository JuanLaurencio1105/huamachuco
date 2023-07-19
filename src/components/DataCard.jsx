import React from 'react'

const DataCard = ({ image, title, text }) => {
  return (
    <article className='bg-white border border-slate-400 rounded-xl md:max-w-sm mx-auto'>
      <img
        src={image}
        alt={title}
        className='w-full h-56 bg-cover bg-center object-cover rounded-xl'
      />
      <div className='flex flex-col justify-center items-center  p-3 md:px-4'>
        <h5>{title}</h5>
        <p className='p-2 lg:tracking-wide'>{text}</p>
      </div>
    </article>
  )
}

export default DataCard