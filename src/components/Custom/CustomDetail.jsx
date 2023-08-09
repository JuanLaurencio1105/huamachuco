import datosJson from '../../../public/datos.json'
import Recommendations from "../Recommendations"
import Layout from "../../layouts/Layout"
import Head from '../Head'
import React, { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-cards';
import './customdetail.css'


const Actividad = ({ image, name }) => {
    return (
        <div className="h-[400px]  text-white relative">
            <div className="relative h-full w-full">
                <img src={image} alt={name} className="h-full w-full rounded-xl" />
            </div>
            <div className="absolute inset-x-0 bottom-4 lef-2/4 p-4 flex flex-col items-center bg-red-400 w-3/4 m-auto rounded-xl text-center">
                <strong>{name}</strong>
            </div>
        </div>
    )
}

const CustomDetail = () => {

    useEffect(() => {
        ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85 })
        ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
        ScrollReveal().reveal('.scrollLeft', { duration: 2500, distance: '60px', origin: 'left', scale: 0.85 })
    }, [])

    const { slug } = useParams()
    const [data] = useState(datosJson.costumbre)
    const costumbre = data.find((custom) => custom.slug === slug)

    return (
        <>
            <Head
                image={costumbre?.background}
                title={costumbre?.title}
            />
            <Layout>
                <section className="flex flex-col">
                    <div className='scrollBottom'>
                        <p>{costumbre.fullDescription}</p>
                    </div>

                    <div className="w-full flex h-auto gap-10 flex-col items-center py-10 md:flex-row md:gap-8  overflow-hidden ">
                        <div className="w-full md:w-2/4 flex scrollLeft flex-col-reverse md:flex-col">
                            <h2 className="mb-3">{costumbre.subtitleOne}</h2>
                            <p className="py-4">{costumbre.textSubOne}
                            </p>

                            <div className="rounded-xl h-[350px]">
                                <video src={costumbre.video} autoPlay muted controls className="w-full h-full object-fill rounded-xl "></video>
                            </div>
                        </div>

                        <div className="scrollRight w-full max-w-sm mx-auto md:w-72 lg:w-96">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Pagination]}
                                pagination={{ clickable: true }}
                                className="mySwiper bg-transparent w-full"
                            >
                                {costumbre.gallery?.map((image, index) => (
                                    <SwiperSlide
                                        key={index + 1}
                                        className="bg-none"
                                    >
                                        <img
                                            src={image?.source}
                                            className="w-full object-fill rounded-xl h-[420px] lg:h-[450px]" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <h2 className="text-left pb-4 scrollBottom">{costumbre.subtitleTwo}</h2>
                    {costumbre.textSubTwo.split(".").map((item, index) => (
                        <p className="mb-3 scrollBottom"
                            key={index}>
                            {item.trim() + "."}

                        </p>
                    ))}
                </section>

            </Layout>

            {costumbre.actividad.length > 0 ? (
                <div className="my-10 scrollBottom lg:bg-white lg:my-20 lg:py-10 lg:pb-20">
                    <Layout>
                        <h2 className="py-3 lg:py-5">ACTIVIDADES RELACIONADAS</h2>
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-4 lg:grid-cols-3 xl:grid-cols-4 ">
                            {costumbre?.actividad?.map((item) => (
                                <Actividad
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                />
                            ))}

                        </div>
                    </Layout>
                </div>
            ) : null}

            <Layout>
                <section className='flex flex-col gap-4 py-10 scrollBottom'>
                    <h2 className='uppercase'>Recomendaciones para asistir a esta tradición</h2>
                    <Recommendations costumbre={costumbre} />
                </section>
            </Layout>
        </>
    )
}

export default CustomDetail