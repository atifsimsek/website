import About from "components/about/About";
import Contact from "components/contact/Contact";
import Skills from "components/skills/Skills";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import Portfolio from "components/portfolio/Portfolio";
import Education from "components/education/education";
import Experience from "components/experience/Experience";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    };
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
