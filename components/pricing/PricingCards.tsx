import React from "react";

const PricingCards = () => {
  return (
    <section className='h-screen mb-[36rem] sm:mb-0'>
      <div className='flex items-center justify-center'>
        <h2 className='text-4xl text-center font-semibold mt-[5rem] text-green-500'>
          PLANES NUTRICIONALES
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 justify-items-center place-items-center mt-[4rem] gap-[2rem]'>
        <div className='bg-gray-200 p-5 flex flex-col items-center justify-center shadow-lg rounded-lg'>
          <h3 className='text-base font-bold text-gray-700'>PRIMERA CONSULTA</h3>
          <div className='flex flex-col mt-5 text-lg leading-[3rem]'>
            <p>
              <span>✅</span>Consulta Nutricional
            </p>
            <p>
              <span>🔬</span>Evaluacion Antropometrica
            </p>
            <p>
              <span>📈</span>Plan de Alimentación Personalizado
            </p>
            <p>
              <span>🍐</span>Educación Alimentaria
            </p>
            <p>
              <span>📱</span>Whatsapp
            </p>
            <p>
              <span>💸</span>Valor: $3000
            </p>
          </div>
        </div>


        <div className='bg-gray-200 p-5 flex flex-col items-center justify-center shadow-lg rounded-lg'>
          <h3 className='text-base font-bold text-gray-700'>SEGUIMIENTO</h3>
          <div className='flex flex-col mt-5 text-lg leading-[3rem]'>
            <p>
              <span>✅</span>Consulta Nutricional
            </p>
            <p>
              <span>🔬</span>Evaluacion Antropometrica
            </p>
            <p>
              <span>📈</span>Plan de Alimentación Personalizado
            </p>
            <p>
              <span>🍐</span>Educación Alimentaria
            </p>
            <p>
              <span>📱</span>Whatsapp
            </p>
            <p>
              <span>💸</span>Valor: $1800
            </p>
          </div>
        </div>

        <div className='bg-gray-200 p-5 flex flex-col shadow-lg rounded-lg w-[350px] h-[370px]'>
          <h3 className='text-base text-center font-bold text-gray-700'>EVALUACIÓN ANTROPOMETRICA</h3>
          <div className='flex flex-col mt-5 text-lg leading-[3rem]'>
            <p>
              <span>🔬</span>Evaluacion Antropometrica
            </p>
            <p>
              <span>🩺</span>Diagnostico
            </p>
            <p>
              <span>💸</span>Valor: $1400
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
