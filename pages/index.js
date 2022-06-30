import MiraCarousel from '../components/MiraCarousel';
import Navbar from '../components/Navbar';
import Prenav from '../components/Prenav';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div>
      <Prenav/>
      <Navbar/>
      <MiraCarousel/>
      <AboutUs/>
    </div>
  )
}
