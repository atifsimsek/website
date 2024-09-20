import "./about.css";
import img1 from "assets/about-img.jpeg";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t("ABOUT.title")}</h5>
      <h2>{t("ABOUT.subtitle")}</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={img1} alt="About Me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>{t("ABOUT.firstCardTitle")}</h5>
              <small>{t("ABOUT.firstCardDesc")}</small>
            </article>
            <article className="about-card">
              <FaUserTie className="about-icon" />
              <h5>{t("ABOUT.thirdCardTitle")}</h5>
              <small>{t("ABOUT.thirdCardDesc")}</small>
            </article>
            <article className="about-card">
              <TbCertificate className="about-icon" />
              <h5>{t("ABOUT.secondCardTitle")}</h5>
              <small>{t("ABOUT.secondCardDesc")}</small>
            </article>
          </div>

          <p>{t("ABOUT.aboutMeDesc1")}</p>
          <p className="detail">{t("ABOUT.aboutMeDesc2")}</p>
          <p className="detail">{t("ABOUT.aboutMeDesc3")}</p>

          <a href="#contact" className="left btn btn-primary">
            {t("ABOUT.contactButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
