import MiraCarousel from '../components/MiraCarousel';
import Navbar from '../components/Navbar';
import Prenav from '../components/Prenav';
import AboutUs from '../components/AboutUs';
import Offer from '../components/Offer';
import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import Licence from '../components/Licence';
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
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
