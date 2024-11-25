import "./Service.css";
// import { Hero } from './components/Hero'
import Nav from "./components/Nav";
import ServiceHero from "./components/services/ServiceHero";
import Skills from "./components/Skills";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FeatureServices } from "./components/services/FeatureServices";

function Service() {
   return (
      <>
         <Nav />
         <ServiceHero />
         <Skills />
         <FeatureServices />
      </>
   );
}

export default Service;
