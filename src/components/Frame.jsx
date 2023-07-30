const Frame = ({ src }) => {
  return (
    <iframe
    className='w-full'
      src={src}
      width="600"
      height="400"
      style={{ border: 0 }} allowFullScreen
      loading="lazy"
      referrerPolicy='no-referrer-when-downgrade'
    >
    </iframe>
  )
}

export default Frame