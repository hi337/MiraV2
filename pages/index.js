import MiraCarousel from "../components/MiraCarousel";
import Navbar from "../components/Navbar";
import Prenav from "../components/Prenav";
import AboutUs from "../components/AboutUs";
import Offer from "../components/Offer";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Licence from "../components/Licence";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Miracare Pharmacy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Prenav />
      <Navbar />
      <MiraCarousel />
      <AboutUs />
      <Offer />
      <ContactUs />
      <FAQ />
      <Licence />
      <Footer />
    </div>
  );
}
