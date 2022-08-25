import React from "react";

const GridSection = () => {
  return (
    <section className='h-screen mt-[12rem] xs:mt-10'>
      <div className='grid grid-cols-1 md:text-left sm:grid-cols-2 justify-items-center place-items-center'>
        <div className='mb-5 xs:mb-0'>
          <h2 className='text-3xl text-center sm:text-left md:text-5xl font-bold text-gray-700 leading-[3rem] md:leading-[4rem]'>
            LO <span className='text-green-400'>IMPORTANTE</span> SON
            <br /> LOS <span className='text-green-400'>BUENOS HÁBITOS</span>,
            <br /> NO LAS <span className='text-green-400'>EXCEPCIONES</span>.
          </h2>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <picture>
            <img
              src='grid/1.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/2.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/3.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/4.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/5.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/6.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/7.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/8.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
          <picture>
            <img
              src='grid/9.jpg'
              className='h-[150px] w-[150px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              alt='food'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
