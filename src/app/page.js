"use client";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import { Qualifications } from "./components/Qualifications";
import Objective from "./components/Objective";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Words_I_Live from "./components/Words_I_Live";
import DSA from "./components/DSA"; // Import DSA component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function Main() {
  return (
  
       <div className="container mx-auto"> 

        <section className="py-1">
          <Navbar />
        </section>

        <section id="Home" className="py-1">
          <Home/>
        </section>

        {/* Main Routes */}
        {/* <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/DSA" element={<DSA />} />
        </Routes> */}

        {/* Static Sections */}
        <section id="About" className="py-1">
          <About />
        </section>

        <section className="py-1">
          <Objective />
        </section>

        <section id="Words_I_Live" className="py-1">
          <Words_I_Live />
        </section>

        <section id="Projects" className="py-1">
          <Projects />
        </section>

        <section id="Qualifications" className="py-1">
          <Qualifications />
        </section>

        <section id="Contact" className="py-1">
          <Contact />
        </section>

        {/* Footer Section */}
        <section className="py-1">
          <Footer />
        </section>
      </div>

  );
}