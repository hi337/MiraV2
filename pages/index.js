import MiraCarousel from '../components/MiraCarousel';
import Navbar from '../components/Navbar';
import Prenav from '../components/Prenav';
import AboutUs from '../components/AboutUs';
import Offer from '../components/Offer';
import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import Licence from '../components/Licence';
import Footer from "../components/Footer"
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Miracare Pharmacy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
      </Head>
      <Prenav/>
      <Navbar/>
      <MiraCarousel/>
      <AboutUs/>
      <Offer/>
      <ContactUs/>
      <FAQ/>
      <Licence/>
      <Footer/>
    </div>
  )
}
