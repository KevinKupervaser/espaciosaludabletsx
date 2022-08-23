import React from "react";

const Navbar = () => {
  return (
    <div className='fixed w-full top-0'>
      <div className='bg-gray-200/30 p-3 fixed'>
        <nav className='flex flex-row items-center justify-center space-x-4 fixed w-full'>
          <a className='cursor-pointer hover:text-green-500 hover:underline'>BIENVENIDOS</a>
          <a className='cursor-pointer hover:text-green-500 hover:underline'>MISION</a>
          <a className='cursor-pointer hover:text-green-500 hover:underline'>INBODY</a>
          <a className='cursor-pointer hover:text-green-500 hover:underline'>MIS PACIENTES</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
