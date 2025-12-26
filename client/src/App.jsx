import React,{useEffect} from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GoToTop from './components/GoToTop'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import useLenis from "./hooks/useLenis";
import useScrollToTop from "./hooks/useScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
   const lenisRef = useLenis({
    lerp: 0.08,
    wheelMultiplier: 0.6,
    disableOnTouch: true,
  });

  useScrollToTop(lenisRef);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
   <div>
      <GoToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
