import './Service.css'
// import { Hero } from './components/Hero'
import Nav from './components/Nav'
import ServiceHero from './components/ServiceHero'
import Skills from './components/Skills'
import { Feature1,Feature2,Feature3,Feature4 } from './components/CustomServices'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Service() {
  return (
    <>
      <Nav />
      <ServiceHero />
      <Skills />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />

    </>
  )
}

export default Service