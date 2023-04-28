import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/hakkimizda.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar></Navbar>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Biz Kimiz?"
    text="Neden Biz?">

    </Hero>
    
    <AboutUs></AboutUs>
    <Footer></Footer> 
    </>
    
  );
}

export default About;
