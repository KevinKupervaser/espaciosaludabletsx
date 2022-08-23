import React from "react";

const About = () => {
  return (
    <section className='mt-[13rem] sm:mt-0 sm:bg-green-400/10 sm:py-10 md:h-screen md:flex justify-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center gap-4 sm:gap-0'>
        <div className='md:ml-[10rem]'>
          <picture>
            <img
              src='assets/euge.png'
              className='w-[350px] h-[350px] object-cover rounded-md shadow-lg'
              alt='fotografia de nutricionista'
            />
          </picture>
        </div>
        <div className=''>
          <div className='text-sm w-[340px] sm:text-xs md:text-sm md:w-[600px] max-w-[700px] leading-6 p-5 bg-green-600/20 rounded-xl shadow-lg sm:mr-[3.5rem] md:mr-[18rem] text-green-700 text-justify'>
            <p className='mb-4'>
              Hola👋! Soy Maria Eugenia Sosa M.P. 326 Lic. en Nutrición egresada
              por la UCP - Corrientes. Con prácticas profesionales y trabajo de
              fin de grado (TIF) en Valencia, España.
            </p>
            <p className='mb-4'>
              Certificada internacionalmente en antropometría (ISAK) nivel I con
              Francis Holway en Buenos Aires, Argentina. Asimismo, participó activamente
              en capacitaciones, jornadas, congresos y cursos relacionados con
              temas de nutrición, actividad física y antropometría.
            </p>
            <p>
              En la actualidad, me dedico a ayudar a personas a mejorar su
              alimentación, su relación con la comida, lograr sus objetivos y
              mantenerlos en el tiempo. También, formo parte del equipo de
              promoción y prevención de salud en la Municipalidad de Corrientes,
              Capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
