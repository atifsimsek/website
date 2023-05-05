import "./project.css";
import React from "react";
import { useSelector } from "react-redux";
const Project = ({ title, titleEng, img, github, live }) => {
  const { language } = useSelector((state) => state.languageReducer);

  return (
    <article className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={img} alt="" />
      </div>
      <h3>{language === "en" ? titleEng || title : title}</h3>
      <div className="portfolio-item-cta">
        <a className="btn" target="_blank" rel="noreferrer" href={github}>
          Github{" "}
        </a>
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
          href={live}
        >
          Demo İçin Tıklayın{" "}
        </a>
      </div>
    </article>
  );
};

export default Project;
