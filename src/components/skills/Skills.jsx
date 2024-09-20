import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaBootstrap, FaSass, FaNpm } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiJira,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  DevExtremeIcon,
  FigmaIcon,
  FirebaseIcon,
  JestIcon,
  MongoDbIcon,
  PostmanIcon,
} from "assets/icons/icons";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h5>{t("SKILLS.title")}</h5>
      <h2>{t("SKILLS.subtitle")}</h2>

      <div className="container experience-container">
        <div className="experience-1">
          <h3>{t("SKILLS.frontendDevelopment")}</h3>
          <div className="experience-content">
            <article className="experience-details">
              <div className="title">
                <AiFillHtml5
                  size={20}
                  style={{ color: "#E34E26" }}
                  className="experience-details-icon"
                />
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaCss3Alt size={20} className="experience-details-icon" />
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience-details">
              <div className="title">
                <SiJavascript
                  size={20}
                  style={{ color: "#F7E018" }}
                  className="experience-details-icon"
                />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaReact size={20} className="experience-details-icon" />
                <h4>React</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiTypescript
                  size={20}
                  style={{ color: "#007ACC" }}
                  className="experience-details-icon"
                />
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <TbBrandNextjs
                  size={22}
                  style={{ color: "#000000" }}
                  className="experience-details-icon"
                />
                <h4>Next.js</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiRedux
                  size={20}
                  style={{ color: "#764ABC" }}
                  className="experience-details-icon"
                />
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaSass
                  size={20}
                  style={{ color: "#CD6799" }}
                  className="experience-details-icon"
                />
                <h4>Scss/Sass</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <DevExtremeIcon />
                <h4>DevExtreme</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 36 32"
                  fill="none"
                  className="css-1170n61"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                    fill="#007FFF"
                  ></path>
                </svg>
                <h4>MaterialUI</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiTailwindcss size={20} className="experience-details-icon" />
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaBootstrap
                  size={20}
                  style={{ color: "#764ABC" }}
                  className="experience-details-icon"
                />
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-2">
          <h3>{t("SKILLS.otherTools")}</h3>
          <div className="experience-content">
            <article className="experience-details">
              <div className="title">
                <SiJira size={20} style={{ color: "#1868DB" }} />
                <h4>Jira</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FigmaIcon />
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <PostmanIcon />
                <h4>Postman</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <MongoDbIcon />
                <h4>Mongo DB</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FirebaseIcon />
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <JestIcon />
                <h4>Jest</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiGit
                  style={{ color: "#F05033" }}
                  className="experience-details-icon"
                />
                <h4>GİT</h4>
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaNpm
                  size={22}
                  style={{ color: "#CC3534" }}
                  className="experience-details-icon"
                />
                <h4>NPM</h4>
              </div>
            </article>
            <div className="content-language">
              <h3>{t("SKILLS.language")}</h3>
              <article className="experience-details">
                <div className="title">
                  <BsPatchCheckFill className="experience-details-icon" />
                  <h4>{t("SKILLS.english")}</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
