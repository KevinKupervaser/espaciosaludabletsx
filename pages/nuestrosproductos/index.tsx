import Head from 'next/head';
import React from "react";
import StoreLayout from '../../components/layout/StoreLayout';


const NuestrosProductos = () => {
  return (
    <div>
      <Head>
        <title>Espacio Saludable - Nuestros Productos</title>
        <meta name='espacio saludable' content='nutrición y salud' />
        <link rel='icon' href='/avocado.png' />
      </Head>
      <StoreLayout />
    </div>
  );
};

export default NuestrosProductos;
