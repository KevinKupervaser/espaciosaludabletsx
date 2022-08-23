import React from "react";

const Mision = () => {
  return (
    <section>
      <div className='flex flex-col text-center h-[50vh]'>
        <h2 className='text-2xl font-semibold text-gray-600 mt-[2rem] sm:mt-[8rem] md:mt-[2rem] '>
          Misión<span className='ml-1'>🎯</span>
        </h2>
        <p className='text-gray-400 text-sm px-10 sm:px-0 max-w-[1040px] mx-auto leading-7 mt-5'>
          "Promover un buen estado nutricional a fin de preservar la salud y
          mejorar la calidad de vida, participar en la prevención y el
          tratamiento de las enfermedades influenciables por la alimentación,
          desarrollando en forma permanente acciones de educación alimentaria.
          <br />
          Una alimentación saludable es aquella que es balanceada, nutritiva y
          que a la vez puede ser espontánea y flexible. La que te aporta energía
          y que te permite vivir una vida plena sin necesidad de llevarte a
          extremos, restricciones u obsesiones."
        </p>
      </div>
    </section>
  );
};

export default Mision;
