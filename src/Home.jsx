import "./Home.css";
import Features from "./components/Features";
// import { Feature1, Feature2, Feature3, Feature4 } from "./components/Feature";
import { Hero } from "./components/Hero";
import Nav from "./components/Nav";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { FeatureSection } from "./components/featuresList/FeatureSection";
import { featureListData } from "./components/featuresList/featureListData";
import { SpecialFeatureSection } from "./components/AI-Speech-Feature/SpecialFeatureSection";

function Home() {
   return (
      <>
         <Nav />
         <Hero />
         <AboutUs />
         <Solutions />
         <SpecialFeatureSection />
         <FeatureSection featureItems={featureListData} />
         {/* <Feature1 />
         <Feature2 />
         <Feature3 />
         <Feature4 />
         <Features /> Why choose Us */}
         <Features />
         {/* <Partners /> */}
         <Footer />
      </>
   );
}

export default Home;
