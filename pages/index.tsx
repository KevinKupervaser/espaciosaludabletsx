import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from '../components/layout/HomeLayout';


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Espacio Saludable</title>
        <meta name='espacio saludable' content='nutrición y salud' />
        <link rel='icon' href='/pear.png' />
      </Head>
      

      <HomeLayout />
    </div>
  );
};

export default Home;
