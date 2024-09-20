/* eslint-disable jsx-a11y/anchor-has-content */
import "./portfolio.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Project from "components/project/Project";
import { projectsData } from "data/project";

const Portfolio = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState(projectsData.slice(0, 6));
  const [showMore, setShowMore] = useState(true);

  const numItemsToShow = 6;

  const handleLoadMore = () => {
    const currentNumItems = projects.length;
    const nextNumItems = currentNumItems + numItemsToShow;
    const newProjects = projectsData.slice(0, nextNumItems);
    setProjects(newProjects);

    if (newProjects.length === projectsData.length) {
      setShowMore(false);
    }
  };

  const handleShowLess = () => {
    setProjects(projectsData.slice(0, numItemsToShow));
    setShowMore(true);
  };

  return (
    <>
      <section id="portfolio">
        <h5>{t("PROJECTS.intro")}</h5>
        <h2>{t("PROJECTS.title")}</h2>

        <div className="container portfolio-container">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              img={project.image}
              github={project.github}
              live={project.live}
            />
          ))}
          {showMore && projects.length < projectsData.length && (
            <button className="btn btn-primary more" onClick={handleLoadMore}>
              {t("PROJECTS.loadMore")}
            </button>
          )}
          {!showMore && (
            <button className="btn btn-primary more" onClick={handleShowLess}>
              {t("PROJECTS.showLess")}
              <a className="btnLink" href="#portfolio" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
