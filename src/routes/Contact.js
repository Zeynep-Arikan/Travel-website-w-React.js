import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/ileitisim.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="Iletişim"
    text ="Bizimle bağlantı kurun.">

    </Hero>
    
    <ContactForm></ContactForm>
    <Footer></Footer> 
    </>
    
  );
}

export default Contact;