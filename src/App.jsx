import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
// import { AISpeechFeatureSection } from "./components/AI-Speech-Feature/AISpeechFeatureSection";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Service />} />
            {/* <Route
               path='/text-to-speech'
               element={<AISpeechFeatureSection />}
            /> */}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
