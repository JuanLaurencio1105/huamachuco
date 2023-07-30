import React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import datosJson from '../../../public/datos.json'
import Layout from "../../layouts/Layout"
import Recommendations from "../Recommendations"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules"
import './customdetail.css'


const Hotel = ({ image, name, addres }) => {
    return (
        <div className="h-[450px]  text-white relative">
            { }
            <div className="relative h-full w-full">
                <img src={image} alt={name} className="h-full w-full rounded-xl" />
            </div>
            <div className="absolute inset-x-0 bottom-10 lef-2/4 p-10 flex flex-col items-center backdrop-blur-sm bg-white/30 w-3/4 m-auto rounded-xl">
                <strong>{name}</strong>
                <span>{addres}</span>
            </div>
        </div>
    )
}


const CustomDetail = () => {
    const { slug } = useParams()
    const [data] = useState(datosJson.costumbre)
    const costumbre = data.find((custom) => custom.slug === slug)

    return (
        <>
            <div className="h-full w-full overflow-hidden">
                <div className="kenburns-top w-full bg-fixed h-screen  bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${costumbre.background})`, transform: 'scale(1.1)' }}
                >
                    <div className="absolute inset-0 flex justify-center items-center h-full w-full rounded-xl" >
                        <h3 className="p-10 bg-white/30 backdrop-blur-md rounded-xl ">{costumbre?.title?.toUpperCase()}</h3>
                    </div>
                </div>
            </div>

            <Layout>
                <section className="flex flex-col">
                    <div>
                        <p>{costumbre.description}</p>
                        <p>La parada del gallardete consiste en trasladar un madero de eucalipto de entre 37 a 45 metros de alto hasta la plaza de armas de Huamachuco para ser unido a un gallardete con los colores patrios y ser levantada a pura fuerza humana.</p>
                    </div>

                    <div className="w-full flex h-auto gap-10 flex-col py-10 md:flex-row md:gap-0  overflow-hidden ">
                        <div className="w-full md:w-2/4 flex flex-col-reverse md:flex-col">
                            <h3 className="mb-3 no-underline">{costumbre.subtitleOne}</h3>
                            <p className="py-4">{costumbre.textSubOne}
                            </p>

                            <div className="rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/100 h-[350px]">
                                <video src={costumbre.video} autoPlay muted controls className="w-full h-full object-fill rounded-xl "></video>
                            </div>
                        </div>

                        <div className="w-8/12 rounded-xl sm:w-[28vw] m-auto">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper bg-transparent"
                            >
                                {costumbre.gallery?.map((image, index) => (
                                    <SwiperSlide className="bg-none"
                                        key={index + 1}
                                    >
                                        <img
                                            src={image?.source}
                                            alt=""
                                            className="w-full object-fill rounded-xl h-[500px]" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>


                    <h3 className="text-left pb-2 no-underline">{costumbre.subtitleTwo}</h3>
                    <p>{costumbre.textSubTwo}</p>

                </section>


                <div className="py-6">
                    <h3 className="no-underline">HOTELES QUE TE PUEDEN ALOJAR</h3>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-4 lg:grid-cols-3 ">
                        {costumbre?.hotel.map((hotel) => (
                            <Hotel 
                            key={hotel.id}
                            name={hotel.name}
                            addres={hotel.addres}
                            image={hotel.image}
                            />
                        ))}


                    </div>
                </div>

                <section className='mt-10 flex flex-col gap-4 sm:mt-20 lg:mt-28 lg:px-20'>
                    <h2 className="no-underline">Recomendaciones para asistir a esta tradición</h2>
                    <Recommendations costumbre={costumbre} />
                </section>
            </Layout>
        </>
    )
}

export default CustomDetail