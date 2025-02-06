// import Navbar from "./components/Navbar";
import Contact from "../components/Contact";
import Home from "../components/Home";
// import About from "../components/About";
import { Qualifications } from "../components/Qualifications";
import Objective from "../components/Objective";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Words_I_Live from "../components/Words_I_Live";
import AboutMe from "../components/aboutMe";

export default function Main() {
  return (
    <div className="container mx-auto">
      

      <div id="Home" className="py-1">
        <Home />
      </div>

     
      <div id="About" className="py-1">
        <AboutMe/>
      </div>

      <div id= "Objective" className="py-1">
        <Objective />
      </div>

      <seciton id="Words_I_Live" className="py-1">
        <Words_I_Live />
      </seciton>

      <div id="Projects" className="py-1">
        <Projects />
      </div>

      <div id="Qualifications" className="py-1">
        <Qualifications />
      </div>

      <div id="Contact" className="py-1">
        <Contact />
      </div>

  
      <div className="py-1">
        <Footer />
      </div>
    </div>
  );
}