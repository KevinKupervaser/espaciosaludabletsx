import React from "react";

const Inbody = () => {
  return (
    <section>
      <div className='grid grid-cols-1 xs:grid-cols-2 justify-items-center place-items-center h-[100vh] bg-green-100 mt-[10rem] md:mt-0'>
        <div>
          <picture>
            <img
              src='assets/inbody.png'
              className='w-[100px] h-[200px] md:w-[200px] md:h-[300px] object-contain'
              alt='inbody'
            />
          </picture>
        </div>
        <div className='p-5 md:p-0'>
          <h2 className='font-bold text-center md:text-left text-3xl md:text-6xl text-green-400'>
            InBody <span className='text-gray-700'>120</span>
          </h2>
          <p className='text-gray-500 text-xs md:text-base md:px-0 text-center xs:text-left md:max-w-[700px] md:mr-10 mt-5 leading-7 md:leading-[2rem]'>
            Lo importante no es el peso, sino la composición
            corporal, utilizo lo último en estudio InBody, que a través de un
            sistema de bioimpedancia en solo dos minutos obtenemos el detalle de
            cada parte de tu cuerpo:
            <br /> Peso, Masa grasa corporal, Masa muscular, Índice de masa
            corporal, Control de peso (peso ideal), Grasa segmental, Historial
            de composición corporal, Nivel de grasa visceral, y mucho más!
            <br /> Luego de realizar el estudio, realizo un diagnostico y planteamos los objetivos en
            base a lo que te gusta y te armo un plan personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inbody;
