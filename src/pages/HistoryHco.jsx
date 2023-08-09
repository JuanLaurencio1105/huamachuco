import { useEffect } from 'react'
import Head from '../components/Head'
import Layout from '../layouts/Layout'

const HistoryHco = () => {

  useEffect(() => {
    ScrollReveal().reveal('.scrollBottom', { duration: 2500, distance: '60px', origin: 'bottom', scale: 0.85 })
    ScrollReveal().reveal('.scrollLeft', { duration: 2500, distance: '60px', origin: 'left', scale: 0.85 })
    ScrollReveal().reveal('.scrollRight', { duration: 2500, distance: '60px', origin: 'right', scale: 0.85 })
  }, [])
  return (
    <>
      <Head
        image={`/images/Turismo/huamachuco/batallahco.webp`}
      />
      <Layout>
        <div className='mt-8'>
          <h2 className='scrollBottom'>UN POCO ACERCA DE HUAMACHUCO</h2>
          <div className='mt-6 flex flex-col gap-4 items-center justify-center md:flex-row md:gap-8'>
            <div className='w-full scrollLeft'>
              <img
                src="/images/Turismo/huamachuco/hco1.webp"
                alt="Plaza de Huamachuco"
                className='w-full h-64 object-cover bg-cover bg-center rounded-2xl md:h-96 lg:h-72'
              />
            </div>
            <div className='w-full lg:px-4 scrollRight'>
              <p>Huamachuco, ubicado en la región de La Libertad, Perú, es una ciudad con una historia rica y fascinante que se remonta a la época preincaica. Durante la antigüedad, la región fue habitada por diversas culturas, como los huari y los chimú, quienes dejaron vestigios de su esplendor arquitectónico y cultural.
                Con la llegada de los incas, Huamachuco se convirtió en un importante centro administrativo y religioso. Sin embargo, con la llegada de los conquistadores españoles en el siglo XVI, la ciudad pasó a formar parte del Virreinato del Perú y experimentó cambios significativos en su estructura y sociedad.</p>
            </div>
          </div>
        </div>
      </Layout>
      <div className='bg-white pt-4 pb-16 mt-8'>
        <Layout>
          <section className='mt-8'>
            <h2 className='scrollBottom'>HIJOS ILUSTRES DE HUAMACHUCO</h2>
            <div className='grid grid-cols-1 w-full justify-center items-center mt-6 gap-6 xl:grid-cols-2'>
              <article className='flex flex-col scrollLeft w-full h-full justify-center items-center gap-4 border rounded-2xl border-slate-400 md:flex-row md:max-h-80 lg:max-h-60 xl:max-h-80'>
                <img src="/images/Turismo/huamachuco/jfsc.jpg" alt="Jose Faustino Sanchez Carrion" className='w-full h-64 object-cover bg-center bg-cover max-w-xs rounded-2xl md:h-full max-h-80 lg:w-40' />
                <div className='w-full'>
                  <h4>José Faustino Sánchez Carrión (1787-1825)</h4>
                  <p className='p-4'>Nació en Huamachuco y fue un destacado político, periodista y educador peruano. Fue uno de los principales ideólogos de la independencia del Perú y participó activamente en la lucha por la emancipación del país. Sánchez Carrión es recordado como un prócer de la independencia y su nombre ha sido inmortalizado en Huamachuco.</p>
                </div>
              </article>
              <article className='flex flex-col scrollRight w-full h-full justify-center items-center gap-4 border rounded-2xl border-slate-400 md:flex-row md:max-h-80 lg:max-h-60 xl:max-h-80'>
                <img src="/images/Turismo/huamachuco/vallejo.jpg" alt="Jose Faustino Sanchez Carrion" className='w-full h-64 object-cover bg-center bg-cover max-w-xs rounded-2xl md:h-full max-h-80 lg:w-40' />
                <div className='w-full'>
                  <h4>César Abraham Vallejo Mendoza (1892-1938)</h4>
                  <p className='p-4'>Aunque nació en Santiago de Chuco, una provincia cercana a Huamachuco, César Vallejo es considerado uno de los hijos ilustres de la región. Fue uno de los poetas más importantes del siglo XX en América Latina y su obra literaria es reconocida a nivel mundial por su innovación y profundidad. Su legado literario sigue siendo una fuente de inspiración para muchas generaciones.</p>
                </div>
              </article>
              <article className='flex flex-col scrollLeft w-full h-full justify-center items-center gap-4 border rounded-2xl border-slate-400 md:flex-row md:max-h-80 lg:max-h-60 xl:max-h-80'>
                <img src="/images/Turismo/huamachuco/ciroalegria.png" alt="Jose Faustino Sanchez Carrion" className='w-full h-64 object-cover bg-center bg-cover max-w-xs rounded-2xl md:h-full max-h-80 lg:w-40' />
                <div className='w-full'>
                  <h4>Ciro Alegría Bazán (1909-1967)</h4>
                  <p className='p-4'>Nació en Huamachuco y es uno de los escritores más influyentes del Perú. Es conocido por su novela "El mundo es ancho y ajeno", una obra maestra de la literatura indigenista en América Latina. Ciro Alegría fue un defensor de los derechos de los pueblos indígenas y su obra literaria destaca el respeto por la cultura y la identidad peruana.</p>
                </div>
              </article>
              <article className='flex flex-col scrollRight w-full h-full justify-center items-center gap-4 border rounded-2xl border-slate-400 md:flex-row md:max-h-80 lg:max-h-60 xl:max-h-80'>
                <img src="/images/Turismo/huamachuco/eltunante.jpeg" alt="Jose Faustino Sanchez Carrion" className='w-full h-64 object-cover bg-center bg-cover max-w-xs rounded-2xl md:h-full max-h-80 lg:w-40' />
                <div className='w-full'>
                  <h4>Abelardo Gamarra Rondo "El Tunante" (1868-1952)</h4>
                  <p className='p-4'>Nació en Huamachuco y es recordado como un poeta y escritor destacado. Su seudónimo "El Tunante" proviene de su estilo jocoso y alegre en la poesía y la narrativa. Sus versos pícaros y humorísticos han sido apreciados por generaciones y forman parte del acervo cultural de la región.</p>
                </div>
              </article>
            </div>
          </section>
        </Layout>
      </div>
      <Layout>
        <section className='mt-8 md:mt-16'>
          <h2 className='scrollBottom'>BATALLA DE HUAMACHUCO</h2>
          <div className='mt-6 flex flex-col gap-4 justify-center items-center md:flex-row md:gap-8'>
            <div className='w-full scrollLeft'>
              <img src="/images/Turismo/huamachuco/batallahco.webp" alt="Batalla de Huamachuco" className='w-full h-56 object-cover bg-center bg-cover rounded-2xl md:h-80' />
            </div>
            <div className='w-full scrollRight'>
              La Batalla de Huamachuco fue un enfrentamiento militar ocurrido el 10 de julio de 1883, durante la Guerra del Pacífico. Fue uno de los últimos episodios de esta guerra que enfrentó a Perú y Bolivia contra Chile.
              <br />
              En esta batalla, el ejército chileno dirigido por el general Pedro Lagos derrotó a las fuerzas peruanas lideradas por el coronel Leoncio Prado Gutiérrez. Tras la derrota, Prado y su caballería continuaron la lucha en una carga final que terminó con la captura y posterior fusilamiento del joven coronel, quien es considerado un héroe nacional peruano.
              <br />
              La Batalla de Huamachuco marcó el fin de la resistencia militar peruana en la guerra y tuvo un impacto significativo en la historia de Perú y de América Latina.
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default HistoryHco