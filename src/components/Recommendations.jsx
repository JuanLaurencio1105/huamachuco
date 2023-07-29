import React from "react"
import { BsSnow } from "react-icons/bs"

const Recommendations = ({ costumbre }) => {
    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-4 lg:grid-cols-3'>
            {costumbre?.recommendations.map((recomend) => (
                <div key={recomend.id}>
                    <div className='flex items-center gap-4'>
                        <span><BsSnow size={20} /></span>
                        <p>
                            {recomend?.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Recommendations