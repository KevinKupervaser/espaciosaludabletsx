import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import GridSection from "../components/grid/GridSection";
import Inbody from "../components/inbody/Inbody";
import HomeLayout from "../components/layout/HomeLayout";
import Mision from "../components/mision/Mision";
import Navbar from "../components/navbar/Navbar";
import PricingCards from "../components/pricing/PricingCards";
import Testimonials from "../components/testimonials/Testimonials";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Espacio Saludable</title>
        <meta name='espacio saludable' content='nutrición y salud' />
        <link rel='icon' href='/pear.png' />
      </Head>

      {/* <Navbar /> */}
      <HomeLayout />
      <About />
      <GridSection />
      <Mision />
      <Inbody />
      {/* <PricingCards /> */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
