import React from "react";

const About = () => {
  return (
    <section className=' sm:bg-green-400/10 sm:py-10 h-screen md:flex justify-center items-center'>
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
              Hola馃憢! Soy Maria Eugenia Sosa M.P. 326 Lic. en Nutrici贸n egresada
              por la UCP - Corrientes. Con pr谩cticas profesionales y trabajo de
              fin de grado (TIF) en Valencia, Espa帽a.
            </p>
            <p className='mb-4'>
              Certificada internacionalmente en antropometr铆a (ISAK) nivel I con
              Francis Holway en Buenos Aires, Argentina. Asimismo, participo activamente
              en capacitaciones, jornadas, congresos y cursos relacionados con
              temas de nutrici贸n, actividad f铆sica y antropometr铆a.
            </p>
            <p>
              En la actualidad, me dedico a ayudar a personas a mejorar su
              alimentaci贸n, su relaci贸n con la comida, lograr sus objetivos y
              mantenerlos en el tiempo. Tambi茅n, formo parte del equipo de
              promoci贸n y prevenci贸n de salud en la Municipalidad de Corrientes,
              Capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
