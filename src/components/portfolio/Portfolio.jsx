/* eslint-disable jsx-a11y/anchor-has-content */
import "./portfolio.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Project from "components/project/Project";
import { projectsData } from "data/project";

const Portfolio = () => {
  const { language } = useSelector((state) => state.languageReducer);
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
        <h5>
          {language === "tr"
            ? "Yaptığım Bazı Çalışmalar"
            : "Some of the Work I Have Done"}
        </h5>
        <h2>{language === "tr" ? "Projelerim" : "Projects"}</h2>

        <div className="container portfolio-container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              titleEng={project.titleEng}
              img={project.image}
              github={project.github}
              live={project.live}
            />
          ))}
          {showMore && projects.length < projectsData.length && (
            <button className="btn btn-primary more" onClick={handleLoadMore}>
              {language === "tr" ? "Daha fazla yükle" : "Load more"}
            </button>
          )}
          {!showMore && (
            <button className="btn btn-primary more" onClick={handleShowLess}>
              {language === "tr" ? "Daha az göster" : "Show less"}
              <a className="btnLink" href="#portfolio" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
