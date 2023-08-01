const Head = ({image, title}) => {
  return (
    <div
      className='h-[400px] w-full object-fill bg-cover bg-center relative clip-path'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='absolute top-0 w-full h-full flex justify-center items-center'>
        <div className='font-semibold text-lg text-white shad text-center sm:text-xl md:text-2xl lg:text-3xl'>
          <p className='z-10'>{title}</p>
          {/* <span className='z-10'>{title}</span> */}
        </div>
      </div>
    </div>
  )
}

export default Head