import Link from "next/link";
import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../public/6683-prepear-loader-animation.json";

const HomeLayout = () => {
  return (
    <section className='h-screen mt-[8rem] md:mt-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center gap-[1rem] md:mt-0'>
        <div className='text-center sm:text-left sm:ml-5'>
          <p className='text-4xl font-bold text-green-500 opacity-70'>
            BIENVENIDOS
          </p>
          <h1 className='text-6xl font-bold text-gray-700'>
            ESPACIO SALUDABLE
          </h1>
          <p className='sm:text-end text-lg'>
            de{" "}
            <span className='text-green-500 opacity-70'>
              Maria Eugenia Sosa
            </span>{" "}
            M.P. 326
          </p>
        </div>
        <div className='w-[200px] md:w-full'>
          <Lottie
            animationData={animationData}
            loop={true}
            speed={1}
            play={true}
          />
          {/* <div className=''>
        <picture>
          <img src='/assets/hero.png' className='w-[500px] h-[550px] object-cover' />
        </picture>
      </div> */}
        </div>

        <div className='absolute top-[85%] sm:top-[90%] sm:left-[40%] md:top-[70%] md:left-[35%] '>
          <Link href={"/nuestrosproductos"}>
            <a>
              <button className='bg-green-500 p-3 rounded-2xl text-white font-medium shadow-lg hover:bg-white hover:text-green-700 hover:border hover:border-green-500 text-2xl md:text-sm xl:text-base'>
                Comprar Productos
              </button>
            </a>
          </Link>
        </div>

        <div className='absolute top-[72%] sm:top-[90%] sm:left-[15%] md:top-[70%] md:left-[25%] '>
          <Link
            href={`https://wa.me/543794924822?text=Hola Maria Eugenia! Quiero solicitar un turno.`}
          >
            <a>
              <button className='bg-gray-500 p-3 py-[0.8rem] rounded-2xl text-white font-medium shadow-lg hover:bg-white hover:text-green-700 hover:border hover:border-green-500 text-2xl md:text-sm xl:text-base'>
                Solicitar Turno
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeLayout;
