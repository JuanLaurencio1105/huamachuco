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


const Actividad = ({ image, name }) => {
    return (
        <div className="h-[450px]  text-white relative ">
            { }
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
    const { slug } = useParams()
    const [data] = useState(datosJson.costumbre)
    const costumbre = data.find((custom) => custom.slug === slug)

    return (
        <>
            <div className="h-full w-full overflow-hidden clip-path">
                <div className=" w-full bg-fixed h-screen  bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(to top,
                        rgba(14, 22, 63, 0.5),
                        rgba(0, 0, 0, 0.9)),url(${costumbre.background})`
                    }}
                >
                    <div className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl
                    absolute inset-0 flex justify-center items-center" >
                        <h3 className="no-underline">{costumbre?.title?.toUpperCase()}</h3>
                    </div>
                </div>
            </div>

            <Layout>
                <section className="flex flex-col">
                    <div>
                        <p>{costumbre.fullDescription}</p>
                    </div>

                    <div className="w-full flex h-auto gap-10 flex-col py-10 md:flex-row md:gap-0  overflow-hidden ">
                        <div className="w-full md:w-2/4 flex flex-col-reverse md:flex-col">
                            <h2 className="mb-3">{costumbre.subtitleOne}</h2>
                            <p className="py-4">{costumbre.textSubOne}
                            </p>

                            <div className="rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/100 h-[350px]">
                                <video src={costumbre.video} autoPlay muted controls className="w-full h-full object-fill rounded-xl "></video>
                            </div>
                        </div>

                        <div className="w-[300px] md:w-[280px] xl:w-[350px] rounded-xl  m-auto">
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
                                            className="w-full object-fill rounded-xl h-[555px]" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <h2 className="text-left pb-4">{costumbre.subtitleTwo}</h2>
                    {costumbre.textSubTwo.split(".").map((item, index) => (
                        <p  className="mb-3"
                            key={index}>
                            {item.trim() + "."}

                        </p>
                    ))}
                </section>

            </Layout>

            {costumbre.actividad && costumbre.actividad.length > 0 ? (
                <div className="my-10 lg:bg-white lg:my-20 lg:py-10 lg:pb-20">
                    <Layout>
                        <h2 className="no-underline py-3 lg:py-5 ">ACTIVIDADES RELACIONADAS</h2>

                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-4 md:grid-cols-3 lg:grid-cols-4 ">
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
                <section className='flex flex-col gap-4 py-10'>
                    <h2>Recomendaciones para asistir a esta tradición</h2>
                    <Recommendations costumbre={costumbre} />
                </section>
            </Layout>
        </>
    )
}

export default CustomDetail