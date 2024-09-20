import "./header.css";
import CTA from "./CTA";
import ME from "assets/atifsimsek.png";
import HeaderSocials from "./HeaderSocials";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="no-margin" id="home">
      <div className="container header-container">
        <h5>{t("HEADER.greeting")}</h5>
        <h1>Atıf Şimşek</h1>
        <h5 className="text-light">{t("HEADER.profession")}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Atıf Şimşek" />
        </div>

        <a href="#contact" className="scroll-down">
          {t("HEADER.scrollDown")}
        </a>
      </div>
      <LanguageButton />
    </header>
  );
};

export default Header;
