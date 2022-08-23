import React from "react";

const Testimonials = () => {
  return (
    <section className=''>
      <div className='flex items-center justify-center mt-[5rem]'>
        <h2 className='text-center text-3xl font-bold text-gray-700'>
          ¿QUE DICEN MIS PACIENTES?
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center place-items-center '>
        <div className='flex flex-col justify-center items-center text-center max-w-[500px] p-8'>
          <picture>
            <img src='/assets/quotes.png' className='w-[65px] mr-[10rem]' />
          </picture>
          <picture>
            <img
              src='/assets/julim.jpg'
              className='rounded-full w-[80px] mt-5'
              alt='person'
            />
          </picture>
          <p className='text-[0.7rem] leading-5 mt-5 font-thin'>
            "Euge me ayudo a entender las combinaciones posibles entre proteína,
            carbos y fibra. Tambiíen la importancia de los mismos a la hora de
            seguir objetivos para mejorar mi calidad de vida. Sin dudas la
            recomiendo es una excelente nutricionista y persona."
          </p>
          <h3 className='text-xl font-bold mt-5'>Julian Mendez</h3>
          <p className='text-[0.5rem] mt-1 text-gray-400'>
            Market Research and Sales Assistant en EPG INDUSTRIES
          </p>
        </div>

        <div className='flex flex-col justify-center items-center text-center max-w-[500px] p-8'>
          <picture>
            <img src='/assets/quotes.png' className='w-[65px] mr-[10rem]' />
          </picture>
          <picture>
            <img
              src='/assets/victoriap.jpg'
              className='rounded-full w-[80px] mt-5'
              alt='person'
            />
          </picture>
          <p className='text-[0.7rem] leading-5 mt-5 font-thin'>
            "Desde que arranque las consultas con Euge, no solo logre cambios
            fisicos significativos, sino que además de mejorar mi aspecto e
            incorpar hábitos saludables, observe cambios notables y positivos en
            mis analisis clinicos."
          </p>
          <h3 className='text-xl font-bold mt-5'>Victoria Perren</h3>
          <p className='text-[0.5rem] mt-1 text-gray-400'>CEO vpdulces</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center max-w-[500px] p-8'>
          <picture>
            <img
              src='/assets/quotes.png'
              className='w-[65px] mr-[10rem]'
              alt='person'
            />
          </picture>
          <picture>
            <img
              src='/assets/noelias.jpg'
              className='rounded-full w-[80px] mt-5'
              alt='person'
            />
          </picture>
          <p className='text-[0.7rem] leading-5 mt-5 font-thin'>
            "Con las consultas logre optimizar mucho mejor mi tiempo y con eso
            mis comidas, que solía saltearme, también mejoro muchísimo mi
            rendimiento al entrenar, me siento mucho mejor no solo conmigo misma
            sino también de energía y anímicamente."
          </p>
          <h3 className='text-xl font-bold mt-5'>Noelia Segovia</h3>
          <p className='text-[0.5rem] mt-1 text-gray-400'>Estudiante - UCP</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
