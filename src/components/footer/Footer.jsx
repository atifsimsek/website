/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            href="#home"
          >
            {t("FOOTER.home")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();

              scrollToSection("#about");
            }}
            href="#about"
          >
            {t("FOOTER.about")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#skills");
            }}
            href="#skills"
          >
            {t("FOOTER.skills")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#experience");
            }}
            href="#experience"
          >
            {t("FOOTER.experience")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#portfolio");
            }}
            href="#portfolio"
          >
            {t("FOOTER.projects")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#education");
            }}
            href="#education"
          >
            {t("FOOTER.education")}
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            href="#contact"
          >
            {t("FOOTER.contact")}
          </a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://github.com/atifsimsek"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/at%C4%B1f-%C5%9Fim%C5%9Fek-179b07177/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/atifsimsek/"
        >
          <FiInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/atifsimsek_"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Atıf Şimşek</small>
      </div>
    </footer>
  );
};

export default Footer;
