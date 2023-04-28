import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero
    cName="hero"
    heroImg="https://images.pexels.com/photos/8650280/pexels-photo-8650280.jpeg?cs=srgb&dl=pexels-jess-loiterton-8650280.jpg&fm=jpg"
    title="Sizin hikayeniz Sizin yolculuğunuz"
    text="Favori yolculuğunuzu oluşturun">

    </Hero>
    <Destination></Destination>
    <Trip/>
    <Footer></Footer>
      
    </>
  );
}

export default Home;
