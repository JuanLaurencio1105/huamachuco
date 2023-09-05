import { BiMap } from 'react-icons/bi'
import { BsCheck2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { FiPhone } from 'react-icons/fi'

const CardHotel = ({ data, onClick }) => {

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <article className='border border-slate-400 w-full bg-white overflow-hidden flex flex-col mt-6 rounded-xl sm:flex-row md:flex-col lg:flex-row xl:flex-col'>
      <div className='overflow-hidden'>
        <Link
          to={`/hoteles/${data.slug}`}
          onClick={onClick}
        >
          <img
            src={data.image}
            alt="Imagen del Hotel"
            className='w-full h-56 bg-cover bg-center object-cover sm:h-full max-h-60 xl:h-56 overflow-hidden hover:scale-110 transition-all'
          />
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 w-full lg:gap-4'>
        <h5>{data.title}</h5>
        <ul className='px-4'>
          <li className='inline-block bg-green-300 px-2 rounded-md mb-2'>
            <BsCheck2 className='inline-block mr-1' />
            <span className='inline-block text-sm'>{data.recomend}</span>
          </li>
          <li className='flex items-center mb-2 gap-1'>
            <span>
              <BiMap size={20} />
            </span>
            <p>{data.address}</p>
          </li>
          {data.phone !== "" && (
            <li className='flex items-center gap-1'>
              <span>
                <FiPhone size={20} />
              </span>
              <p>{data.phone}</p>
            </li>
          )}
        </ul>
        <div className='flex justify-center mb-2'>
          <Button
            type='primary'
            onClick={scrollTop}
            to={`/hoteles/${data.slug}`}
          >
            Ver Mas
          </Button>
        </div>
      </div>
    </article>
  )
}

export default CardHotel