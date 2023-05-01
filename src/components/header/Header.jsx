import "./header.css";
import CTA from "./CTA";
import ME from "assets/atifsimsek.png";
import HeaderSocials from "./HeaderSocials";
import LanguageButton from "./LanguageButton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const { language } = useSelector((state) => state.languageReducer);

  useEffect(() => {
    fetch(
      `https://api.countapi.xyz/update/asimsek.com/${process.env.REACT_APP_KEY}?amount=1`
    );
  }, []);

  return (
    <header className="no-margin" id="#">
      <div className="container header-container">
        <h5>{language === "tr" ? "Merhaba Ben" : "Hello I'm"}</h5>
        <h1>Atıf Şimşek</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          {language === "tr" ? "Aşağı Kaydır" : "Scroll Down"}
        </a>
      </div>
      <LanguageButton />
    </header>
  );
};

export default Header;
