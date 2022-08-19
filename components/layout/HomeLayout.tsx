import Link from "next/link";
import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../public/6683-prepear-loader-animation.json";


const HomeLayout = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center mt-[10vh] gap-[1rem] sm:gap-0 md:mt-0'>
      <div className='text-center sm:text-left sm:ml-5'>
        <p className='text-4xl font-bold text-green-500 opacity-70'>
          BIENVENIDOS
        </p>
        <h1 className='text-6xl font-bold text-gray-700'>ESPACIO SALUDABLE</h1>
        <p className='sm:text-end text-lg'>
          by{" "}
          <span className='text-green-500 opacity-70'>Maria Eugenia Sosa</span>{" "}
          M.P. 326
        </p>
      </div>
      <div>
        <Lottie
          animationData={animationData}
          loop={true}
          speed={1}
          play={true}
        />
      </div>

      <div className='absolute top-[80%] md:top-[15%] md:left-[33%] xl:top-[70%] xl:left-[35%] '>
        <Link href={"/nuestrosproductos"}>
          <a>
            <button className='bg-green-500 p-6 rounded-2xl sm:p-3 text-white font-medium shadow-lg hover:bg-white hover:text-green-700 hover:border hover:border-green-500 text-2xl md:text-sm xl:text-base'>
              Comprar Productos
            </button>
          </a>
        </Link>
      </div>

      
    </div>
  );
};

export default HomeLayout;
