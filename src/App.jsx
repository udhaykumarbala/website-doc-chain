// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Features from './components/Features'
// import {Feature1,Feature2, Feature3, Feature4} from './components/Feature'
// import { Hero } from './components/Hero'
// import Nav from './components/Nav'
// import Solutions from './components/Solutions'
// import Title from './components/Title'
// import Partners from './components/Partners'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
// import Service from './Service'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Service />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
