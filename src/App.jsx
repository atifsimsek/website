import About from "components/about/About";
import Contact from "components/contact/Contact";
import Experience from "components/experience/Experience";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import Portfolio from "components/portfolio/Portfolio";
import Education from "components/education/education";

function App() {
  return (
    < >
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
