import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Friends from '../components/Friends';
import Activity from '../components/Acitivty';
import BHUFShowcase from '../components/BHUFShowcase';
import AboutUs from '../components/AboutUs';
import EventShowcase from '../components/EventShowcase';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <section id="BHUF">
      <Head>
        <title>BHUF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Friends/>
      <Activity/>
      <BHUFShowcase/>
      <AboutUs/>
      <EventShowcase/>
      <Footer/>
    </section>
  )
}
