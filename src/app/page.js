"use client";

import Contact from "../components/Contact";
import Home from "../components/Home";
import { Qualifications } from "../components/Qualifications";
import Objective from "../components/Objective";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Words_I_Live from "../components/Words_I_Live";
import AboutMe from "../components/aboutMe";

export default function Main() {
  return (
    <main className="min-h-screen">
      <div id="Home">
        <Home />
      </div>

      <div id="About">
        <AboutMe/>
      </div>

      <div id="Objective" className="py-1">
        <Objective />
      </div>

      <section id="Words_I_Live">
        <Words_I_Live />
      </section>

      <div id="Projects">
        <Projects />
      </div>

      <div id="Qualifications">
        <Qualifications />
      </div>

      <div id="Contact">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}