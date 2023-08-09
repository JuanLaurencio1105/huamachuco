import { useEffect } from 'react'

const Head = ({ image, title }) => {
  useEffect(() => {
    ScrollReveal().reveal('.headline', { duration: 2000, distance: '60px', origin: 'bottom', scale: 0.85 })
  }, [])
  return (
    <div
      className='w-full h-[400px] bg-fixed object-cover bg-no-repeat bg-cover bg-center relative clip-path'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='absolute top-0 w-full h-full flex justify-center items-center'>
        <div className='font-semibold text-lg text-white shad text-center sm:text-xl md:text-2xl lg:text-3xl'>
          <p className='z-10 headline'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Head