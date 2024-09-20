import "./project.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Project = ({ id, img, github, live }) => {
  const { t } = useTranslation();

  return (
    <article className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={img} alt={t(`PROJECTS.projectsList.${id}`)} />
      </div>
      <h3>{t(`PROJECTS.projectsList.${id}`)}</h3>
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
          {t("PROJECTS.viewDemo")}
        </a>
      </div>
    </article>
  );
};

export default Project;
