import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"

const CardCustom = ({ costumbre, onClick }) => {
    return (
        <div key={costumbre.id}
            className='bg-white border border-slate-400 rounded-xl pb-4 overflow-hidden'>
            <div className='overflow-hidden'>
                <Link
                    to={`/costumbre/${costumbre.slug}`}
                    onClick={onClick}
                >
                    <img
                        src={costumbre.image}
                        alt={costumbre.title}
                        className='w-full h-60 object-cover bg-center bg-cover rounded-t-xl hover:scale-110 transition-all duration-300'
                    />
                </Link>

            </div>
            <div className='px-4 py-2'>
                <h4>{costumbre.title}</h4>
                <p className='mt-4'>{costumbre.description}</p>
            </div>
            <div className='flex justify-center pt-4'>
                <Button
                    to={`/costumbre/${costumbre.slug}`}
                    type='primary'
                    text='VER MAS'
                />
            </div>
        </div>
    )
}

export default CardCustom